import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <h1 className="not-found-title">Not found</h1>
        <p className="not-found-text">
          The page you&apos;re looking for was not found.
        </p>
        <hr className="not-found-divider" />
        <div className="not-found-actions">
          <Link href="/" className="not-found-button">
            Return to homepage
          </Link>
        </div>
      </section>
    </main>
  )
}