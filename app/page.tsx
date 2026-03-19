import Link from 'next/link'

export const metadata = {
  title: 'Manish Kumar — AI Engineer',
  description: 'AI Engineer building production RAG systems, LLM applications, and intelligent pipelines.',
}

export default function Home() {
  return (
    <main style={{ background: '#080B10', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", color: '#E8EAF0' }}>

      {/* ── NAV ─────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(8,11,16,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '60px',
      }}>
        <span style={{ fontWeight: 700, fontSize: '16px', letterSpacing: '-0.3px', color: '#fff' }}>
          Manish Kumar
        </span>
        <div style={{ display: 'flex', gap: '28px', fontSize: '13px', color: '#8B90A0' }}>
          <a href="#blog" style={{ color: '#8B90A0', textDecoration: 'none' }}>Blog</a>
          <a href="#skills" style={{ color: '#8B90A0', textDecoration: 'none' }}>Skills</a>
          <a href="#projects" style={{ color: '#8B90A0', textDecoration: 'none' }}>Projects</a>
          <a href="mailto:manish.engineer.tech.1582@gmail.com" style={{
            background: '#5B7FFF', color: '#fff', padding: '6px 16px',
            borderRadius: '6px', textDecoration: 'none', fontWeight: 500,
          }}>Contact</a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{
        maxWidth: '900px', margin: '0 auto', padding: '100px 32px 80px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* Tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(91,127,255,0.1)', border: '1px solid rgba(91,127,255,0.25)',
          borderRadius: '20px', padding: '5px 14px', marginBottom: '28px',
        }}>
          <span style={{ width: '6px', height: '6px', background: '#34D399', borderRadius: '50%', boxShadow: '0 0 8px #34D399' }} />
          <span style={{ fontSize: '12px', color: '#7C9AFF', fontWeight: 500, letterSpacing: '0.04em' }}>
            AI ENGINEER · OPEN TO WORK
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 700,
          lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '24px', color: '#fff',
        }}>
          Building intelligent<br />
          <span style={{ color: '#5B7FFF' }}>AI systems</span> that<br />
          ship to production.
        </h1>

        <p style={{
          fontSize: '18px', color: '#8B90A0', lineHeight: 1.7,
          maxWidth: '540px', marginBottom: '40px',
        }}>
          I design and build RAG pipelines, LLM applications, and ML infrastructure.
          I document every bug, decision, and trade-off along the way.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/blog/finrag-engine" style={{
            background: '#5B7FFF', color: '#fff', padding: '12px 24px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '14px',
          }}>
            Read FinRAG Deep Dive →
          </Link>
          <a href="https://github.com/manishengineertech1582-code" target="_blank" style={{
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            color: '#E8EAF0', padding: '12px 24px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '14px',
          }}>
            View GitHub
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: '40px', marginTop: '60px', flexWrap: 'wrap',
        }}>
          {[
            ['2,485', 'Document chunks indexed'],
            ['19', 'Bugs found & fixed'],
            ['$0.000479', 'Cost per query'],
            ['4', 'PDFs in knowledge base'],
          ].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#fff', letterSpacing: '-0.5px' }}>{num}</div>
              <div style={{ fontSize: '12px', color: '#555D70', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────── */}
      <section id="blog" style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#5B7FFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Engineering Blog
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', letterSpacing: '-0.5px' }}>
              Deep dives into production AI
            </h2>
          </div>
        </div>

        {/* Featured post */}
        <Link href="/blog/finrag-engine" style={{ textDecoration: 'none', display: 'block', marginBottom: '16px' }}>
           <div style={{
            background: 'linear-gradient(135deg, rgba(91,127,255,0.08) 0%, rgba(155,111,255,0.04) 100%)',
            border: '1px solid rgba(91,127,255,0.2)',
            borderRadius: '16px', padding: '32px',
          }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{
                background: '#5B7FFF', color: '#fff', fontSize: '10px', fontWeight: 700,
                padding: '3px 10px', borderRadius: '10px', letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>Featured</span>
              <span style={{ fontSize: '12px', color: '#555D70' }}>March 2026</span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', letterSpacing: '-0.3px', marginBottom: '10px' }}>
              FinRAG Engine — Building a Production RAG System
            </h3>
            <p style={{ fontSize: '14px', color: '#8B90A0', lineHeight: 1.6, marginBottom: '20px' }}>
              How I built a production RAG system for PDF Q&amp;A — including the pickle
              serialization bug that made 2,484 documents disappear, the embedding model
              mismatch that broke similarity search, and 17 other bugs fixed along the way.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['LangChain 0.3+', 'FAISS', 'OpenAI', 'FastAPI', 'MultiQueryRetriever'].map(tag => (
                <span key={tag} style={{
                  background: 'rgba(91,127,255,0.1)', border: '1px solid rgba(91,127,255,0.2)',
                  color: '#7C9AFF', fontSize: '11px', padding: '3px 10px', borderRadius: '6px',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </Link>

        {/* Second post */}
        <Link href="/blog/ml-system-design" style={{ textDecoration: 'none', display: 'block' }}>
          <div style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px', padding: '28px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', color: '#555D70', marginBottom: '8px' }}>2026</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', letterSpacing: '-0.2px', marginBottom: '8px' }}>
                  Building a Production-Ready Deep Learning System
                </h3>
                <p style={{ fontSize: '14px', color: '#8B90A0', lineHeight: 1.6 }}>
                  PyTorch · FastAPI · Docker · Model Deployment pipelines
                </p>
              </div>
              <span style={{ color: '#5B7FFF', fontSize: '20px', marginLeft: '16px' }}>→</span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── SKILLS ───────────────────────────────────── */}
      <section id="skills" style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        maxWidth: '900px', margin: '0 auto', padding: '80px 32px',
      }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: '#5B7FFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Technical Skills
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', marginBottom: '40px' }}>
          Full AI engineering stack
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {[
            { title: 'AI / Machine Learning', items: 'PyTorch · TensorFlow · Scikit-learn · Transformers · NLP · Computer Vision · RAG Systems', color: '#5B7FFF' },
            { title: 'LLM Engineering', items: 'LangChain 0.3+ · OpenAI API · FAISS · ChromaDB · Prompt Engineering · MultiQueryRetriever', color: '#9B6FFF' },
            { title: 'Data Engineering', items: 'Python · Pandas · NumPy · SQL · Vector Databases · Document Processing · Embeddings', color: '#34D399' },
            { title: 'MLOps & Deployment', items: 'Docker · FastAPI · Uvicorn · Vercel · GitHub Actions · Health Checks · Cost Monitoring', color: '#F59E0B' },
          ].map(({ title, items, color }) => (
            <div key={title} style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px', padding: '24px',
              borderLeft: `3px solid ${color}`,
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{title}</h3>
              <p style={{ fontSize: '13px', color: '#8B90A0', lineHeight: 1.7 }}>{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section id="projects" style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        maxWidth: '900px', margin: '0 auto', padding: '80px 32px',
      }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: '#5B7FFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Projects
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', marginBottom: '40px' }}>
          Production systems I have built
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {[
            {
              name: 'FinRAG Engine',
              desc: 'Production RAG system for PDF document Q&A with Claude-style chat UI',
              tags: ['Python', 'LangChain', 'FAISS', 'FastAPI'],
              url: 'https://github.com/manishengineertech1582-code/finrag-engine',
              highlight: true,
            },
            {
              name: 'Network Log Analyzer',
              desc: 'LLM-powered network log analysis using LangChain and Ollama',
              tags: ['Python', 'LangChain', 'Ollama'],
              url: 'https://github.com/manishengineertech1582-code/network-log-analyzer',
              highlight: false,
            },
          ].map(({ name, desc, tags, url, highlight }) => (
            <a key={name} href={url} target="_blank" style={{ textDecoration: 'none' }}>
              <div style={{
                background: highlight ? 'rgba(91,127,255,0.06)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${highlight ? 'rgba(91,127,255,0.2)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '12px', padding: '24px', height: '100%',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>{name}</h3>
                <p style={{ fontSize: '13px', color: '#8B90A0', lineHeight: 1.6, marginBottom: '16px' }}>{desc}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {tags.map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                      color: '#8B90A0', fontSize: '11px', padding: '2px 8px', borderRadius: '4px',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        maxWidth: '900px', margin: '0 auto', padding: '40px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        <span style={{ fontSize: '13px', color: '#555D70' }}>© 2026 Manish Kumar · AI Engineer</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            ['GitHub', 'https://github.com/manishengineertech1582-code'],
            ['LinkedIn', 'https://www.linkedin.com/in/manish-kumar-8652871/'],
            ['Email', 'mailto:manish.engineer.tech.1582@gmail.com'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: '13px', color: '#8B90A0', textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
      </footer>

    </main>
  )
}
