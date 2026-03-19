import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manish Kumar — AI Engineer',
  description: 'AI Engineer building production RAG systems, LLM applications, and intelligent pipelines.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#080B10' }}>
        {children}
      </body>
    </html>
  )
}
