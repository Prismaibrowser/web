import Link from 'next/link';

export const metadata = {
  title: 'Documentation | PrismSpace',
  description: 'The PrismSpace technical handbook: setup, architecture, tools, and privacy boundaries.',
};

const routes = [
  {
    number: '01',
    label: 'START HERE',
    title: 'Get running in minutes',
    description: 'Install the workspace, check prerequisites, and launch your first PrismSpace session.',
    href: '/docs/getting-started/quick-start',
  },
  {
    number: '02',
    label: 'UNDER THE HOOD',
    title: 'Understand the architecture',
    description: 'Trace the frontend, backend, ML routing layer, and data workflows that power the system.',
    href: '/docs/architecture/overview',
  },
  {
    number: '03',
    label: 'MAKE IT YOURS',
    title: 'Explore tools & settings',
    description: 'Configure the interface and use the developer utilities built into the environment.',
    href: '/docs/features/overview',
  },
];

const stack = [
  ['Frontend', 'Next.js 15 · React 19'],
  ['Backend', 'Python FastAPI · MCP'],
  ['Intelligence', 'PyTorch · routing · evaluation'],
  ['Persistence', 'PrismDb · browser-local IndexedDB'],
];

export default function DocsHome() {
  return (
    <div className="docs-page docs-home">
      <section className="docs-hero">
        <div>
          <span className="editorial-badge">PRISMSPACE / HANDBOOK</span>
          <h1>build with<br /><span className="cutout-box">clear intent.</span></h1>
          <p className="lead">
            A practical guide to the AI-powered developer environment: install it, understand its layers, and make the tools work for your flow.
          </p>
          <div className="docs-hero-actions">
            <Link href="/docs/getting-started/quick-start" className="docs-primary-action">Read the quick start <span>→</span></Link>
            <Link href="/privacy" className="docs-text-action">Read our privacy policy</Link>
          </div>
        </div>
        <div className="docs-hero-board micro-grid" aria-label="PrismSpace system summary">
          <div className="board-topline"><span className="status-dot-pulse" /> SYSTEM MAP <span>v1.0.0</span></div>
          <div className="board-title">one workspace.<br /><em>four connected layers.</em></div>
          <div className="board-layers">
            {['Browser interface', 'Agent orchestration', 'ML routing subsystem', 'Local-first data layer'].map((layer, index) => (
              <div className="board-layer" key={layer}><span>0{index + 1}</span>{layer}<b>↗</b></div>
            ))}
          </div>
        </div>
      </section>

      <section className="docs-section-intro">
        <div><span className="tech-label">THE SHORT VERSION</span><h2>Everything you need.<br />Nothing hidden.</h2></div>
        <p>PrismSpace brings developer utilities, multi-agent workflows, and ML-assisted routing into one browser-based operating environment. The docs are organized around how you actually use it.</p>
      </section>

      <section className="docs-route-grid" aria-label="Documentation paths">
        {routes.map((route) => (
          <Link href={route.href} className="docs-route-card" key={route.number}>
            <div className="route-number">{route.number}</div>
            <span className="tech-label">{route.label}</span>
            <h3>{route.title}</h3>
            <p>{route.description}</p>
            <span className="route-arrow">Open section <b>↗</b></span>
          </Link>
        ))}
      </section>

      <section className="docs-local-note">
        <div className="local-note-mark">◎</div>
        <div>
          <span className="tech-label">PRIVACY BY DEFAULT</span>
          <h2>PrismDb stays in your browser.</h2>
          <p>PrismDb is PrismSpace’s local data layer. It uses the browser’s IndexedDB storage and keeps that data on your device. PrismSpace does not receive or store your PrismDb records on its own servers.</p>
          <Link href="/privacy">See the full privacy boundary →</Link>
        </div>
      </section>

      <section className="docs-stack-section">
        <div className="stack-heading"><span className="tech-label">SYSTEM INVENTORY</span><h2>What PrismSpace is made of.</h2></div>
        <div className="stack-grid">
          {stack.map(([name, value]) => <div className="stack-item" key={name}><span>{name}</span><strong>{value}</strong></div>)}
        </div>
      </section>

      <div className="docs-nav-footer">
        <Link href="/docs/getting-started/quick-start" className="docs-nav-button"><span className="docs-nav-label">Recommended next</span><span className="docs-nav-title">Quick Start →</span></Link>
        <Link href="/docs/architecture/overview" className="docs-nav-button"><span className="docs-nav-label">Go deeper</span><span className="docs-nav-title">Architecture →</span></Link>
      </div>
    </div>
  );
}
