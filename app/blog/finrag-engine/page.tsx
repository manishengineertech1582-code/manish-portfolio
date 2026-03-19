import Link from 'next/link'

export const metadata = {
  title: 'FinRAG Engine — Production RAG System',
  description: 'Building a production RAG system for PDF Q&A using LangChain 0.3+, FAISS, and OpenAI.',
}

export default function FinRAGBlog() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mb-8 block">
        &larr; Back to home
      </Link>

      <h1 className="text-4xl font-bold text-white mb-4">
        FinRAG Engine — Building a Production RAG System
      </h1>
      <p className="text-gray-400 mb-2">March 2026 · LangChain 0.3+ · FAISS · OpenAI · FastAPI</p>
      <p className="text-gray-400 mb-10 text-sm">
        Source code:{' '}
        <a href="https://github.com/manishengineertech1582-code/finrag-engine" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">github.com/manishengineertech1582-code/finrag-engine</a>
      </p>

      <div className="space-y-10 text-gray-300 leading-relaxed">

        <section>
          <p>
            FinRAG Engine is a production-grade Retrieval-Augmented Generation system
            for intelligent question answering over PDF documents. Built with FastAPI,
            LangChain 0.3+, FAISS, and OpenAI — served through a Claude-style dark chat UI.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">What is RAG?</h2>
          <p>
            RAG gives an LLM access to specific knowledge at query time. Instead of
            expensive fine-tuning, it retrieves the most relevant document passages and
            injects them into the prompt. Every answer is grounded in your documents
            with full source citations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">System Architecture</h2>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-sm text-gray-300 overflow-x-auto whitespace-pre">
{`PDF files (data/)
      ↓
src/ingestion.py     — PyPDFLoader reads each page
      ↓
src/chunking.py      — RecursiveCharacterTextSplitter (800 chars, 150 overlap)
      ↓
src/embeddings.py    — text-embedding-3-small → FAISS index (2,485 chunks)
      ↓
src/retriever.py     — MultiQueryRetriever (k=8)
      ↓
src/generator.py     — create_retrieval_chain + gpt-4o-mini
      ↓
app/routes.py        — POST /api/ask → {answer, sources}
      ↓
static/index.html    — Claude-style dark chat UI`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Chunking Strategy</h2>
          <p className="mb-4">
            Most RAG failures are retrieval failures, not LLM failures. Chunking determines
            retrieval quality. RecursiveCharacterTextSplitter tries paragraph breaks first,
            then sentence breaks — preserving semantic units rather than cutting mid-sentence.
          </p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-sm text-gray-300 overflow-x-auto whitespace-pre">
{`DEFAULT_CHUNK_SIZE    = 800   # ~200 tokens
DEFAULT_CHUNK_OVERLAP = 150   # preserves sentences at boundaries

splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150,
)
chunks = splitter.split_documents(documents)
# 4 PDFs → 2,485 chunks`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">MultiQueryRetriever</h2>
          <p className="mb-4">
            Semantic search fails for compound questions. The combined query embedding clusters
            around the dominant topic. MultiQueryRetriever uses gpt-4o-mini to decompose the
            question into sub-queries, runs each independently, then merges results.
          </p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-sm text-gray-300 overflow-x-auto whitespace-pre">
{`from langchain.retrievers.multi_query import MultiQueryRetriever

retriever = MultiQueryRetriever.from_llm(
    retriever=base_retriever,
    llm=ChatOpenAI(model="gpt-4o-mini", temperature=0),
)`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            The Hardest Bug — BUG-15: Pickle Memo-Optimization
          </h2>
          <p className="mb-4">
            Every answer was &ldquo;not available&rdquo; even though FAISS returned correct pages.
            Diagnosis: read the raw binary of index.pkl and count occurrences of page_content.
            A healthy 2,485-document store should have it 2,485 times. It appeared exactly 1 time.
          </p>
          <p className="mb-4">
            Root cause: the batching loop used FAISS.add_documents() which stores Documents by
            reference. Python&apos;s pickle memo-optimization collapsed all 2,485 objects into one
            shared reference. Fix: single FAISS.from_documents() call.
          </p>
          <pre className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-sm text-gray-300 overflow-x-auto whitespace-pre">
{`# Diagnose your vector store
python -c "
raw = open('vector_store/index.pkl', 'rb').read()
print(raw.count(b'page_content'))
# Healthy: 2485    Broken: 1
"

# Fix
vectorstore = FAISS.from_documents(docs, embeddings)`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Key Engineering Lessons</h2>
          <ul className="space-y-2 list-none">
            {[
              "Most RAG failures are retrieval failures, not LLM failures.",
              "Pin your embedding model as a named constant — mismatch = wrong vector space.",
              "Never use FAISS.add_documents() in a loop — pickle memo-optimization silently corrupts your store.",
              "The deprecated RetrievalQA silently drops context. Use create_retrieval_chain.",
              "Write evaluation metrics before writing the pipeline.",
              "Projects running only on your laptop create zero business value. Deploy it.",
            ].map((lesson, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-400 mt-0.5">→</span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Cost Analysis</h2>
          <div className="space-y-2">
            {[
              ["Index 2,485 chunks (one-time)", "~$0.01"],
              ["Per query", "~$0.000479"],
              ["1,000 queries", "~$0.48"],
              ["10,000 queries / day", "~$4.79 / day"],
            ].map(([op, cost], i) => (
              <div key={i} className="flex justify-between py-2 border-b border-gray-800 text-sm">
                <span>{op}</span>
                <span className="text-green-400 font-mono">{cost}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div className="mt-16 border-t border-gray-800 pt-8">
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          &larr; Back to home
        </Link>
      </div>

    </main>
  )
}
