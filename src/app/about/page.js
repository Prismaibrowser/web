import Link from 'next/link';

const facts = [
  ['Product', 'PrismSpace is an open-source AI browser home that brings multiple model providers into one focused workspace.'],
  ['Audience', 'It is designed for people who build, research, and ship work that benefits from more than one model.'],
  ['Approach', 'PrismSpace emphasizes model routing, developer tools, browser-local data, and a single surface for multi-model workflows.'],
  ['Source', 'The project source, issue tracker, and contribution history are available through the official GitHub repository.'],
];

export default function AboutPage() {
  return (
    <main className="docs-container">
      <article className="docs-content">
        <div className="docs-page">
          <nav className="docs-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">PrismSpace</Link> <span aria-hidden="true">/</span> <span>About</span>
          </nav>

          <span className="editorial-badge">PRISMSPACE / ABOUT</span>
          <h1>an AI browser home<br /><span className="cutout-box">with a clear boundary.</span></h1>
          <p className="lead">
            PrismSpace is an open-source workspace for using multiple AI models while building, researching, and shipping work in one browser surface.
          </p>

          <section className="docs-section-intro" aria-labelledby="what-is-prismspace">
            <div>
              <span className="tech-label">THE SHORT VERSION</span>
              <h2 id="what-is-prismspace">What PrismSpace is.</h2>
            </div>
            <p>
              PrismSpace coordinates model choice, developer utilities, and browser-local data around the task in front of you. It is not a model provider and does not claim that one model is best for every task.
            </p>
          </section>

          <section aria-labelledby="prismspace-facts">
            <span className="tech-label">VERIFIABLE CONTEXT</span>
            <h2 id="prismspace-facts">The project in four facts.</h2>
            <div className="stack-grid">
              {facts.map(([label, value]) => (
                <div className="stack-item" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="docs-local-note" aria-labelledby="find-the-source">
            <div className="local-note-mark" aria-hidden="true">↗</div>
            <div>
              <span className="tech-label">PRIMARY SOURCE</span>
              <h2 id="find-the-source">Read the source and ask questions.</h2>
              <p>
                GitHub is the authoritative place for source code, issues, contribution history, and implementation details. For privacy questions, read the policy or contact the project directly.
              </p>
              <p>
                <a href="https://github.com/NobinSijo7T/prismspace-web" target="_blank" rel="noopener noreferrer">Open the PrismSpace repository →</a>
                <br />
                <a href="mailto:prismaibrowser@gmail.com">Email the project →</a>
              </p>
            </div>
          </section>

          <div className="docs-nav-footer">
            <Link href="/docs" className="docs-nav-button"><span className="docs-nav-label">Continue reading</span><span className="docs-nav-title">Documentation →</span></Link>
            <Link href="/privacy" className="docs-nav-button"><span className="docs-nav-label">Data boundary</span><span className="docs-nav-title">Privacy policy →</span></Link>
          </div>

          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'AboutPage',
                  '@id': 'https://prismbrowser.tech/about#webpage',
                  url: 'https://prismbrowser.tech/about',
                  name: 'About PrismSpace',
                  description: 'What PrismSpace is, who it is for, and where to find its primary source.',
                  isPartOf: { '@id': 'https://prismbrowser.tech/#website' },
                  about: { '@id': 'https://prismbrowser.tech/#organization' },
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'PrismSpace', item: 'https://prismbrowser.tech/' },
                    { '@type': 'ListItem', position: 2, name: 'About PrismSpace', item: 'https://prismbrowser.tech/about' },
                  ],
                },
              ],
            })}
          </script>
        </div>
      </article>
    </main>
  );
}
