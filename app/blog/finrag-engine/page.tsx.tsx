import Link from 'next/link'

export const metadata = {
  title: 'FinRAG Engine — Building a Production RAG System',
  description: 'A complete engineering post-mortem on building a production RAG system for PDF Q&A.',
}

export default function FinRAGBlog() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #FAFAFA; }
        pre { white-space: pre; overflow-x: auto; }
        .prose-p { font-size: 16px; color: #374151; line-height: 1.85; margin-bottom: 16px; }
        .prose-h2 { font-size: 22px; font-weight: 800; color: #0F172A; letter-spacing: -0.4px; margin: 48px 0 16px; padding-top: 48px; border-top: 1px solid #F1F5F9; }
        .prose-h3 { font-size: 17px; font-weight: 700; color: #0F172A; margin: 28px 0 12px; }
        .lesson-item { display: flex; gap: 12px; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid #F1F5F9; }
      `}</style>

      <main style={{ background: '#FAFAFA', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

        {/* ── NAV ─────────────────────────────── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(250,250,250,0.95)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E2E8F0',
          padding: '0 max(20px, calc(50% - 560px))',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px',
        }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', fontWeight: 800, color: '#fff',
            }}>M</div>
            <span style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A' }}>Manish Kumar</span>
          </Link>
          <Link href="/" style={{
            fontSize: '13px', color: '#7C3AED', textDecoration: 'none', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            ← Back to home
          </Link>
        </nav>

        {/* ── HERO BANNER ─────────────────────── */}
        <div style={{
          background: 'linear-gradient(135deg, #FAF5FF 0%, #EEF2FF 60%, #F0F9FF 100%)',
          borderBottom: '1px solid #E2E8F0',
          padding: '56px max(20px, calc(50% - 560px)) 48px',
        }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#CBD5E1' }}>/</span>
            <Link href="/#blog" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: '#CBD5E1' }}>/</span>
            <span style={{ fontSize: '13px', color: '#7C3AED', fontWeight: 500 }}>FinRAG Engine</span>
          </div>

          {/* Badge row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ background: '#7C3AED', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.08em' }}>CASE STUDY</span>
            <span style={{ fontSize: '13px', color: '#94A3B8', fontFamily: "'JetBrains Mono', monospace" }}>March 2026</span>
            <span style={{ color: '#E2E8F0' }}>·</span>
            <span style={{ fontSize: '13px', color: '#94A3B8', fontFamily: "'JetBrains Mono', monospace" }}>15 min read</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900,
            color: '#0F172A', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px',
          }}>
            FinRAG Engine — Building a<br />Production RAG System
          </h1>

          <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.7, maxWidth: '580px', marginBottom: '28px' }}>
            A complete engineering post-mortem: 19 bugs found and fixed, a pickle
            serialization issue that silently corrupted 2,484 documents, and every
            architectural decision made from PDF ingestion to deployed chat UI.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {[
              ['LangChain 0.3+', '#7C3AED', '#FAF5FF'],
              ['FAISS', '#4F46E5', '#EEF2FF'],
              ['OpenAI', '#0EA5E9', '#F0F9FF'],
              ['FastAPI', '#10B981', '#F0FDF4'],
              ['MultiQueryRetriever', '#F59E0B', '#FFFBEB'],
            ].map(([label, color, bg]) => (
              <span key={label} style={{
                background: bg, color, border: `1px solid ${color}30`,
                fontSize: '12px', padding: '5px 12px', borderRadius: '7px', fontWeight: 600,
              }}>{label}</span>
            ))}
          </div>

          {/* Source link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13px', color: '#94A3B8' }}>Source code:</span>
            <a href="https://github.com/manishengineertech1582-code/finrag-engine" target="_blank" rel="noopener noreferrer" style={{
              fontSize: '13px', color: '#7C3AED', textDecoration: 'none', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              github.com/manishengineertech1582-code/finrag-engine ↗
            </a>
          </div>
        </div>

        {/* ── CONTENT ─────────────────────────── */}
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 20px 100px' }}>

          {/* Intro */}
          <p className="prose-p">
            FinRAG Engine is a production-grade Retrieval-Augmented Generation system for
            intelligent question answering over PDF documents. Built with FastAPI, LangChain 0.3+,
            FAISS, and OpenAI — served through a Claude-style dark chat UI. This post covers every
            engineering decision, every bug, and everything I learned building it end to end.
          </p>

          {/* What is RAG */}
          <h2 className="prose-h2">What is RAG?</h2>
          <p className="prose-p">
            Retrieval-Augmented Generation gives an LLM access to specific knowledge at query time.
            Instead of expensive fine-tuning, RAG retrieves the most relevant document passages and
            injects them into the prompt. Every answer is grounded in your documents with full
            source citations — fully auditable.
          </p>

          {/* Architecture */}
          <h2 className="prose-h2">System Architecture</h2>
          <p className="prose-p">The full pipeline from raw PDF to answered question:</p>
          <div style={{
            background: '#0F172A', borderRadius: '14px', padding: '28px 28px',
            marginBottom: '24px', border: '1px solid #1E293B',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', lineHeight: '2',
          }}>
            {[
              ['PDF files (data/)', ''],
              ['src/ingestion.py', '— PyPDFLoader reads each page'],
              ['src/chunking.py', '— RecursiveCharacterTextSplitter (800 chars, 150 overlap)'],
              ['src/embeddings.py', '— text-embedding-3-small → FAISS (2,485 chunks)'],
              ['src/retriever.py', '— MultiQueryRetriever (k=8)'],
              ['src/generator.py', '— create_retrieval_chain + gpt-4o-mini'],
              ['app/routes.py', '— POST /api/ask → {answer, sources}'],
              ['static/index.html', '— Claude-style dark chat UI'],
            ].map(([file, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                {i > 0 && i < 8 && (
                  <div style={{ position: 'absolute', marginLeft: '0', color: '#334155', fontSize: '11px' }} />
                )}
                <span style={{ color: i === 0 ? '#F8FAFC' : '#7C3AED', minWidth: '200px', fontWeight: i === 0 ? 700 : 500 }}>
                  {i > 0 && <span style={{ color: '#334155', marginRight: '8px' }}>↓</span>}
                  {file}
                </span>
                {desc && <span style={{ color: '#94A3B8' }}>{desc}</span>}
              </div>
            ))}
          </div>

          {/* Chunking */}
          <h2 className="prose-h2">Chunking Strategy</h2>
          <p className="prose-p">
            Most RAG failures are retrieval failures, not LLM failures. Chunking determines
            retrieval quality. RecursiveCharacterTextSplitter tries paragraph breaks first,
            then sentence breaks — preserving semantic units rather than cutting mid-sentence.
          </p>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px 24px', marginBottom: '16px' }}>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#1E293B', lineHeight: 1.7 }}>{`DEFAULT_CHUNK_SIZE    = 800   # ~200 tokens
DEFAULT_CHUNK_OVERLAP = 150   # preserves sentences at boundaries

splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150,
)
chunks = splitter.split_documents(documents)
# 4 PDFs → 2,485 chunks`}</pre>
          </div>

          {/* MultiQueryRetriever */}
          <h2 className="prose-h2">MultiQueryRetriever — Compound Questions</h2>
          <p className="prose-p">
            Semantic search fails for compound questions like &ldquo;What is 6GHz spectrum AND
            what is the difference between deep learning and LLMs?&rdquo; The combined query
            embedding clusters around the dominant topic — the minority topic gets zero coverage.
          </p>
          <p className="prose-p">
            The fix: MultiQueryRetriever uses gpt-4o-mini to decompose the question into
            sub-queries, runs each independently against FAISS (k=8), then merges and
            deduplicates results.
          </p>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px 24px', marginBottom: '16px' }}>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#1E293B', lineHeight: 1.7 }}>{`from langchain.retrievers.multi_query import MultiQueryRetriever

retriever = MultiQueryRetriever.from_llm(
    retriever=base_retriever,   # FAISS k=8
    llm=ChatOpenAI(model="gpt-4o-mini", temperature=0),
)
# One compound question → 3-4 sub-queries → merged results`}</pre>
          </div>

          {/* BUG 15 */}
          <h2 className="prose-h2">The Hardest Bug — BUG-15: Pickle Memo-Optimization</h2>

          {/* Alert box */}
          <div style={{
            background: '#FFF7ED', border: '1px solid #FED7AA',
            borderLeft: '4px solid #F59E0B', borderRadius: '10px',
            padding: '16px 20px', marginBottom: '20px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#92400E', marginBottom: '4px' }}>Root Cause Discovered</div>
            <div style={{ fontSize: '14px', color: '#78350F', lineHeight: 1.6 }}>
              index.pkl contained &ldquo;page_content&rdquo; exactly <strong>1 time</strong> across 2,485 documents.
              All other documents had empty content — the LLM received blank context.
            </div>
          </div>

          <p className="prose-p">
            The batching loop used FAISS.add_documents() which stores Documents by reference.
            Python&apos;s pickle memo-optimization detected 2,485 objects with identical class
            structure and collapsed them into one shared reference. On deserialization, 2,484
            documents got empty default instances.
          </p>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px 24px', marginBottom: '16px' }}>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#1E293B', lineHeight: 1.7 }}>{`# Diagnose your vector store health
python -c "
raw = open('vector_store/index.pkl', 'rb').read()
print(raw.count(b'page_content'))
# Healthy: 2485    Broken: 1
"

# Fix — single call, no batching loop
vectorstore = FAISS.from_documents(docs, embeddings)`}</pre>
          </div>

          {/* BUG 16 */}
          <h2 className="prose-h2">BUG-16 — Wrong Embedding Model</h2>
          <div style={{
            background: '#FFF1F2', border: '1px solid #FECDD3',
            borderLeft: '4px solid #F43F5E', borderRadius: '10px',
            padding: '16px 20px', marginBottom: '20px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#881337', marginBottom: '4px' }}>Critical Mismatch</div>
            <div style={{ fontSize: '14px', color: '#9F1239', lineHeight: 1.6 }}>
              Index built with <code style={{ background: '#FFE4E6', padding: '1px 6px', borderRadius: '4px' }}>text-embedding-3-small</code> but
              loaded with <code style={{ background: '#FFE4E6', padding: '1px 6px', borderRadius: '4px' }}>text-embedding-ada-002</code> (default).
              Different vector spaces = garbage similarity scores.
            </div>
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px 24px', marginBottom: '16px' }}>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#1E293B', lineHeight: 1.7 }}>{`# src/pipeline.py — FIX
EMBEDDING_MODEL = "text-embedding-3-small"  # named constant
embeddings = OpenAIEmbeddings(model=EMBEDDING_MODEL)`}</pre>
          </div>

          {/* Cost */}
          <h2 className="prose-h2">Cost Analysis</h2>
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#F8FAFC', padding: '12px 20px', borderBottom: '1px solid #E2E8F0' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Operation</span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Cost</span>
            </div>
            {[
              ['Index 2,485 chunks (one-time)', '~$0.01'],
              ['Per query (gpt-4o-mini)', '~$0.000479'],
              ['1,000 queries', '~$0.48'],
              ['10,000 queries / day', '~$4.79 / day'],
            ].map(([op, cost], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '14px 20px', borderBottom: i < 3 ? '1px solid #F1F5F9' : 'none', background: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <span style={{ fontSize: '14px', color: '#374151' }}>{op}</span>
                <span style={{ fontSize: '14px', color: '#10B981', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{cost}</span>
              </div>
            ))}
          </div>

          {/* Lessons */}
          <h2 className="prose-h2">Key Engineering Lessons</h2>
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            {[
              ['Most RAG failures are retrieval failures, not LLM failures. Fix your chunking and retrieval before blaming the model.', '#7C3AED'],
              ['Pin your embedding model as a named constant — used at both index time and query time. Mismatch = wrong vector space = garbage results.', '#4F46E5'],
              ['Never use FAISS.add_documents() in a loop. Python pickle memo-optimization silently corrupts your document store.', '#F43F5E'],
              ['The deprecated LangChain RetrievalQA silently drops context with custom prompts. Use create_retrieval_chain.', '#F59E0B'],
              ['Write evaluation metrics before writing the pipeline. Hit@K = 0 would have caught BUG-15 immediately.', '#10B981'],
              ['Projects running only on your laptop create zero business value. Deploy it.', '#0EA5E9'],
            ].map(([lesson, color], i) => (
              <div key={i} className="lesson-item" style={{ padding: '16px 20px', borderBottom: i < 5 ? '1px solid #F1F5F9' : 'none', background: '#fff', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0, marginTop: '6px' }} />
                <span style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7 }}>{lesson}</span>
              </div>
            ))}
          </div>

          {/* Footer nav */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '28px 0', borderTop: '1px solid #E2E8F0', marginTop: '16px', flexWrap: 'wrap', gap: '16px',
          }}>
            <Link href="/" style={{ fontSize: '14px', color: '#7C3AED', textDecoration: 'none', fontWeight: 600 }}>← Back to home</Link>
            <a href="https://github.com/manishengineertech1582-code/finrag-engine" target="_blank" rel="noopener noreferrer" style={{
              background: '#7C3AED', color: '#fff', padding: '10px 20px', borderRadius: '8px',
              textDecoration: 'none', fontWeight: 700, fontSize: '13px',
            }}>View on GitHub ↗</a>
          </div>
        </div>

        {/* ── FOOTER ──────────────────────────── */}
        <footer style={{
          background: '#0F172A', padding: '28px max(20px, calc(50% - 560px))',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <span style={{ fontSize: '13px', color: '#475569' }}>© 2026 Manish Kumar · AI Engineer</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[['GitHub', 'https://github.com/manishengineertech1582-code'], ['LinkedIn', 'https://www.linkedin.com/in/manish-kumar-8652871/'], ['Email', 'mailto:manish.kumar75@gmail.com']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: '13px', color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>{label}</a>
            ))}
          </div>
        </footer>

      </main>
    </>
  )
}
