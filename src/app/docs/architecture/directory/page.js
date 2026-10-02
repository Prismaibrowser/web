import Link from 'next/link';

export const metadata = { title: 'Directory Structure', description: 'Understand the PrismSpace project directory, application layers, configuration, and build outputs.', alternates: { canonical: '/docs/architecture/directory' } };

export default function DirectoryPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/architecture/overview">Architecture</Link>
        <span>/</span>
        <span>Directory Structure</span>
      </div>

      <h1>directory structure</h1>
      <p className="lead">
        Complete project organization showing all major directories, configuration files, 
        and their purposes in the PrismSpace codebase.
      </p>

      <h2>root level</h2>
      <pre><code>prismspace-web/
├── .git/                    # Git version control
├── .next/                   # Next.js build output (generated)
├── node_modules/            # Node.js dependencies (generated)
├── .venv/                   # Python virtual environment (generated)
│
├── app/                     # Next.js 15 App Router (pages & layouts)
├── backend/                 # Python FastAPI Hive Backend
├── components/              # React 19 UI Components
├── model/                   # Machine Learning Subsystem
├── public/                  # Static assets (images, fonts, wallpapers)
├── run/                     # Cross-platform fullstack runners
│
├── .env.example             # Environment variable template
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── components.json          # shadcn/ui configuration
├── next.config.js           # Next.js configuration
├── package.json             # Node.js dependencies & scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
│
├── LICENSE                  # Apache 2.0 License
├── NOTICE                   # Third-party notices
├── README.md                # Project overview
├── USAGE_GUIDE.md           # User guide
├── FEATURES.md              # Features list
├── CONTRIBUTING.md          # Contribution guidelines
└── DEPLOYMENT.md            # Deployment guide</code></pre>

      <h2>app/ directory (frontend)</h2>
      <pre><code>app/
├── api/                     # Next.js API Routes
│   └── agent-swarm/
│       └── health/          # Backend health proxy
│
├── docs/                    # Documentation site (this site!)
│   ├── getting-started/
│   ├── architecture/
│   ├── features/
│   ├── usage-guide/
│   ├── api/
│   ├── license/
│   ├── layout.js            # Docs layout with sidebar
│   ├── docs.css             # High Voltage UI docs styling
│   └── page.js              # Docs home page
│
├── privacy/                 # Privacy policy page
│   └── page.js
│
├── contribute/              # Contribution page
│   └── page.js
│
├── favicon.ico              # Site favicon
├── globals.css              # Global styles & High Voltage UI tokens
├── layout.tsx               # Root layout
└── page.tsx                 # Main dashboard entry point</code></pre>

      <h2>components/ directory</h2>
      <pre><code>components/
├── docs/
│   └── DocsSidebar.jsx      # Documentation sidebar navigation
│
├── tools/                   # Individual developer tools
│   ├── JsonToolkit.tsx
│   ├── CryptoUtils.tsx
│   ├── RegexWorkbench.tsx
│   └── ... (23 tools total)
│
├── AgentSwarm.tsx           # Multi-agent orchestrator UI
├── Clock.tsx                # Customizable clock component
├── DevSpace.tsx             # 23-tool developer workbench
├── SettingsModal.tsx        # Settings & customization modal
├── CardNav.jsx              # Navigation component
└── Footer.jsx               # Footer component</code></pre>

      <h2>backend/ directory</h2>
      <pre><code>backend/
├── hive_api.py              # FastAPI server & MCP router
├── os_tools.py              # Cross-platform OS operations
├── model_inference.py       # ML model integration
├── test_model_inference.py  # Model test suite
├── requirements.txt         # Python backend dependencies
└── start.ps1                # Backend startup script</code></pre>

      <h2>model/ directory (ml subsystem)</h2>
      <pre><code>model/
├── artifacts/               # Serialized production models (.joblib)
│   ├── intent_classifier.joblib
│   ├── agent_router.joblib
│   ├── model_router.joblib
│   ├── workflow_success_predictor.joblib
│   ├── approval_predictor.joblib
│   ├── latency_predictor.joblib
│   ├── cost_predictor.joblib
│   └── anomaly_detector.joblib
│
├── datasets/                # Training & evaluation datasets
│   ├── training/            # Training datasets
│   │   ├── APIBench/
│   │   ├── Berkeley-Function-Calling-Leaderboard/
│   │   ├── EnvFactory-RL/
│   │   ├── hh-rlhf/
│   │   └── ... (15+ datasets)
│   ├── testing/             # Test datasets
│   ├── validation/          # Validation benchmarks
│   └── curated/             # Preprocessed data
│
├── dataset_loader.py        # Multi-format dataset ingestion
├── prepare_supervised_datasets.py  # Normalization pipeline
├── intent_classifier.py     # Intent classification model
├── agent_router.py          # Swarm agent routing
├── model_router.py          # LLM provider routing
├── approval_predictor.py    # Risk scoring & HITL
├── workflow_success_predictor.py  # DAG success prediction
├── cost_latency_predictor.py      # Cost & latency estimation
├── anomaly_detector.py      # Anomaly & injection detection
├── retrieval_ranker.py      # FAISS + BM25 hybrid retrieval
├── reward_model.py          # ORPO preference adapter
├── train.py                 # Training CLI entry point
├── predict.py               # Inference CLI entry point
├── evaluate.py              # Model evaluation suite
└── requirements.txt         # ML dependencies (PyTorch, etc.)</code></pre>

      <h2>public/ directory</h2>
      <pre><code>public/
├── LOGO/                    # Brand logos
│   ├── new_logo.png         # Icon logo
│   └── new_logo_wide.png    # Wide logo
│
├── nav-logo.png             # Navbar logo (High Voltage UI)
├── footer-logo.png          # Footer logo
├── prism-icon.png           # App icon
│
├── backgrounds/             # Built-in wallpapers (8 images)
│   ├── gradient1.jpg
│   ├── gradient2.jpg
│   └── ...
│
└── fonts/                   # Custom clock fonts (10+ fonts)
    ├── Ammonite.ttf
    ├── BitcountGrid.ttf
    └── ...</code></pre>

      <h2>run/ directory (runners)</h2>
      <pre><code>run/
├── run.ps1                  # PowerShell fullstack runner (Windows)
├── run.sh                   # Bash fullstack runner (Linux/macOS)
├── run.bat                  # Batch runner (Windows double-click)
└── README.md                # Runner documentation</code></pre>

      <h2>configuration files</h2>

      <h3>next.js & react</h3>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>next.config.js</code></td>
            <td>Next.js configuration (images, redirects, headers)</td>
          </tr>
          <tr>
            <td><code>tsconfig.json</code></td>
            <td>TypeScript compiler options & path aliases</td>
          </tr>
          <tr>
            <td><code>tailwind.config.ts</code></td>
            <td>Tailwind CSS theme, plugins, & content paths</td>
          </tr>
          <tr>
            <td><code>postcss.config.mjs</code></td>
            <td>PostCSS plugins (Tailwind, autoprefixer)</td>
          </tr>
          <tr>
            <td><code>.eslintrc.json</code></td>
            <td>ESLint rules for code quality</td>
          </tr>
          <tr>
            <td><code>components.json</code></td>
            <td>shadcn/ui component configuration</td>
          </tr>
        </tbody>
      </table>

      <h3>python & ml</h3>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>backend/requirements.txt</code></td>
            <td>FastAPI backend dependencies</td>
          </tr>
          <tr>
            <td><code>model/requirements.txt</code></td>
            <td>ML training dependencies (PyTorch, scikit-learn, FAISS)</td>
          </tr>
        </tbody>
      </table>

      <h3>version control</h3>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.gitignore</code></td>
            <td>Files and directories to exclude from Git</td>
          </tr>
          <tr>
            <td><code>.gitattributes</code></td>
            <td>Git line ending and merge configurations</td>
          </tr>
        </tbody>
      </table>

      <h2>build outputs (generated)</h2>

      <h3>next.js</h3>
      <pre><code>.next/
├── cache/                   # Build cache
├── server/                  # Server-side bundles
├── static/                  # Static assets
└── build-manifest.json      # Build metadata</code></pre>

      <h3>python</h3>
      <pre><code>model/artifacts/             # Trained model files
__pycache__/                 # Python bytecode cache
.venv/                       # Virtual environment</code></pre>

      <h3>node.js</h3>
      <pre><code>node_modules/                # NPM packages
package-lock.json            # Dependency lock file</code></pre>

      <h2>documentation files</h2>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>README.md</code></td>
            <td>Project overview, architecture, quick start, features</td>
          </tr>
          <tr>
            <td><code>USAGE_GUIDE.md</code></td>
            <td>Step-by-step user guide for settings and tools</td>
          </tr>
          <tr>
            <td><code>FEATURES.md</code></td>
            <td>Complete list of 50+ implemented features</td>
          </tr>
          <tr>
            <td><code>CONTRIBUTING.md</code></td>
            <td>Contribution guidelines and collaboration policy</td>
          </tr>
          <tr>
            <td><code>DEPLOYMENT.md</code></td>
            <td>Deployment instructions for Vercel, AWS, etc.</td>
          </tr>
          <tr>
            <td><code>LICENSE</code></td>
            <td>Apache 2.0 license full text</td>
          </tr>
          <tr>
            <td><code>NOTICE</code></td>
            <td>Third-party notices and attributions</td>
          </tr>
        </tbody>
      </table>

      <h2>path aliases</h2>
      <p>TypeScript path aliases configured in <code>tsconfig.json</code>:</p>

      <table>
        <thead>
          <tr>
            <th>Alias</th>
            <th>Resolves To</th>
            <th>Example Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>@/</code></td>
            <td><code>./</code></td>
            <td><code>import Component from '@/components/Component'</code></td>
          </tr>
          <tr>
            <td><code>@/components</code></td>
            <td><code>./components</code></td>
            <td><code>import Clock from '@/components/Clock'</code></td>
          </tr>
          <tr>
            <td><code>@/app</code></td>
            <td><code>./app</code></td>
            <td><code>import styles from '@/app/globals.css'</code></td>
          </tr>
        </tbody>
      </table>

      <h2>key directories explained</h2>

      <h3>app/ (next.js app router)</h3>
      <p>
        Uses Next.js 15 App Router convention. Each directory with a <code>page.tsx</code> becomes a route. 
        <code>layout.tsx</code> files wrap pages, and <code>api/</code> contains server endpoints.
      </p>

      <h3>model/ (ml subsystem)</h3>
      <p>
        Self-contained ML training and inference package. All models, datasets, and scripts are isolated 
        from the web frontend. Can be run independently for training.
      </p>

      <h3>backend/ (fastapi hive)</h3>
      <p>
        Python backend implementing MCP protocol. Runs on port 7433 and provides agent orchestration, 
        tool execution, and ML model inference endpoints.
      </p>

      <h3>public/ (static assets)</h3>
      <p>
        Served directly by Next.js at root URL. Files like <code>public/logo.png</code> become 
        accessible at <code>/logo.png</code>.
      </p>

      <div className="docs-callout">
        <div className="docs-callout-title">💡 Pro Tip</div>
        <p>
          Use <code>npm run build</code> to see exactly which files are included in production builds 
          and their sizes. The <code>.next/</code> directory shows the optimized bundle structure.
        </p>
      </div>

      <h2>next steps</h2>
      <div className="quick-links-grid">
        <Link href="/docs/features/overview" className="quick-link-card">
          <span className="quick-link-icon">⚡</span>
          <span className="quick-link-title">Features & Tools</span>
          <span className="quick-link-desc">Explore all 23 developer tools</span>
        </Link>

        <Link href="/docs/api/training" className="quick-link-card">
          <span className="quick-link-icon">🧠</span>
          <span className="quick-link-title">Training Models</span>
          <span className="quick-link-desc">Learn how to train ML models</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/architecture/datasets" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Datasets & Benchmarks</span>
        </Link>
        <Link href="/docs/features/overview" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Features Overview →</span>
        </Link>
      </div>
    </div>
  );
}
