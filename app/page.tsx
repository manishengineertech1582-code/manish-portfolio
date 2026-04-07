import Link from 'next/link'

export const metadata = {
  title: 'Manish Kumar — AI Engineer',
  description: 'AI Engineer specialising in RAG systems, LLM applications, and production ML pipelines.',
}

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #FAFAFA; font-family: 'Inter', -apple-system, sans-serif; }
        a { transition: opacity 0.15s ease; }
        a:hover { opacity: 0.75; }
        .card-hover { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .card-hover:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important; transform: translateY(-2px); }
        .tag { display: inline-block; background: #F1F5F9; color: #475569; font-size: 12px; font-weight: 500; padding: 4px 10px; border-radius: 6px; }
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .showcase-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: 1fr 1fr !important; }
          .hide-mobile { display: none !important; }
          .hero-name { font-size: 28px !important; }
        }
      `}</style>

      <main style={{ background: '#FAFAFA', minHeight: '100vh', color: '#0F172A', fontFamily: "'Inter', sans-serif" }}>

        {/* ── TOP BAR ──────────────────────────────── */}
        <div style={{ background: '#0F172A', padding: '10px max(20px, calc(50% - 560px))', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontSize: '13px', color: '#94A3B8' }}>Available for AI engineering roles</span>
          <span style={{ width: '4px', height: '4px', background: '#7C3AED', borderRadius: '50%' }} />
          <a href="mailto:manish.kumar75@gmail.com" style={{ fontSize: '13px', color: '#A78BFA', textDecoration: 'none', fontWeight: 500 }}>manish.kumar75@gmail.com</a>
        </div>

        {/* ── NAV ──────────────────────────────────── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(250,250,250,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E2E8F0',
          padding: '0 max(20px, calc(50% - 560px))',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '64px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', fontWeight: 800, color: '#fff',
            }}>
              <a href="https://www.linkedin.com/in/manish-kumar-8652871/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 800 }}>M</a>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#0F172A', letterSpacing: '-0.3px' }}>Manish Kumar</div>
              <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 500 }}>AI Engineer</div>
            </div>
          </div>

          <div className="hide-mobile" style={{ display: 'flex', gap: '32px', fontSize: '14px', alignItems: 'center' }}>
            <a href="#finrag-showcase" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>FinRAG</a>
            <a href="#blog" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>Blog</a>
            <a href="#skills" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>Skills</a>
            <a href="#projects" style={{ color: '#64748B', textDecoration: 'none', fontWeight: 500 }}>Projects</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href="https://github.com/manishengineertech1582-code" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: '#475569', textDecoration: 'none', fontSize: '13px', fontWeight: 500,
              padding: '6px 12px', borderRadius: '7px', border: '1px solid #E2E8F0', background: '#fff',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/manish-kumar-8652871/" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: '#0A66C2', textDecoration: 'none', fontSize: '13px', fontWeight: 500,
              padding: '6px 12px', borderRadius: '7px', border: '1px solid #E2E8F0', background: '#fff',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:manish.kumar75@gmail.com" style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 600,
              padding: '7px 16px', borderRadius: '7px', background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
            }}>
              Email
            </a>
          </div>
        </nav>

        {/* ── HERO ─────────────────────────────────── */}
        <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '72px 20px 80px' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'center' }}>

            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#F0FDF4', border: '1px solid #BBF7D0',
                borderRadius: '100px', padding: '5px 14px', marginBottom: '28px',
              }}>
                <span style={{ width: '7px', height: '7px', background: '#22C55E', borderRadius: '50%' }} />
                <span style={{ fontSize: '12px', color: '#16A34A', fontWeight: 600 }}>Open to work</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(36px, 4.5vw, 58px)', fontWeight: 900,
                lineHeight: 1.08, letterSpacing: '-2px', color: '#0F172A', marginBottom: '20px',
              }}>
                AI Engineer building<br />
                systems that work<br />
                <span style={{ color: '#7C3AED' }}>in production.</span>
              </h1>

              <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.8, marginBottom: '36px', maxWidth: '480px' }}>
                Specialise in RAG pipelines, LLM applications, and scalable ML
                infrastructure. Every system I build is documented end-to-end —
                including every bug, decision, and trade-off.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <Link href="/finrag/index.html" style={{
                  background: '#7C3AED', color: '#fff', padding: '12px 24px',
                  borderRadius: '9px', textDecoration: 'none', fontWeight: 700, fontSize: '14px',
                  boxShadow: '0 2px 12px rgba(124,58,237,0.3)',
                }}>Read FinRAG Case Study {'->'}</Link>
                <a href="https://github.com/manishengineertech1582-code" target="_blank" rel="noopener noreferrer" style={{
                  background: '#fff', border: '1px solid #E2E8F0', color: '#374151',
                  padding: '12px 24px', borderRadius: '9px', textDecoration: 'none', fontWeight: 600, fontSize: '14px',
                }}>View GitHub</a>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#94A3B8' }}>Connect:</span>
                {[
                  ['GitHub', 'https://github.com/manishengineertech1582-code'],
                  ['LinkedIn', 'https://www.linkedin.com/in/manish-kumar-8652871/'],
                  ['Email', 'mailto:manish.kumar75@gmail.com'],
                ].map(([label, href]) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{
                    fontSize: '13px', color: '#7C3AED', textDecoration: 'none', fontWeight: 600,
                  }}>{label}</a>
                ))}
              </div>
            </div>

            {/* Right — Profile card */}
            <div style={{
              background: '#fff', border: '1px solid #E2E8F0', borderRadius: '20px',
              padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '16px',
                  background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', fontWeight: 900, color: '#fff', flexShrink: 0,
                }}>M</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px', color: '#0F172A' }}>Manish Kumar</div>
                  <div style={{ fontSize: '13px', color: '#7C3AED', fontWeight: 600 }}>AI Engineer</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>Available now</div>
                </div>
              </div>

              <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { num: '2,485', label: 'Chunks indexed', color: '#7C3AED' },
                  { num: '19', label: 'Bugs resolved', color: '#4F46E5' },
                  { num: '$0.000479', label: 'Cost / query', color: '#0EA5E9' },
                  { num: '4 PDFs', label: 'Knowledge base', color: '#10B981' },
                ].map(({ num, label, color }) => (
                  <div key={label} style={{ background: '#F8FAFC', borderRadius: '10px', padding: '14px', border: '1px solid #F1F5F9' }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', fontWeight: 700, color, marginBottom: '2px' }}>{num}</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 500 }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Core Stack</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Python', 'LangChain', 'FastAPI', 'FAISS', 'OpenAI', 'Docker'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOG ─────────────────────────────────── */}
        <section id="finrag-showcase" style={{ padding: '0 20px 80px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
              borderRadius: '24px',
              padding: '36px',
              border: '1px solid #1E293B',
              boxShadow: '0 24px 64px rgba(15,23,42,0.18)',
            }}>
              <div className="showcase-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '28px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(96,165,250,0.35)', borderRadius: '999px', padding: '6px 12px', marginBottom: '18px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%' }} />
                    <span style={{ fontSize: '12px', color: '#BFDBFE', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Live FinRAG Page</span>
                  </div>
                  <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.8px', marginBottom: '14px', lineHeight: 1.15 }}>
                    Open the full FinRAG case study directly from the portfolio
                  </h2>
                  <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.8, maxWidth: '620px', marginBottom: '24px' }}>
                    The static showcase page at <span style={{ color: '#93C5FD', fontFamily: "'JetBrains Mono', monospace" }}>/finrag/index.html</span> is now surfaced on the homepage as a first-class route with the full product walkthrough, UI screens, architecture notes, and implementation details.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link href="/finrag/index.html" style={{
                      background: '#3B82F6',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '12px 22px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 700,
                      boxShadow: '0 12px 24px rgba(59,130,246,0.28)',
                    }}>Open FinRAG Page</Link>
                    <a href="https://manish-portfolio-fawn.vercel.app/finrag/index.html" style={{
                      background: 'rgba(255,255,255,0.04)',
                      color: '#E2E8F0',
                      textDecoration: 'none',
                      padding: '12px 22px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      border: '1px solid rgba(148,163,184,0.32)',
                    }}>Direct URL</a>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(15,23,42,0.58)',
                  border: '1px solid rgba(148,163,184,0.22)',
                  borderRadius: '20px',
                  padding: '24px',
                }}>
                  <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>Deployment Path</div>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {[
                      ['Source file', 'public/finrag/index.html'],
                      ['Live route', '/finrag/index.html'],
                      ['Deployment', 'manish-portfolio-fawn.vercel.app'],
                    ].map(([label, value]) => (
                      <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.14)', borderRadius: '14px', padding: '14px 16px' }}>
                        <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{label}</div>
                        <div style={{ fontSize: '14px', color: '#F8FAFC', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CREDITFLOW SHOWCASE ──────────────────── */}
        <section id="creditflow-showcase" style={{ padding: '0 20px 80px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
              borderRadius: '24px',
              padding: '36px',
              border: '1px solid #1E293B',
              boxShadow: '0 24px 64px rgba(15,23,42,0.18)',
            }}>
              <div className="showcase-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '28px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(96,165,250,0.35)', borderRadius: '999px', padding: '6px 12px', marginBottom: '18px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%' }} />
                    <span style={{ fontSize: '12px', color: '#BFDBFE', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Live CreditFlow Page</span>
                  </div>
                  <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.8px', marginBottom: '14px', lineHeight: 1.15 }}>
                    Open the full CreditFlow case study directly from the portfolio
                  </h2>
                  <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.8, maxWidth: '620px', marginBottom: '24px' }}>
                    The production-grade underwriting platform at <span style={{ color: '#93C5FD', fontFamily: "'JetBrains Mono', monospace" }}>/creditflow/index.html</span> is now surfaced on the homepage as a first-class route with the full analyst workspace, evidence-backed memo generation, document ingestion pipeline, and implementation details.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a href="https://manish-portfolio-fawn.vercel.app/creditflow" target="_blank" rel="noopener noreferrer" style={{
                      background: '#3B82F6',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '12px 22px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 700,
                      boxShadow: '0 12px 24px rgba(59,130,246,0.28)',
                    }}>Open CreditFlow Page</a>
                    <a href="https://github.com/manishengineertech1582-code/creditflow" target="_blank" rel="noopener noreferrer" style={{
                      background: 'rgba(255,255,255,0.04)',
                      color: '#E2E8F0',
                      textDecoration: 'none',
                      padding: '12px 22px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      border: '1px solid rgba(148,163,184,0.32)',
                    }}>GitHub URL</a>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(15,23,42,0.58)',
                  border: '1px solid rgba(148,163,184,0.22)',
                  borderRadius: '20px',
                  padding: '24px',
                }}>
                  <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>Deployment Path</div>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {[
                      ['Source file', 'public/creditflow/index.html'],
                      ['Live route', '/creditflow/index.html'],
                      ['Deployment', 'manish-portfolio-fawn.vercel.app'],
                    ].map(([label, value]) => (
                      <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(148,163,184,0.14)', borderRadius: '14px', padding: '14px 16px' }}>
                        <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{label}</div>
                        <div style={{ fontSize: '14px', color: '#F8FAFC', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" style={{ background: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '80px 20px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '3px', height: '18px', background: '#7C3AED', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Engineering Blog</span>
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.6px', marginBottom: '40px' }}>
              Deep dives into production AI systems
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>

              {/* Featured — FinRAG */}
              <Link href="/finrag/index.html" className="card-hover" style={{ textDecoration: 'none', gridColumn: 'span 2' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #FAF5FF 0%, #EEF2FF 100%)',
                  border: '1px solid #DDD6FE', borderRadius: '16px', padding: '32px',
                  display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'start',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <span style={{ background: '#7C3AED', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.06em' }}>★ FEATURED</span>
                      <span style={{ fontSize: '12px', color: '#94A3B8', fontFamily: "'JetBrains Mono', monospace" }}>March 2026 · 20 min read</span>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.3px', marginBottom: '10px' }}>
                      FinRAG Engine — Building a Production RAG System
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.7, marginBottom: '20px', maxWidth: '540px' }}>
                      A complete post-mortem: the pickle serialization bug that silently wiped 2,484 documents,
                      the embedding model mismatch that destroyed similarity search, and every other production
                      failure discovered and fixed along the way.
                    </p>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {[['LangChain 0.3+', '#7C3AED', '#FAF5FF'], ['FAISS', '#4F46E5', '#EEF2FF'], ['OpenAI', '#0EA5E9', '#F0F9FF'], ['FastAPI', '#10B981', '#F0FDF4'], ['MultiQueryRetriever', '#F59E0B', '#FFFBEB']].map(([label, color, bg]) => (
                        <span key={label} style={{ background: bg, color, border: `1px solid ${color}33`, fontSize: '12px', padding: '3px 10px', borderRadius: '6px', fontWeight: 600 }}>{label}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: '#7C3AED', color: '#fff', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>→</div>
                </div>
              </Link>

              {/* AI Engineer Guide — NEW */}
              <a href="/ai-engineer-guide.html" className="card-hover" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '28px', height: '100%', borderTop: '3px solid #10B981' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ background: '#F0FDF4', color: '#16A34A', fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '100px', border: '1px solid #BBF7D0' }}>Reference Guide</span>
                    <span style={{ fontSize: '12px', color: '#94A3B8', fontFamily: "'JetBrains Mono', monospace" }}>March 2026 · 25 min read</span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.2px', marginBottom: '8px' }}>
                    The Complete AI Engineer Term Reference Guide
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.7, marginBottom: '14px' }}>
                    Every AI term, concept, tool, and architecture explained — LLMs, RAG, Agents, Prompt Engineering, Deployment, and the 6-month learning roadmap.
                  </p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {[['LLMs', '#7C3AED', '#FAF5FF'], ['RAG', '#4F46E5', '#EEF2FF'], ['Agents', '#0EA5E9', '#F0F9FF'], ['Prompt Engineering', '#10B981', '#F0FDF4']].map(([label, color, bg]) => (
                      <span key={label} style={{ background: bg, color, border: `1px solid ${color}33`, fontSize: '12px', padding: '3px 10px', borderRadius: '6px', fontWeight: 600 }}>{label}</span>
                    ))}
                  </div>
                </div>
              </a>

              {/* Deep Learning post */}
              <Link href="/blog/ml-system-design" className="card-hover" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '28px', height: '100%' }}>
                  <div style={{ fontSize: '12px', color: '#94A3B8', fontFamily: "'JetBrains Mono', monospace", marginBottom: '10px' }}>2026 · 8 min read</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.2px', marginBottom: '8px' }}>
                    Building a Production-Ready Deep Learning System
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.7 }}>
                    PyTorch pipeline architecture, FastAPI deployment, and Docker containerisation for production ML.
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ── SKILLS ───────────────────────────────── */}
        <section id="skills" style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '3px', height: '18px', background: '#7C3AED', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Technical Skills</span>
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.6px', marginBottom: '40px' }}>
              End-to-end AI engineering
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {[
                { title: 'AI & Machine Learning', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'NLP', 'Computer Vision', 'RAG Systems'], accent: '#7C3AED' },
                { title: 'LLM Engineering', items: ['LangChain 0.3+', 'OpenAI API', 'FAISS', 'Prompt Engineering', 'MultiQueryRetriever', 'Embeddings'], accent: '#4F46E5' },
                { title: 'Data Engineering', items: ['Python', 'Pandas', 'NumPy', 'SQL', 'Vector DBs', 'Document Processing'], accent: '#0EA5E9' },
                { title: 'MLOps & Deployment', items: ['Docker', 'FastAPI', 'Uvicorn', 'Vercel', 'GitHub Actions', 'Health Checks'], accent: '#10B981' },
              ].map(({ title, items, accent }) => (
                <div key={title} className="card-hover" style={{
                  background: '#fff', border: '1px solid #E2E8F0', borderRadius: '14px',
                  padding: '24px', borderTop: `3px solid ${accent}`,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '14px' }}>{title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {items.map(item => <span key={item} className="tag">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────── */}
        <section id="projects" style={{ background: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '80px 20px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '3px', height: '18px', background: '#7C3AED', borderRadius: '2px' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Projects</span>
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.6px', marginBottom: '40px' }}>
              Systems built and shipped
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {[
                { name: 'FinRAG Engine', desc: 'Production RAG system for intelligent PDF Q&A with a Claude-style dark chat UI, Hit@K/MRR evaluation, MultiQueryRetriever, and 19 documented production bugs fixed.', tags: ['Python', 'LangChain', 'FAISS', 'FastAPI', 'OpenAI'], url: '/finrag/index.html', badge: 'Production', accent: '#7C3AED', external: false },
                { name: 'Network Log Analyzer', desc: 'LLM-powered network log analysis using LangChain and Ollama. Parses and interprets complex network logs using local language models without cloud API calls.', tags: ['Python', 'LangChain', 'Ollama'], url: 'https://github.com/manishengineertech1582-code/network-log-analyzer', badge: 'Open Source', accent: '#4F46E5', external: true },
              ].map(({ name, desc, tags, url, badge, accent, external }) => {
                const card = (
                  <div style={{
                    background: '#FAFAFA', border: '1px solid #E2E8F0', borderRadius: '14px',
                    padding: '28px', height: '100%', borderTop: `3px solid ${accent}`,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>{name}</h3>
                      <span style={{ background: `${accent}12`, color: accent, fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '100px', border: `1px solid ${accent}30`, whiteSpace: 'nowrap', marginLeft: '12px' }}>{badge}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.7, marginBottom: '18px' }}>{desc}</p>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                )

                return external ? (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="card-hover" style={{ textDecoration: 'none' }}>
                    {card}
                  </a>
                ) : (
                  <Link key={name} href={url} className="card-hover" style={{ textDecoration: 'none' }}>
                    {card}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section style={{ padding: '80px 20px' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Get in touch
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.8px', marginBottom: '14px' }}>
              Let&apos;s build something together
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, marginBottom: '36px' }}>
              Open to AI engineering roles, RAG consulting, and LLM application development.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:manish.kumar75@gmail.com" style={{
                background: '#7C3AED', color: '#fff', padding: '13px 28px', borderRadius: '9px',
                textDecoration: 'none', fontWeight: 700, fontSize: '14px',
                boxShadow: '0 2px 12px rgba(124,58,237,0.3)',
              }}>manish.kumar75@gmail.com</a>
              <a href="https://www.linkedin.com/in/manish-kumar-8652871/" target="_blank" rel="noopener noreferrer" style={{
                background: '#fff', border: '1px solid #E2E8F0', color: '#374151',
                padding: '13px 28px', borderRadius: '9px', textDecoration: 'none', fontWeight: 600, fontSize: '14px',
              }}>LinkedIn</a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────── */}
        <footer style={{
          background: '#0F172A', padding: '32px max(20px, calc(50% - 560px))',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>© 2026 Manish Kumar · AI Engineer</span>
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

