import Link from 'next/link'

export const metadata = {
  title: 'AI Platform for RDK-B Broadband Diagnostics',
  description: 'Architecture walkthrough for a deterministic-first AI platform built for RDK-B broadband diagnostics, telemetry correlation, and frontend-led investigation.',
}

const overviewCards = [
  {
    title: 'Deterministic-First Design',
    description:
      'The rule engine anchors every diagnosis. ML and LLM components add confidence and explanation, but the final verdict stays traceable to evidence and standards.',
    accent: '#0EA5E9',
    background: '#F0F9FF',
  },
  {
    title: 'Multi-Source Telemetry',
    description:
      'The platform correlates RDK-B logs, packet captures, TR-069 data, telemetry counters, and operational events in one investigation flow instead of treating them as separate silos.',
    accent: '#10B981',
    background: '#F0FDF4',
  },
  {
    title: 'AI as Advisory Layer',
    description:
      'XGBoost and anomaly detection score patterns, while the LLM translates findings into engineer-readable summaries. Neither bypasses the deterministic system of record.',
    accent: '#F59E0B',
    background: '#FFFBEB',
  },
]

const architectureLayers = [
  {
    title: 'Investigation Workspace',
    description:
      'A session-aware frontend for upload, evidence review, root-cause ranking, and operator-ready export.',
  },
  {
    title: 'Orchestration Layer',
    description:
      'Coordinates ingestion, parsing, correlation, feature extraction, and backend analysis without losing lineage.',
  },
  {
    title: 'Deterministic Rule Engine',
    description:
      'IEEE 802.11-grounded rules evaluate signal quality, retries, steering behavior, authentication failures, and network symptoms.',
  },
  {
    title: 'ML Advisory Layer',
    description:
      'XGBoost and anomaly detection score edge cases and surface confidence signals for analysts.',
  },
  {
    title: 'LLM Explanation Layer',
    description:
      'Turns deterministic findings into readable summaries, but only after the evidence package is already assembled.',
  },
  {
    title: 'Knowledge and Evidence Layer',
    description:
      'Structured features, packet data, log archives, standards references, and wiki-grounded diagnostics keep the system auditable.',
  },
]

const dataFlow = [
  'Upload PCAP files, RDK-B logs, archives, or fixtures through the investigation workspace.',
  'Normalize all inputs into a shared pipeline for parse, correlate, enrich, and evidence extraction.',
  'Build deterministic features from retries, RSSI, steering failures, disconnects, counters, and event sequences.',
  'Run the standards-grounded rule engine to classify the incident and attach evidence.',
  'Layer in ML scoring and LLM explanation without replacing the deterministic diagnosis.',
  'Render ranked causes, remediation guidance, and citations back to the frontend.',
]

const principles = [
  'Rule-based logic makes the final decision. AI supports interpretation, not authority.',
  'Every surfaced finding needs a linked source such as a log line, counter, packet observation, or standards reference.',
  'The investigation has to be replayable end to end, from raw telemetry to the final conclusion.',
  'LLMs are used to explain findings in operator language, not to invent unsupported diagnoses.',
]

const differentiators = [
  'The rules are grounded in broadband and Wi-Fi standards instead of loose heuristics.',
  'Logs, PCAP, telemetry, and management counters are correlated in one pipeline instead of reviewed in isolation.',
  'Every insight is meant to point back to the source artifact that triggered it.',
  'Deterministic reasoning, ML scoring, and LLM narration each have a clear job with no overlap in authority.',
]

export default function RdkbBroadbandDiagnosticsBlog() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #FAFAFA; }
        .prose-p { font-size: 16px; color: #334155; line-height: 1.85; margin-bottom: 16px; }
        .prose-h2 { font-size: 22px; font-weight: 800; color: #0F172A; letter-spacing: -0.4px; margin: 48px 0 18px; padding-top: 48px; border-top: 1px solid #E2E8F0; }
        .section-grid { display: grid; gap: 16px; }
        @media (max-width: 720px) {
          .hero-actions { flex-direction: column; align-items: flex-start !important; }
          .overview-grid { grid-template-columns: 1fr !important; }
          .layer-grid { grid-template-columns: 1fr !important; }
          .nav-stack { flex-direction: column; align-items: flex-start !important; height: auto !important; padding-top: 14px !important; padding-bottom: 14px !important; }
        }
      `}</style>

      <main style={{ background: '#FAFAFA', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
        <nav
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(250,250,250,0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #E2E8F0',
            padding: '0 max(20px, calc(50% - 560px))',
          }}
        >
          <div
            className="nav-stack"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              minHeight: '64px',
            }}
          >
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0EA5E9, #2563EB)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 800,
                  color: '#fff',
                }}
              >
                M
              </div>
              <span style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A' }}>Manish Kumar</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/manish-kumar-8652871/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '13px',
                  color: '#0A66C2',
                  textDecoration: 'none',
                  fontWeight: 600,
                  padding: '7px 12px',
                  borderRadius: '8px',
                  border: '1px solid #DBEAFE',
                  background: '#EFF6FF',
                }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:manish.kumar75@gmail.com"
                style={{
                  fontSize: '13px',
                  color: '#0F172A',
                  textDecoration: 'none',
                  fontWeight: 600,
                  padding: '7px 12px',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                }}
              >
                manish.kumar75@gmail.com
              </a>
              <Link
                href="/#blog"
                style={{
                  fontSize: '13px',
                  color: '#2563EB',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Back to blog
              </Link>
            </div>
          </div>
        </nav>

        <div
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 55%, #F8FAFC 100%)',
            borderBottom: '1px solid #E2E8F0',
            padding: '56px max(20px, calc(50% - 560px)) 48px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#CBD5E1' }}>/</span>
            <Link href="/#blog" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: '#CBD5E1' }}>/</span>
            <span style={{ fontSize: '13px', color: '#0EA5E9', fontWeight: 600 }}>RDK-B Diagnostics</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
            <span style={{ background: '#0EA5E9', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.08em' }}>ARCHITECTURE</span>
            <span style={{ fontSize: '13px', color: '#64748B', fontFamily: "'JetBrains Mono', monospace" }}>April 2026</span>
            <span style={{ color: '#CBD5E1' }}>|</span>
            <span style={{ fontSize: '13px', color: '#64748B', fontFamily: "'JetBrains Mono', monospace" }}>10 min read</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 900,
              color: '#0F172A',
              letterSpacing: '-1.3px',
              lineHeight: 1.08,
              marginBottom: '16px',
              maxWidth: '760px',
            }}
          >
            AI Platform for RDK-B Broadband Diagnostics
          </h1>

          <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.75, maxWidth: '680px', marginBottom: '26px' }}>
            A deterministic-first architecture for broadband diagnostics, built to correlate RDK-B telemetry,
            packet captures, and operational events into evidence-backed root-cause decisions that engineers
            can actually trust.
          </p>

          <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/rdkb-broadband-validation/index.html"
              style={{
                background: '#0F172A',
                color: '#F8FAFC',
                padding: '11px 18px',
                borderRadius: '9px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Open project page
            </Link>
            <a
              href="https://manish-portfolio-fawn.vercel.app/rdkb-broadband-validation/index.html"
              style={{
                background: '#FFFFFF',
                color: '#0EA5E9',
                padding: '11px 18px',
                borderRadius: '9px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
                border: '1px solid #BAE6FD',
              }}
            >
              Live case-study link
            </a>
          </div>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 20px 100px' }}>
          <div
            style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderLeft: '4px solid #0EA5E9',
              borderRadius: '0 14px 14px 0',
              padding: '22px 24px',
              marginBottom: '32px',
            }}
          >
            <p className="prose-p" style={{ marginBottom: 0, color: '#1E3A5F' }}>
              Broadband diagnostics at fleet scale is not just a data-volume problem. It is a correlation problem.
              Every gateway emits thousands of signals, but without a deterministic foundation the system quickly
              devolves into guesswork. The architecture here was built around a simple rule: <strong>determinism
              first, AI second.</strong>
            </p>
          </div>

          <p className="prose-p">
            This blog is based on the architecture draft captured in the attached RDK-B post document and the
            live project page. The platform was designed to ingest RDK-B logs, packet captures, TR-069 telemetry,
            and management counters, then transform them into a structured diagnostic workflow that supports both
            engineering validation and NOC investigation.
          </p>

          <h2 className="prose-h2">Architecture Overview</h2>
          <div className="overview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px', marginBottom: '24px' }}>
            {overviewCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: card.background,
                  border: `1px solid ${card.accent}33`,
                  borderTop: `3px solid ${card.accent}`,
                  borderRadius: '14px',
                  padding: '20px',
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>{card.title}</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.75 }}>{card.description}</p>
              </div>
            ))}
          </div>

          <h2 className="prose-h2">System Architecture Diagram</h2>
          <p className="prose-p">
            At a high level, the pipeline looks like this:
          </p>
          <div
            style={{
              background: '#0F172A',
              borderRadius: '14px',
              padding: '24px',
              marginBottom: '24px',
              border: '1px solid #1E293B',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              lineHeight: 2,
              color: '#E2E8F0',
            }}
          >
            {[
              'Investigation workspace',
              'Upload + ingestion pipeline',
              'Parse / correlate / enrich',
              'Deterministic rule engine',
              'ML advisory scoring',
              'LLM explanation layer',
              'Evidence-backed diagnostic output',
            ].map((item, index) => (
              <div key={item}>
                {index > 0 && <span style={{ color: '#334155', marginRight: '8px' }}>↓</span>}
                <span style={{ color: index === 0 ? '#7DD3FC' : '#F8FAFC' }}>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="prose-h2">Key Architectural Layers</h2>
          <div className="layer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px', marginBottom: '8px' }}>
            {architectureLayers.map((layer) => (
              <div
                key={layer.title}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '22px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>{layer.title}</h3>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.75 }}>{layer.description}</p>
              </div>
            ))}
          </div>

          <h2 className="prose-h2">Data Flow</h2>
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px' }}>
            {dataFlow.map((step, index) => (
              <div
                key={step}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: '16px',
                  padding: '16px 20px',
                  background: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                  borderBottom: index < dataFlow.length - 1 ? '1px solid #E2E8F0' : 'none',
                }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 700, color: '#0EA5E9' }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.75 }}>{step}</div>
              </div>
            ))}
          </div>

          <h2 className="prose-h2">Design Principles</h2>
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px' }}>
            {principles.map((item, index) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '16px 20px',
                  background: '#FFFFFF',
                  borderBottom: index < principles.length - 1 ? '1px solid #F1F5F9' : 'none',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0EA5E9', flexShrink: 0, marginTop: '7px' }} />
                <span style={{ fontSize: '14px', color: '#334155', lineHeight: 1.75 }}>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="prose-h2">What Makes This Different</h2>
          <p className="prose-p">
            A lot of AI diagnostics tooling looks impressive at the narrative layer but breaks down under audit.
            The point of this platform is not just to summarize broadband failures. It is to build a system that
            engineers can inspect, replay, and trust under production pressure.
          </p>
          <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
            {differentiators.map((item) => (
              <div
                key={item}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  fontSize: '14px',
                  color: '#334155',
                  lineHeight: 1.75,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <h2 className="prose-h2">Real Impact</h2>
          <p className="prose-p">
            The real opportunity in telecom AI is not just better models. It is better system design. Once every
            recommendation can be traced back to a raw signal, a source artifact, and a standards-grounded rule,
            the discussion changes. Engineers spend less time debating whether the system guessed, and more time
            moving toward remediation.
          </p>
          <p className="prose-p">
            That is the architecture worth building for RDK-B broadband diagnostics: a trustworthy platform where
            determinism, evidence, and AI each have a clear role.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '28px 0',
              borderTop: '1px solid #E2E8F0',
              marginTop: '20px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <Link href="/#blog" style={{ fontSize: '14px', color: '#0EA5E9', textDecoration: 'none', fontWeight: 700 }}>
              ← Back to blog
            </Link>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://manish-portfolio-fawn.vercel.app/rdkb-broadband-validation/index.html"
                style={{
                  background: '#0EA5E9',
                  color: '#fff',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                Open project page
              </a>
              <a
                href="https://www.linkedin.com/in/manish-kumar-8652871/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#FFFFFF',
                  color: '#0A66C2',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '13px',
                  border: '1px solid #E2E8F0',
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
