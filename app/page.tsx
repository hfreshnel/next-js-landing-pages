import Link from 'next/link'

const landings = [
  { id: 'a', label: 'Landing A — Feature-led' },
  { id: 'b', label: 'Landing B — Problem-led' },
]

export default function IndexPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#fff',
        color: '#111',
      }}
    >
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
        Landing Pages
      </h1>
      <p style={{ color: '#555', marginBottom: '40px', fontSize: '15px' }}>
        Select a landing page to preview
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {landings.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`/landing/${id}`}
              style={{
                display: 'block',
                padding: '14px 28px',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#111',
                fontWeight: 500,
                fontSize: '15px',
                backgroundColor: '#fafafa',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
