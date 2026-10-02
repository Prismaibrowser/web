import Link from 'next/link';

export const metadata = {
  title: 'PrismSpace Documentation - High Voltage UI',
  description: 'Complete documentation for PrismSpace AI-powered developer operating environment',
};

export default function DocsHome() {
  return (
    <div className="docs-page">
      <h1>prismspace documentation</h1>
      <p className="lead">
        Complete guide to the AI-powered developer operating environment with multi-agent orchestration, 
        23+ developer tools, and machine learning routing subsystem.
      </p>

      <div className="quick-links-grid">
        <Link href="/docs/getting-started/quick-start" className="quick-link-card">
          <span className="quick-link-icon">🚀</span>
          <span className="quick-link-title">Quick Start</span>
          <span className="quick-link-desc">
            Get PrismSpace running in minutes with our step-by-step guide for frontend and backend setup.
          </span>
        </Link>

        <Link href="/docs/architecture/overview" className="quick-link-card">
          <span className="quick-link-icon">🏛️</span>
          <span className="quick-link-title">Architecture</span>
          <span className="quick-link-desc">
            Explore the four-layer system: Next.js frontend, FastAPI backend, ML subsystem, and data lake.
          </span>
        </Link>

        <Link href="/docs/features/overview" className="quick-link-card">
          <span className="quick-link-icon">⚡</span>
          <span className="quick-link-title">Features & Tools</span>
          <span className="quick-link-desc">
            Discover 23 developer utilities, AI tools, productivity features, and system capabilities.
          </span>
        </Link>

        <Link href="/docs/usage-guide/settings" className="quick-link-card">
          <span className="quick-link-icon">⚙️</span>
          <span className="quick-link-title">Usage Guide</span>
          <span className="quick-link-desc">
            Learn how to customize settings, use tools, keyboard shortcuts, and troubleshoot issues.
          </span>
        </Link>

        <Link href="/docs/api/training" className="quick-link-card">
          <span className="quick-link-icon">🧠</span>
          <span className="quick-link-title">API & Development</span>
          <span className="quick-link-desc">
            Train ML models, test inference, evaluate performance, and deploy to production.
          </span>
        </Link>

        <Link href="/docs/license/apache" className="quick-link-card">
          <span className="quick-link-icon">📝</span>
          <span className="quick-link-title">License & Contributing</span>
          <span className="quick-link-desc">
            Apache 2.0 license details, contribution guidelines, and third-party notices.
          </span>
        </Link>
      </div>

      <h2>what is prismspace?</h2>
      <p>
        PrismSpace is an <strong>AI-powered developer operating environment</strong> that combines a feature-rich 
        browser dashboard with intelligent multi-agent orchestration. Built on <strong>Next.js 15</strong>, <strong>React 19</strong>, 
        and a <strong>Python FastAPI</strong> backend, it provides developers with everything needed for productive workflow.
      </p>

      <h3>core capabilities</h3>
      <ul>
        <li><strong>23+ Developer Tools</strong> - JSON toolkit, regex workbench, SQL playground, markdown editor, crypto utils, and more</li>
        <li><strong>Multi-Agent Swarm</strong> - Dynamic agent orchestration with Model Context Protocol (MCP) integration</li>
        <li><strong>ML Intelligence Layer</strong> - Intent classification, agent routing, workflow prediction, and cost optimization</li>
        <li><strong>Agent OS Tools</strong> - Structured filesystem, terminal, process, and system operations with approval gates</li>
        <li><strong>Customizable UI</strong> - 15+ clock styles, custom themes, glassmorphism design, and live system monitoring</li>
      </ul>

      <h3>technology stack</h3>
      <div className="quick-links-grid">
        <div className="quick-link-card">
          <span className="editorial-badge">Frontend</span>
          <p>Next.js 15, React 19, TypeScript, Tailwind CSS</p>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">Backend</span>
          <p>Python FastAPI, Model Context Protocol (MCP)</p>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">ML</span>
          <p>PyTorch, CUDA 12.6, Scikit-learn, FAISS</p>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">Data</span>
          <p>15+ benchmark datasets, ORPO alignment, retrieval ranking</p>
        </div>
      </div>

      <h2>getting started</h2>
      <p>
        The fastest way to start is using our unified runner scripts that handle both frontend and backend:
      </p>

      <h4>Windows (PowerShell)</h4>
      <pre><code>.\run\run.ps1</code></pre>

      <h4>Linux / macOS / WSL</h4>
      <pre><code>./run/run.sh</code></pre>

      <p>
        For detailed installation instructions, prerequisites, and environment setup, see the{' '}
        <Link href="/docs/getting-started/quick-start">Quick Start Guide</Link>.
      </p>

      <div className="docs-callout">
        <div className="docs-callout-title">✨ What's New</div>
        <p>
          <strong>v1.0.0</strong> - High Voltage UI redesign with electric mint canvas, obsidian boards, 
          Space Grotesk + JetBrains Mono typography, and comprehensive documentation site.
        </p>
      </div>

      <h2>explore documentation</h2>
      <p>
        Use the sidebar navigation to explore different sections, or jump directly to:
      </p>
      <ul>
        <li><Link href="/docs/getting-started/installation">Installation Guide</Link> - Detailed setup instructions</li>
        <li><Link href="/docs/architecture/ml-models">ML Models & Alignment</Link> - ORPO, routing, and prediction systems</li>
        <li><Link href="/docs/features/dev-tools">Developer Tools</Link> - Complete tool reference</li>
        <li><Link href="/docs/api/training">Training Models</Link> - ML training commands and workflows</li>
        <li><Link href="/docs/license/contributing">Contributing</Link> - How to contribute to PrismSpace</li>
      </ul>

      <div className="docs-nav-footer">
        <Link href="/docs/getting-started/quick-start" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Quick Start →</span>
        </Link>
      </div>
    </div>
  );
}
