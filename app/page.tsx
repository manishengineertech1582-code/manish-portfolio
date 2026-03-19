import Link from 'next/link'

export const metadata = {
  title: 'Manish Kumar — AI Engineer',
  description: 'AI Engineer specialising in RAG systems, LLM applications, and production ML pipelines.',
}

export default function Home() {
  return (
    <main style={{ background: '#0D1117', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", color: '#E8EAF0' }}>

      {/* ── NAV ─────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(13,17,23,0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 700, color: '#fff',
          }}>M</div>
          <span style={{ fontWeight: 700, fontSize: '15px', color: '#fff' }}>Manish Kumar</span>
        </div>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', alignItems: 'center' }}>
          <a href="#blog" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Blog</a>
          <a href="#skills" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Skills</a>
          <a href="#projects" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Projects</a>
          <a href="mailto:manish.engineer.tech.1582@gmail.com" style={{
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            color: '#fff', padding: '8px 20px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '13px',
          }}>Get in Touch</a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{
        maxWidth: '960px', margin: '0 auto', padding: '110px 40px 90px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '60px', left: '0', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.3)',
          borderRadius: '20px', padding: '6px 16px', marginBottom: '32px',
        }}>
          <span style={{ width: '7px', height: '7px', background: '#34D399', borderRadius: '50%', boxShadow: '0 0 10px #34D399' }} />
          <span style={{ fontSize: '12px', color: '#34D399', fontWeight: 600, letterSpacing: '0.05em' }}>
            AVAILABLE FOR NEW OPPORTUNITIES
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(44px, 6vw, 76px)', fontWeight: 800,
          lineHeight: 1.08, letterSpacing: '-2px', marginBottom: '28px', color: '#fff',
        }}>
          Turning raw data<br />
          into <span style={{
            background: 'linear-gradient(135deg, #6366F1 0%, #A78BFA 50%, #EC4899 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>intelligent</span><br />
          production systems.
        </h1>

        <p style={{
          fontSize: '19px', color: '#9CA3AF', lineHeight: 1.75,
          maxWidth: '560px', marginBottom: '44px', fontWeight: 400,
        }}>
          I specialise in building RAG pipelines, LLM-powered applications, and
          scalable ML infrastructure — from prototype to production, with every
          architectural decision clearly documented.
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Link href="/blog/finrag-engine" style={{
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            color: '#fff', padding: '14px 28px',
            borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '14px',
            boxShadow: '0 4px 24px rgba(99,102,241,0.35)',
          }}>
            Read FinRAG Case Study →
          </Link>
          <a href="https://github.com/manishengineertech1582-code" target="_blank" rel="noopener noreferrer" style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)',
            color: '#E8EAF0', padding: '14px 28px',
            borderRadius: '10px', textDecoration: 'none', fontWeight: 500, fontSize: '14px',
          }}>
            View GitHub
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '0', marginTop: '72px',
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px', overflow: 'hidden', flexWrap: 'wrap',
        }}>
          {[
            ['2,485', 'Chunks indexed', '#6366F1'],
            ['19', 'Bugs resolved', '#8B5CF6'],
            ['$0.000479', 'Cost per query', '#34D399'],
            ['4', 'Technical PDFs', '#F59E0B'],
          ].map(([num, label, color], i) => (
            <div key={label} style={{
              flex: '1', minWidth: '140px', padding: '24px 28px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}>
              <div style={{ fontSize: '26px', fontWeight: 800, color, letterSpacing: '-0.5px' }}>{num}</div>
              <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────── */}
      <section id="blog" style={{ maxWidth: '960px', margin: '0 auto', padding: '90px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#6366F1', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              ✦ Engineering Blog
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '-0.8px', margin: 0 }}>
              Deep dives into production AI
            </h2>
          </div>
        </div>

        {/* Featured */}
        <Link href="/blog/finrag-engine" style={{ textDecoration: 'none', display: 'block', marginBottom: '20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.06) 50%, rgba(236,72,153,0.04) 100%)',
            border: '1px solid rgba(99,102,241,0.25)',
            borderRadius: '20px', padding: '36px',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative orb */}
            <div style={{
              position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px',
              background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <span style={{
                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                color: '#fff', fontSize: '10px', fontWeight: 800,
                padding: '4px 12px', borderRadius: '20px', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>★ Featured</span>
              <span style={{ fontSize: '13px', color: '#6B7280' }}>March 2026 · 15 min read</span>
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', letterSpacing: '-0.4px', marginBottom: '12px' }}>
              FinRAG Engine — Building a Production RAG System
            </h3>
            <p style={{ fontSize: '15px', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '24px', maxWidth: '600px' }}>
              A complete engineering post-mortem on building a RAG system for PDF Q&amp;A —
              covering the pickle serialization bug that silently corrupted 2,484 documents,
              the embedding model mismatch that destroyed similarity search, and every other
              production failure discovered along the way.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { label: 'LangChain 0.3+', bg: 'rgba(99,102,241,0.15)', color: '#A5B4FC' },
                { label: 'FAISS', bg: 'rgba(139,92,246,0.15)', color: '#C4B5FD' },
                { label: 'OpenAI', bg: 'rgba(52,211,153,0.1)', color: '#6EE7B7' },
                { label: 'FastAPI', bg: 'rgba(245,158,11,0.1)', color: '#FCD34D' },
                { label: 'MultiQueryRetriever', bg: 'rgba(236,72,153,0.1)', color: '#F9A8D4' },
              ].map(({ label, bg, color }) => (
                <span key={label} style={{
                  background: bg, color, fontSize: '12px',
                  padding: '4px 12px', borderRadius: '6px', fontWeight: 500,
                }}>{label}</span>
              ))}
            </div>
          </div>
        </Link>

        {/* Second post */}
        <Link href="/blog/ml-system-design" style={{ textDecoration: 'none', display: 'block' }}>
          <div style={{
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px', padding: '28px 32px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px',
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px', fontWeight: 500 }}>2026 · 8 min read</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', letterSpacing: '-0.2px', marginBottom: '6px' }}>
                Building a Production-Ready Deep Learning System
              </h3>
              <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>
                PyTorch pipeline architecture · FastAPI deployment · Docker containerisation
              </p>
            </div>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#818CF8', fontSize: '18px', flexShrink: 0,
            }}>→</div>
          </div>
        </Link>
      </section>

      {/* ── SKILLS ───────────────────────────────────── */}
      <section id="skills" style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        maxWidth: '960px', margin: '0 auto', padding: '90px 40px',
      }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#6366F1', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
          ✦ Technical Skills
        </div>
        <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '-0.8px', marginBottom: '48px' }}>
          End-to-end AI engineering
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {[
            { title: 'AI & Machine Learning', items: 'PyTorch · TensorFlow · Scikit-learn · Transformers · NLP · Computer Vision', color: '#6366F1', bg: 'rgba(99,102,241,0.08)' },
            { title: 'LLM Engineering', items: 'LangChain 0.3+ · OpenAI API · FAISS · Prompt Engineering · RAG Systems · MultiQueryRetriever', color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)' },
            { title: 'Data Engineering', items: 'Python · Pandas · NumPy · SQL · Vector Databases · Document Processing · Embeddings', color: '#34D399', bg: 'rgba(52,211,153,0.06)' },
            { title: 'MLOps & Deployment', items: 'Docker · FastAPI · Uvicorn · Vercel · GitHub Actions · Health Checks · Cost Tracking', color: '#F59E0B', bg: 'rgba(245,158,11,0.06)' },
          ].map(({ title, items, color, bg }) => (
            <div key={title} style={{
              background: bg, border: `1px solid ${color}22`,
              borderRadius: '14px', padding: '24px 22px',
              borderTop: `3px solid ${color}`,
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{title}</h3>
              <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.75, margin: 0 }}>{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section id="projects" style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        maxWidth: '960px', margin: '0 auto', padding: '90px 40px',
      }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#6366F1', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
          ✦ Projects
        </div>
        <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '-0.8px', marginBottom: '48px' }}>
          Systems built and shipped
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            {
              name: 'FinRAG Engine',
              desc: 'Production RAG system for intelligent PDF Q&A with a Claude-style dark chat UI. Complete with evaluation metrics, MultiQueryRetriever, and 19 documented bug fixes.',
              tags: [
                { label: 'Python', color: '#A5B4FC' },
                { label: 'LangChain', color: '#C4B5FD' },
                { label: 'FAISS', color: '#6EE7B7' },
                { label: 'FastAPI', color: '#FCD34D' },
              ],
              url: 'https://github.com/manishengineertech1582-code/finrag-engine',
              accent: '#6366F1',
            },
            {
              name: 'Network Log Analyzer',
              desc: 'LLM-powered network log analysis tool built with LangChain and Ollama. Parses and interprets complex network logs using local language models.',
              tags: [
                { label: 'Python', color: '#A5B4FC' },
                { label: 'LangChain', color: '#C4B5FD' },
                { label: 'Ollama', color: '#6EE7B7' },
              ],
              url: 'https://github.com/manishengineertech1582-code/network-log-analyzer',
              accent: '#8B5CF6',
            },
          ].map(({ name, desc, tags, url, accent }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'rgba(255,255,255,0.025)', border: `1px solid ${accent}33`,
                borderRadius: '16px', padding: '28px',
                borderTop: `3px solid ${accent}`,
                height: '100%', boxSizing: 'border-box',
              }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{name}</h3>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {tags.map(({ label, color }) => (
                    <span key={label} style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color, fontSize: '11px', padding: '3px 10px', borderRadius: '5px', fontWeight: 500,
                    }}>{label}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{
        maxWidth: '960px', margin: '0 auto', padding: '0 40px 90px',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(236,72,153,0.08) 100%)',
          border: '1px solid rgba(99,102,241,0.25)',
          borderRadius: '20px', padding: '48px',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', marginBottom: '12px' }}>
            Let&apos;s build something together
          </h2>
          <p style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '32px', lineHeight: 1.6 }}>
            Open to AI engineering roles, RAG system projects, and LLM application development.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:manish.engineer.tech.1582@gmail.com" style={{
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              color: '#fff', padding: '12px 28px', borderRadius: '10px',
              textDecoration: 'none', fontWeight: 700, fontSize: '14px',
              boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
            }}>Send me a message</a>
            <a href="https://www.linkedin.com/in/manish-kumar-8652871/" target="_blank" rel="noopener noreferrer" style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              color: '#E8EAF0', padding: '12px 28px', borderRadius: '10px',
              textDecoration: 'none', fontWeight: 500, fontSize: '14px',
            }}>LinkedIn</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        maxWidth: '960px', margin: '0 auto', padding: '36px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        <span style={{ fontSize: '13px', color: '#4B5563' }}>© 2026 Manish Kumar · AI Engineer</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            ['GitHub', 'https://github.com/manishengineertech1582-code'],
            ['LinkedIn', 'https://www.linkedin.com/in/manish-kumar-8652871/'],
            ['Email', 'mailto:manish.engineer.tech.1582@gmail.com'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
      </footer>

    </main>
  )
}
