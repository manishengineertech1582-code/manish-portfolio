export default function FinRAGBlog() {
  return (
    <article>
      <h1>FinRAG Engine — Building a Production RAG System</h1>

      <p>
        FinRAG Engine is a production-grade Retrieval-Augmented Generation (RAG) system
        for intelligent question answering over PDF documents. Built with FastAPI,
        LangChain 0.3+, FAISS, and OpenAI — served through a Claude-style dark chat UI.
      </p>

      <h2>What is RAG?</h2>
      <p>
        Retrieval-Augmented Generation (RAG) is how you give LLMs access to specific
        knowledge — your company's documents, research papers, or any corpus of text.
        Instead of fine-tuning a model (expensive, slow, not updatable), RAG retrieves
        the most relevant passages at query time and injects them into the prompt.
      </p>

      <h2>System Architecture</h2>
      <pre>{`
PDF files (data/)
      ↓
src/ingestion.py     — PyPDFLoader reads each page
      ↓
src/chunking.py      — RecursiveCharacterTextSplitter (800 chars, 150 overlap)
      ↓
src/embeddings.py    — text-embedding-3-small → FAISS index
      ↓
src/retriever.py     — MultiQueryRetriever (k=8)
      ↓
src/generator.py     — create_retrieval_chain + gpt-4o-mini
      ↓
app/routes.py        — POST /api/ask → {answer, sources}
      ↓
static/index.html    — Claude-style chat UI
      `}</pre>

      <h2>Chunking Strategy</h2>
      <p>
        How you split documents matters more than most people realise. FinRAG uses
        LangChain's RecursiveCharacterTextSplitter with 800-character chunks and
        150-character overlap. The splitter tries paragraph breaks first, then sentence
        breaks — preserving semantic units rather than cutting mid-sentence.
      </p>

      <pre>{`
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150,
)
chunks = splitter.split_documents(documents)
      `}</pre>

      <h2>Embeddings and Vector Storage</h2>
      <p>
        Each chunk is embedded using OpenAI's text-embedding-3-small model and stored
        in a local FAISS index. A critical production lesson: the embedding model used
        at index time must exactly match the model used at query time. Using different
        models produces completely wrong similarity scores — a bug that manifests as
        correct page numbers but empty answers.
      </p>

      <pre>{`
# src/embeddings.py — single call, no batching loop
vectorstore = FAISS.from_documents(docs, embeddings)
vectorstore.save_local("vector_store")
      `}</pre>

      <h2>MultiQueryRetriever — Handling Compound Questions</h2>
      <p>
        Standard semantic search fails for compound questions like "What is 6GHz spectrum
        AND what is the difference between deep learning and LLMs?" The combined embedding
        clusters around the dominant topic. FinRAG wraps the base FAISS retriever with
        LangChain's MultiQueryRetriever — the LLM decomposes the question into sub-queries,
        each gets its own FAISS search, and results are merged and deduplicated.
      </p>

      <pre>{`
from langchain.retrievers.multi_query import MultiQueryRetriever

retriever = MultiQueryRetriever.from_llm(
    retriever=base_retriever,
    llm=ChatOpenAI(model="gpt-4o-mini", temperature=0),
)
      `}</pre>

      <h2>The Hardest Bug — Pickle Memo-Optimization</h2>
      <p>
        The most subtle bug: all 2,485 document chunks had empty page_content after
        indexing. FAISS returned correct page numbers, but the LLM received blank text
        and answered "not available." Diagnosis required reading the raw binary of
        index.pkl — the string "page_content" appeared exactly 1 time across 2,485 documents.
      </p>
      <p>
        Root cause: the batching loop used FAISS.add_documents() which stores Documents
        by reference. Python's pickle memo-optimization collapsed all 2,485 objects into
        one shared reference. Fix: replace the loop with a single FAISS.from_documents()
        call, which forces deep-copy semantics.
      </p>

      <pre>{`
# Verify your vector store is healthy
python -c "
raw = open('vector_store/index.pkl', 'rb').read()
print('page_content count:', raw.count(b'page_content'))
# Should output: 2485
"
      `}</pre>

      <h2>Production API with FastAPI</h2>
      <pre>{`
@router.post("/api/ask", response_model=QueryResponse)
async def ask_question(request: QueryRequest, qa_chain = Depends(get_pipeline)):
    result = qa_chain.invoke({"input": request.question})
    return QueryResponse(
        answer=result.get("answer", ""),
        sources=[doc.metadata for doc in result.get("context", [])]
    )
      `}</pre>

      <h2>Evaluation Metrics</h2>
      <p>
        Most RAG projects have no idea if their system works well. FinRAG implements
        Hit@K (did the correct document appear in the top-K results?) and MRR
        (how highly was the correct document ranked?). These metrics are run against
        a ground truth test set to catch regressions when chunking or retrieval
        parameters change.
      </p>

      <h2>Cost Analysis</h2>
      <p>
        Using gpt-4o-mini and text-embedding-3-small keeps costs extremely low.
        Indexing 2,485 chunks costs approximately $0.01 (one-time). Each query
        costs approximately $0.000479 — around 2,000 questions per dollar.
      </p>

      <h2>Key Engineering Lessons</h2>
      <ul>
        <li>Token costs scale fast — a prompt using 2,000 tokens when 500 would work is 4x the cost.</li>
        <li>Most RAG failures are retrieval failures, not LLM failures.</li>
        <li>Pin your embedding model name as a constant — used in both indexing and query time.</li>
        <li>Use FAISS.from_documents() not add_documents() — pickle memo-optimization will silently corrupt your store.</li>
        <li>Projects running only on your laptop create zero business value. Deploy it.</li>
      </ul>

      <h2>Source Code</h2>
      <p>
        Full source code available on GitHub:
        <a href="https://github.com/manishengineertech1582-code/finrag-engine">
          github.com/manishengineertech1582-code/finrag-engine
        </a>
      </p>
    </article>
  );
}