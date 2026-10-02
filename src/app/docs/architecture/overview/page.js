import Link from 'next/link';

export const metadata = { title: 'System Architecture', description: 'Explore the PrismSpace browser interface, orchestration layer, ML routing, data lake, and deployment architecture.', alternates: { canonical: '/docs/architecture/overview' } };

export default function ArchitectureOverviewPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/architecture/overview">Architecture</Link>
        <span>/</span>
        <span>System Overview</span>
      </div>

      <h1>system architecture</h1>
      <p className="lead">
        PrismSpace is structured into four decoupled, modular layers designed for high-performance 
        developer workflows and intelligent multi-agent collaboration.
      </p>

      <h2>architectural layers</h2>
      <p>
        The system follows a clean separation of concerns with four distinct layers that communicate 
        through well-defined interfaces:
      </p>

      <div className="quick-links-grid">
        <div className="quick-link-card">
          <span className="editorial-badge">Layer 1</span>
          <span className="quick-link-title">Presentation Layer</span>
          <span className="quick-link-desc">
            Next.js 15 + React 19 frontend with 23+ developer tools, glassmorphic UI, 
            and real-time system monitoring
          </span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">Layer 2</span>
          <span className="quick-link-title">Protocol & Orchestration</span>
          <span className="quick-link-desc">
            FastAPI Hive Backend implementing Model Context Protocol (MCP) for agent 
            discovery and tool execution
          </span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">Layer 3</span>
          <span className="quick-link-title">ML Decision Layer</span>
          <span className="quick-link-desc">
            Tabular, tree-based, and neural models for routing, planning, safety prediction, 
            and cost optimization
          </span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">Layer 4</span>
          <span className="quick-link-title">Data Lake</span>
          <span className="quick-link-desc">
            Multi-source dataset loader with 15+ benchmarks for training and evaluation
          </span>
        </div>
      </div>

      <h2>layer 1: presentation & developer workspace</h2>
      <p>
        The frontend layer provides the user-facing interface and developer productivity tools:
      </p>

      <h3>core components</h3>
      <ul>
        <li><strong>Developer Dashboard</strong> - Customizable workspace with 15+ clock styles and themes</li>
        <li><strong>Dev Space</strong> - 23 integrated developer utilities (JSON toolkit, SQL playground, regex workbench, etc.)</li>
        <li><strong>Agent Swarm Visualizer</strong> - Real-time multi-agent orchestration console</li>
        <li><strong>System Monitor</strong> - Live browser, RAM, connection, and performance metrics</li>
        <li><strong>Settings Modal</strong> - Comprehensive customization for clock, themes, quotes, and extras</li>
      </ul>

      <h3>technology stack</h3>
      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Version</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Next.js</strong></td>
            <td>15.x</td>
            <td>React framework with App Router, SSR, and API routes</td>
          </tr>
          <tr>
            <td><strong>React</strong></td>
            <td>19.x</td>
            <td>UI library with Server Components and concurrent features</td>
          </tr>
          <tr>
            <td><strong>TypeScript</strong></td>
            <td>5.7+</td>
            <td>Type safety, IntelliSense, and compile-time validation</td>
          </tr>
          <tr>
            <td><strong>Tailwind CSS</strong></td>
            <td>3.4+</td>
            <td>Utility-first styling with High Voltage UI design system</td>
          </tr>
        </tbody>
      </table>

      <h3>directory structure</h3>
      <pre><code>app/
├── api/                    # Next.js API routes
│   └── agent-swarm/        # Backend proxy endpoints
├── globals.css             # High Voltage UI design tokens
├── page.tsx                # Main dashboard entry point
├── privacy/                # Privacy policy page
├── contribute/             # Contribution page
└── docs/                   # Documentation site

components/
├── AgentSwarm.tsx          # Multi-agent orchestrator interface
├── Clock.tsx               # Customizable clock component
├── DevSpace.tsx            # 23-tool developer workbench
├── SettingsModal.tsx       # Settings and customization
├── CardNav.jsx             # Navigation component
├── Footer.jsx              # Footer with links
└── tools/                  # Individual developer tools</code></pre>

      <h2>layer 2: protocol & orchestration</h2>
      <p>
        The backend layer implements the Model Context Protocol for agent coordination:
      </p>

      <h3>hive backend capabilities</h3>
      <ul>
        <li><strong>MCP Protocol Orchestrator</strong> - Agent discovery, tool registration, and execution graphs</li>
        <li><strong>Dynamic Multi-Agent Swarm</strong> - Specialized agents (CodeExpert, BrowserAgent, SQLSpecialist, MCPToolAgent)</li>
        <li><strong>Sandboxed Tool Execution</strong> - Safe command execution with approval gates</li>
        <li><strong>Agent OS Tools</strong> - Filesystem, terminal, process, service, archive, and system operations</li>
        <li><strong>Native File Transfers</strong> - Robocopy (Windows) and rsync (Linux/macOS) with progress streaming</li>
      </ul>

      <h3>technology stack</h3>
      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Version</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>FastAPI</strong></td>
            <td>0.104+</td>
            <td>High-performance async API framework</td>
          </tr>
          <tr>
            <td><strong>Uvicorn</strong></td>
            <td>0.24+</td>
            <td>ASGI server with WebSocket support</td>
          </tr>
          <tr>
            <td><strong>Pydantic</strong></td>
            <td>2.5+</td>
            <td>Data validation and serialization</td>
          </tr>
          <tr>
            <td><strong>Python</strong></td>
            <td>3.11+</td>
            <td>Backend runtime</td>
          </tr>
        </tbody>
      </table>

      <h3>directory structure</h3>
      <pre><code>backend/
├── hive_api.py             # FastAPI server & MCP router
├── os_tools.py             # Cross-platform OS operations
├── model_inference.py      # ML model integration
├── test_model_inference.py # Model test suite
└── start.ps1               # Backend startup script</code></pre>

      <h2>layer 3: ml decision & policy layer</h2>
      <p>
        The ML subsystem provides intelligent routing, planning, and safety predictions:
      </p>

      <h3>decision models</h3>
      <ul>
        <li><strong>Intent Classifier</strong> - Maps prompts to execution intents (Code, Search, Navigation, Terminal, SQL, Debug)</li>
        <li><strong>Agent Router</strong> - Selects optimal specialized agent from the swarm</li>
        <li><strong>Model Router</strong> - Routes to cost-effective LLM provider/tier</li>
        <li><strong>Workflow Success Predictor</strong> - Forecasts task completion probability before dispatch</li>
        <li><strong>Approval Predictor</strong> - Risk-scoring for Human-in-the-Loop governance</li>
        <li><strong>Cost/Latency Predictors</strong> - Estimates execution time and API costs</li>
        <li><strong>Anomaly Detector</strong> - Detects runaway loops and injection attempts</li>
      </ul>

      <h3>retrieval & ranking</h3>
      <ul>
        <li><strong>Dense Retrieval</strong> - FAISS vector embeddings for semantic search</li>
        <li><strong>Sparse Retrieval</strong> - BM25/TF-IDF for lexical matching</li>
        <li><strong>Hybrid Ranking</strong> - Combines dense and sparse signals for optimal context injection</li>
      </ul>

      <h3>preference alignment</h3>
      <ul>
        <li><strong>ORPO Reward Model</strong> - Odds Ratio Preference Optimization for agent trajectories</li>
        <li><strong>Preference Training</strong> - Evaluates chosen vs rejected action sequences</li>
        <li><strong>Efficient Fine-tuning</strong> - Embeds preference penalty directly into SFT loss</li>
      </ul>

      <div className="docs-callout">
        <div className="docs-callout-title">🧠 ML Architecture</div>
        <p>
          See <Link href="/docs/architecture/ml-models">ML Models & Alignment</Link> for detailed 
          information about each model, training procedures, and ORPO theory.
        </p>
      </div>

      <h2>layer 4: data lake & corpora</h2>
      <p>
        The data layer normalizes and ingests training data from multiple sources:
      </p>

      <h3>dataset categories</h3>
      <ul>
        <li><strong>Function Calling</strong> - BFCL, APIBench for tool-use precision</li>
        <li><strong>Agent Workflows</strong> - ScaleAI LHAW, EnvFactory-RL for multi-step planning</li>
        <li><strong>MCP Benchmarks</strong> - LiveMCPBench, Open-M3-Bench for protocol compliance</li>
        <li><strong>Preference Data</strong> - HH-RLHF, OASST1 for alignment</li>
        <li><strong>Routing Benchmarks</strong> - RouterBench, xRouteBench, LMSYS Arena for provider selection</li>
        <li><strong>Retrieval Corpora</strong> - BEIR for information retrieval evaluation</li>
      </ul>

      <h3>data pipeline</h3>
      <pre><code>model/
├── datasets/
│   ├── training/           # Training datasets
│   ├── testing/            # Test datasets
│   ├── validation/         # Validation benchmarks
│   └── curated/            # Preprocessed & normalized data
├── dataset_loader.py       # Multi-format ingestion
└── prepare_supervised_datasets.py  # Normalization pipeline</code></pre>

      <div className="docs-callout">
        <div className="docs-callout-title">📊 Dataset Details</div>
        <p>
          See <Link href="/docs/architecture/datasets">Datasets & Benchmarks</Link> for complete 
          list of data sources, formats, and preparation procedures.
        </p>
      </div>

      <h2>communication flow</h2>
      <p>
        Here's how the layers communicate during a typical user interaction:
      </p>

      <ol>
        <li><strong>User Input</strong> - Developer enters prompt or clicks tool in the frontend</li>
        <li><strong>Intent Classification</strong> - ML layer classifies the intent and routes to appropriate handler</li>
        <li><strong>Agent Selection</strong> - Agent router selects specialized agent from swarm</li>
        <li><strong>Tool Execution</strong> - Backend orchestrator executes tools through MCP protocol</li>
        <li><strong>Safety Check</strong> - Approval predictor flags high-risk operations for human review</li>
        <li><strong>Cost Optimization</strong> - Model router selects most cost-effective LLM provider</li>
        <li><strong>Result Display</strong> - Frontend renders results with real-time updates</li>
      </ol>

      <h2>scalability & performance</h2>

      <h3>frontend optimization</h3>
      <ul>
        <li>Code splitting and lazy loading</li>
        <li>Static generation for documentation</li>
        <li>Optimized images and assets</li>
        <li>Tree shaking and minification</li>
        <li>First Load JS: 116 KB</li>
      </ul>

      <h3>backend optimization</h3>
      <ul>
        <li>Async/await for non-blocking I/O</li>
        <li>Connection pooling</li>
        <li>Request caching</li>
        <li>Horizontal scaling support</li>
        <li>WebSocket for real-time updates</li>
      </ul>

      <h3>ml optimization</h3>
      <ul>
        <li>Model artifacts serialized as .joblib files</li>
        <li>GPU acceleration with CUDA 12.6</li>
        <li>Batch inference for cost reduction</li>
        <li>Model quantization for deployment</li>
        <li>FAISS for sub-millisecond vector search</li>
      </ul>

      <h2>security & safety</h2>

      <h3>approval gates</h3>
      <p>
        High-risk operations require explicit user approval:
      </p>
      <ul>
        <li>Process and service changes</li>
        <li>Package installation</li>
        <li>Environment variable mutation</li>
        <li>File permission changes</li>
        <li>Archive extraction</li>
        <li>Destructive filesystem operations</li>
      </ul>

      <h3>sandboxing</h3>
      <ul>
        <li>Tool execution paths restricted to workspace</li>
        <li>Terminal working directories workspace-bound</li>
        <li>Native operations have bounded timeouts</li>
        <li>Archive extraction rejects path traversal</li>
      </ul>

      <h3>anomaly detection</h3>
      <ul>
        <li>Runaway agent loop detection</li>
        <li>Recursive tool invocation monitoring</li>
        <li>Prompt injection trace analysis</li>
        <li>One-Class SVM and Isolation Forest models</li>
      </ul>

      <h2>deployment architecture</h2>

      <h3>development</h3>
      <pre><code>┌─────────────────────────────────────┐
│  Developer Machine                  │
│  ┌──────────────┐  ┌──────────────┐│
│  │   Next.js    │  │   FastAPI    ││
│  │  :3000       │←→│   :7433      ││
│  └──────────────┘  └──────────────┘│
│         ↕                  ↕        │
│  ┌──────────────────────────────┐  │
│  │   ML Models (model/)         │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘</code></pre>

      <h3>production</h3>
      <pre><code>┌─────────────────────────────────────────┐
│  CDN (Vercel/Cloudflare)                │
│  ┌────────────────────────────────────┐ │
│  │   Static Next.js Build             │ │
│  └────────────────────────────────────┘ │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  Backend Server (Railway/AWS/DO)        │
│  ┌──────────────┐  ┌──────────────────┐│
│  │   FastAPI    │  │  ML Models       ││
│  │  (Uvicorn)   │←→│  (artifacts/)    ││
│  └──────────────┘  └──────────────────┘│
└─────────────────────────────────────────┘</code></pre>

      <h2>next steps</h2>
      <div className="quick-links-grid">
        <Link href="/docs/architecture/ml-models" className="quick-link-card">
          <span className="quick-link-icon">🧠</span>
          <span className="quick-link-title">ML Models & Alignment</span>
          <span className="quick-link-desc">Deep dive into decision models, ORPO, and training</span>
        </Link>

        <Link href="/docs/architecture/datasets" className="quick-link-card">
          <span className="quick-link-icon">📊</span>
          <span className="quick-link-title">Datasets & Benchmarks</span>
          <span className="quick-link-desc">Complete list of training data sources and formats</span>
        </Link>

        <Link href="/docs/architecture/directory" className="quick-link-card">
          <span className="quick-link-icon">📁</span>
          <span className="quick-link-title">Directory Structure</span>
          <span className="quick-link-desc">Detailed project organization and file layout</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/getting-started/prerequisites" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Prerequisites</span>
        </Link>
        <Link href="/docs/architecture/ml-models" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">ML Models & Alignment →</span>
        </Link>
      </div>
    </div>
  );
}
