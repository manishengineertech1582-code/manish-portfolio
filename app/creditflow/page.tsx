import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CreditFlow Intelligence Platform | Manish Kumar',
  description: 'Embedded CreditFlow implementation website for the inspected commercial credit underwriting platform.',
}

const frameSrc = '/creditflow-website/index.html'

export default function CreditFlowPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#080B10',
      }}
    >
      <div
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(8,11,16,0.94)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            width: 'min(1200px, calc(100% - 32px))',
            margin: '0 auto',
            minHeight: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
            padding: '12px 0',
          }}
        >
          <div style={{ color: '#E8EEF8' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>CreditFlow Intelligence Platform</div>
            <div style={{ fontSize: '0.84rem', color: '#95A3B8' }}>Standalone project site embedded into the live portfolio route tree.</div>
          </div>
          <Link
            href="https://manish-portfolio-fawn.vercel.app/"
            style={{
              color: '#080B10',
              background: '#7FFFD4',
              padding: '10px 14px',
              borderRadius: '999px',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            Back to portfolio
          </Link>
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0 }}>
        <iframe
          src={frameSrc}
          title="CreditFlow Intelligence Platform"
          style={{
            width: '100%',
            height: '100%',
            minHeight: 'calc(100vh - 64px)',
            border: 'none',
            display: 'block',
            background: '#080B10',
          }}
        />
      </div>
    </main>
  )
}
