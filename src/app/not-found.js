import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: '#030A15',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        color: '#fff',
        fontFamily: 'Space Grotesk, sans-serif'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '680px' }}>
        <h1 style={{ color: '#88E755', fontSize: '3rem', margin: 0, fontWeight: 800 }}>
          Page not found
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.75rem', lineHeight: 1.6 }}>
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '1.25rem',
            background: '#88E755',
            border: '1px solid rgba(136, 231, 85, 0.35)',
            borderRadius: '12px',
            padding: '12px 14px',
            color: '#000',
            fontWeight: 700,
            textDecoration: 'none'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
