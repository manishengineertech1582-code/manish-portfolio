import Link from 'next/link'

export const metadata = {
  title: 'Manish Kumar — AI Engineer',
  description: 'AI Engineer specialising in RAG systems, LLM applications, and production ML pipelines.',
}

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0F172A; }
        .nav-link:hover { color: #fff !important; }
        .blog-card:hover { border-color: rgba(139,92,246,0.5) !important; transform: translateY(-2px); }
        .blog-card { transition: all 0.2s ease; }
        .skill-card:hover { border-color: rgba(139,92,246,0.3) !important; }
        .skill-card { transition: border-color 0.2s ease; }
        .proj-card:hover { transform: translateY(-3px); border-color: rgba(139,92,246,0.4) !important; }
        .proj-card { transition: all 0.2s ease; }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 30px rgba(139,92,246,0.5) !important; }
        .btn-primary { transition: all 0.2s ease; }
        @media (max-width: 640px) {
          .hero-title { font-size: 36px !important; }
          .nav-links { display: none !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <main style={{ background: '#0F172A', minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: '#E2E8F0' }}>

        {/* ── NAV ──────────────────────────────────── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(15,23,42,0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(148,163,184,0.08)',
          padding: '0 max(24px, calc(50% - 480px))',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '64px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '9px',
              background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '15px', fontWeight: 800, color: '#fff',
              boxShadow: '0 2px 12px rgba(124,58,237,0.4)',
            }}>M</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#F1F5F9', letterSpacing: '-0.2px' }}>Manish Kumar</div>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>AI Engineer</div>
            </div>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '32px', fontSize: '14px', alignItems: 'center' }}>
            {['Blog', 'Skills', 'Projects'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 500 }}>{item}</a>
            ))}
            <a href="mailto:manish.engineer.tech.1582@gmail.com" className="btn-primary" style={{
              background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              color: '#fff', padding: '8px 20px', borderRadius: '8px',
              textDecoration: 'none', fontWeight: 600, fontSize: '13px',
              boxShadow: '0 2px 12px rgba(124,58,237,0.35)',
            }}>Get in Touch</a>
          </div>
        </nav>

        {/* ── HERO ─────────────────────────────────── */}
        <section style={{ padding: '80px max(24px, calc(50% - 480px)) 0', position: 'relative', overflow: 'hidden' }}>

          {/* Background mesh */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 50%, rgba(79,70,229,0.08) 0%, transparent 60%)
            `,
          }} />

          {/* Available badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(52,211,153,0.08)',
            border: '1px solid rgba(52,211,153,0.25)',
            borderRadius: '100px', padding: '6px 16px', marginBottom: '32px',
          }}>
            <span style={{ width: '7px', height: '7px', background: '#34D399', borderRadius: '50%', boxShadow: '0 0 0 3px rgba(52,211,153,0.2)' }} />
            <span style={{ fontSize: '12px', color: '#34D399', fontWeight: 600, letterSpacing: '0.04em' }}>Available for new opportunities</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title" style={{
            fontSize: 'clamp(40px, 5.5vw, 70px)', fontWeight: 900,
            lineHeight: 1.06, letterSpacing: '-2.5px', color: '#F8FAFC',
            marginBottom: '24px', maxWidth: '700px',
          }}>
            I build AI systems<br />
            that work in<br />
            <span style={{
              background: 'linear-gradient(90deg, #A78BFA 0%, #818CF8 40%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>production.</span>
          </h1>

          <p style={{
            fontSize: '18px', color: '#94A3B8', lineHeight: 1.75,
            maxWidth: '520px', marginBottom: '40px', fontWeight: 400,
          }}>
            AI Engineer specialising in RAG pipelines, LLM applications,
            and scalable ML infrastructure. I ship reliable systems and
            document every architectural decision along the way.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '72px' }}>
            <Link href="/blog/finrag-engine" className="btn-primary" style={{
              background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              color: '#fff', padding: '14px 28px', borderRadius: '10px',
              textDecoration: 'none', fontWeight: 700, fontSize: '14px',
              boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              Read FinRAG Case Study <span>→</span>
            </Link>
            <a href="https://github.com/manishengineertech1582-code" target="_blank" rel="noopener noreferrer" style={{
              background: 'rgba(248,250,252,0.04)',
              border: '1px solid rgba(148,163,184,0.15)',
              color: '#CBD5E1', padding: '14px 28px', borderRadius: '10px',
              textDecoration: 'none', fontWeight: 600, fontSize: '14px',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="stats-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(148,163,184,0.08)',
            borderLeft: '1px solid rgba(148,163,184,0.08)',
          }}>
            {[
              { num: '2,485', label: 'Document chunks indexed', color: '#A78BFA' },
              { num: '19', label: 'Bugs found & resolved', color: '#818CF8' },
              { num: '$0.000479', label: 'Cost per RAG query', color: '#38BDF8' },
              { num: '4 PDFs', label: 'Knowledge base sources', color: '#34D399' },
            ].map(({ num, label, color }) => (
              <div key={label} style={{
                padding: '28px 24px',
                borderRight: '1px solid rgba(148,163,184,0.08)',
                borderBottom: '1px solid rgba(148,163,184,0.08)',
              }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '24px', fontWeight: 700, color, letterSpacing: '-0.5px', marginBottom: '6px' }}>{num}</div>
                <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOG ─────────────────────────────────── */}
        <section id="blog" style={{ padding: '96px max(24px, calc(50% - 480px))' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '4px', height: '20px', background: 'linear-gradient(to bottom, #7C3AED, #4F46E5)', borderRadius: '2px' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Engineering Blog</span>
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.8px', marginBottom: '48px' }}>
            Deep dives into production AI
          </h2>

          {/* Featured card */}
          <Link href="/blog/finrag-engine" className="blog-card" style={{ textDecoration: 'none', display: 'block', marginBottom: '16px' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(79,70,229,0.08) 40%, rgba(56,189,248,0.05) 100%)',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '20px', padding: '36px', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, right: 0, width: '300px', height: '300px',
                background: 'radial-gradient(circle at center, rgba(124,58,237,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', color: '#fff',
                  fontSize: '10px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>★ Featured</span>
                <span style={{ fontSize: '13px', color: '#64748B', fontFamily: "'JetBrains Mono', monospace" }}>March 2026 · 15 min read</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.4px', marginBottom: '12px' }}>
                FinRAG Engine — Building a Production RAG System
              </h3>
              <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, marginBottom: '24px', maxWidth: '580px' }}>
                A complete post-mortem on building a production RAG system for PDF Q&amp;A —
                the pickle serialization bug that silently wiped 2,484 documents, the embedding
                model mismatch that destroyed similarity search, and 17 other bugs resolved.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  ['LangChain 0.3+', 'rgba(124,58,237,0.15)', '#C4B5FD'],
                  ['FAISS', 'rgba(79,70,229,0.15)', '#A5B4FC'],
                  ['OpenAI', 'rgba(52,211,153,0.1)', '#6EE7B7'],
                  ['FastAPI', 'rgba(245,158,11,0.1)', '#FCD34D'],
                  ['MultiQueryRetriever', 'rgba(56,189,248,0.1)', '#7DD3FC'],
                ].map(([label, bg, color]) => (
                  <span key={label} style={{
                    background: bg, color, fontSize: '12px',
                    padding: '5px 12px', borderRadius: '6px', fontWeight: 600,
                  }}>{label}</span>
                ))}
              </div>
            </div>
          </Link>

          {/* Second post */}
          <Link href="/blog/ml-system-design" className="blog-card" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{
              background: 'rgba(248,250,252,0.02)', border: '1px solid rgba(148,163,184,0.08)',
              borderRadius: '14px', padding: '28px 32px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px',
            }}>
              <div>
                <div style={{ fontSize: '12px', color: '#64748B', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>2026 · 8 min read</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#F1F5F9', letterSpacing: '-0.2px', marginBottom: '6px' }}>
                  Building a Production-Ready Deep Learning System
                </h3>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>
                  PyTorch pipeline architecture · FastAPI deployment · Docker containerisation
                </p>
              </div>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A78BFA', fontSize: '18px',
              }}>→</div>
            </div>
          </Link>
        </section>

        {/* ── SKILLS ───────────────────────────────── */}
        <section id="skills" style={{
          padding: '96px max(24px, calc(50% - 480px))',
          background: 'rgba(248,250,252,0.015)',
          borderTop: '1px solid rgba(148,163,184,0.08)',
          borderBottom: '1px solid rgba(148,163,184,0.08)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '4px', height: '20px', background: 'linear-gradient(to bottom, #7C3AED, #4F46E5)', borderRadius: '2px' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Technical Skills</span>
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.8px', marginBottom: '48px' }}>
            Full AI engineering stack
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px' }}>
            {[
              { title: 'AI & Machine Learning', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'NLP', 'Computer Vision', 'RAG Systems'], accent: '#7C3AED' },
              { title: 'LLM Engineering', items: ['LangChain 0.3+', 'OpenAI API', 'FAISS', 'Prompt Engineering', 'MultiQueryRetriever', 'Embeddings'], accent: '#4F46E5' },
              { title: 'Data Engineering', items: ['Python', 'Pandas', 'NumPy', 'SQL', 'Vector DBs', 'Document Processing'], accent: '#0EA5E9' },
              { title: 'MLOps & Deployment', items: ['Docker', 'FastAPI', 'Uvicorn', 'Vercel', 'GitHub Actions', 'Health Checks'], accent: '#10B981' },
            ].map(({ title, items, accent }) => (
              <div key={title} className="skill-card" style={{
                background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(148,163,184,0.08)',
                borderRadius: '14px', padding: '24px', borderTop: `3px solid ${accent}`,
              }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F1F5F9', marginBottom: '16px' }}>{title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {items.map(item => (
                    <span key={item} style={{
                      background: 'rgba(148,163,184,0.06)', border: '1px solid rgba(148,163,184,0.1)',
                      color: '#94A3B8', fontSize: '12px', padding: '3px 10px', borderRadius: '5px', fontWeight: 500,
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────── */}
        <section id="projects" style={{ padding: '96px max(24px, calc(50% - 480px))' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '4px', height: '20px', background: 'linear-gradient(to bottom, #7C3AED, #4F46E5)', borderRadius: '2px' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Projects</span>
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.8px', marginBottom: '48px' }}>
            Systems built and shipped
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              {
                name: 'FinRAG Engine',
                desc: 'Production RAG system for intelligent PDF Q&A with a Claude-style dark chat UI, evaluation metrics, and 19 documented bug fixes.',
                tags: [['Python', '#C4B5FD'], ['LangChain', '#A5B4FC'], ['FAISS', '#7DD3FC'], ['FastAPI', '#6EE7B7']],
                url: 'https://github.com/manishengineertech1582-code/finrag-engine',
                accent: '#7C3AED',
                badge: 'Production',
              },
              {
                name: 'Network Log Analyzer',
                desc: 'LLM-powered network log analysis using LangChain and Ollama. Parses complex network logs using local language models.',
                tags: [['Python', '#C4B5FD'], ['LangChain', '#A5B4FC'], ['Ollama', '#6EE7B7']],
                url: 'https://github.com/manishengineertech1582-code/network-log-analyzer',
                accent: '#4F46E5',
                badge: 'Open Source',
              },
            ].map(({ name, desc, tags, url, accent, badge }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="proj-card" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'rgba(248,250,252,0.02)', border: `1px solid rgba(148,163,184,0.1)`,
                  borderRadius: '16px', padding: '28px', height: '100%',
                  borderTop: `3px solid ${accent}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#F8FAFC' }}>{name}</h3>
                    <span style={{
                      background: `${accent}20`, color: accent,
                      fontSize: '10px', fontWeight: 700, padding: '3px 10px',
                      borderRadius: '100px', letterSpacing: '0.06em', textTransform: 'uppercase',
                      border: `1px solid ${accent}40`,
                    }}>{badge}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {tags.map(([label, color]) => (
                      <span key={label} style={{
                        background: 'rgba(148,163,184,0.06)', border: '1px solid rgba(148,163,184,0.1)',
                        color, fontSize: '11px', padding: '3px 10px', borderRadius: '5px', fontWeight: 600,
                      }}>{label}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section style={{ padding: '0 max(24px, calc(50% - 480px)) 96px' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(79,70,229,0.1) 50%, rgba(56,189,248,0.06) 100%)',
            border: '1px solid rgba(124,58,237,0.2)', borderRadius: '20px', padding: '56px 48px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
              width: '400px', height: '400px',
              background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#A78BFA', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Open to work
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.8px', marginBottom: '12px' }}>
              Let&apos;s build something remarkable
            </h2>
            <p style={{ fontSize: '16px', color: '#94A3B8', marginBottom: '36px', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 36px' }}>
              Open to AI engineering roles, RAG consulting, and LLM application projects.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:manish.engineer.tech.1582@gmail.com" className="btn-primary" style={{
                background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                color: '#fff', padding: '13px 28px', borderRadius: '10px',
                textDecoration: 'none', fontWeight: 700, fontSize: '14px',
                boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
              }}>Send me an email</a>
              <a href="https://www.linkedin.com/in/manish-kumar-8652871/" target="_blank" rel="noopener noreferrer" style={{
                background: 'rgba(248,250,252,0.05)', border: '1px solid rgba(148,163,184,0.15)',
                color: '#CBD5E1', padding: '13px 28px', borderRadius: '10px',
                textDecoration: 'none', fontWeight: 600, fontSize: '14px',
              }}>View LinkedIn</a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────── */}
        <footer style={{
          borderTop: '1px solid rgba(148,163,184,0.08)',
          padding: '32px max(24px, calc(50% - 480px))',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>© 2026 Manish Kumar · AI Engineer</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[['GitHub', 'https://github.com/manishengineertech1582-code'], ['LinkedIn', 'https://www.linkedin.com/in/manish-kumar-8652871/'], ['Email', 'mailto:manish.engineer.tech.1582@gmail.com']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: '13px', color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>{label}</a>
            ))}
          </div>
        </footer>

      </main>
    </>
  )
}
