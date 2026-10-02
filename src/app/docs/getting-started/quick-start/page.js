import Link from 'next/link';

export default function QuickStartPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/getting-started/quick-start">Getting Started</Link>
        <span>/</span>
        <span>Quick Start</span>
      </div>

      <h1>quick start</h1>
      <p className="lead">
        Get PrismSpace running in minutes with our unified runner scripts that handle both frontend 
        and backend services with automated diagnostics and environment setup.
      </p>

      <h2>unified runners</h2>
      <p>
        PrismSpace includes automated, cross-platform runner scripts in the <code>run/</code> directory 
        that perform pre-flight system diagnostics, provision virtual environments, check port availability, 
        and launch both the <strong>Next.js Frontend</strong> and <strong>FastAPI Swarm Backend</strong> concurrently.
      </p>

      <h3>🪟 windows (powershell - recommended)</h3>
      <pre><code># Run both Frontend & Backend concurrently:
.\run\run.ps1

# Or run individual services:
.\run\run.ps1 -Service Frontend   # Next.js only (http://localhost:3000)
.\run\run.ps1 -Service Backend    # FastAPI Swarm only (http://localhost:7433)</code></pre>

      <h3>🖱️ windows (double-click or command prompt)</h3>
      <pre><code># Double-click or run from cmd:
run\run.bat</code></pre>

      <h3>🐧 linux / macos / wsl / git bash</h3>
      <pre><code># Make executable and run both services:
chmod +x run/*.sh
./run/run.sh

# Or run individual services:
./run/run.sh --frontend           # Next.js only
./run/run.sh --backend            # FastAPI Swarm only</code></pre>

      <div className="docs-callout">
        <div className="docs-callout-title">⚡ Pro Tip</div>
        <p>
          The runner scripts include colorful diagnostics, progress indicators, and handle clean 
          <code>Ctrl+C</code> multi-process shutdown automatically.
        </p>
      </div>

      <h2>service endpoints</h2>
      <p>Once running, access PrismSpace through these endpoints:</p>

      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Address</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="editorial-badge">Frontend</span></td>
            <td><code>http://localhost:3000</code></td>
            <td>Next.js Developer OS & UI</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">Swarm</span></td>
            <td><code>http://localhost:3000/swarm</code></td>
            <td>Agent Swarm Orchestration Dashboard</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">Backend</span></td>
            <td><code>http://localhost:7433</code></td>
            <td>FastAPI Multi-Agent Bridge & ML Intelligence</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">API Docs</span></td>
            <td><code>http://localhost:7433/docs</code></td>
            <td>Interactive Swagger UI for backend endpoints</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">Health</span></td>
            <td><code>http://localhost:3000/api/agent-swarm/health</code></td>
            <td>Health status proxy route</td>
          </tr>
        </tbody>
      </table>

      <h2>manual setup (alternative)</h2>
      <p>
        If you prefer manual control or need to troubleshoot, you can run services separately:
      </p>

      <h3>frontend (next.js)</h3>
      <pre><code># Install dependencies
npm install

# Run development server
npm run dev

# Or build for production
npm run build
npm start</code></pre>

      <h3>backend (fastapi)</h3>
      <pre><code># Create virtual environment
python -m venv .venv

# Activate (Windows PowerShell)
.\.venv\Scripts\Activate.ps1

# Activate (Linux/macOS)
source .venv/bin/activate

# Install dependencies
pip install -r backend/requirements.txt

# Run backend server
cd backend
python hive_api.py</code></pre>

      <div className="docs-callout warning">
        <div className="docs-callout-title">⚠️ Port Conflicts</div>
        <p>
          If ports 3000 or 7433 are already in use, the runner scripts will detect this and prompt you 
          to stop the conflicting processes. You can also manually configure different ports.
        </p>
      </div>

      <h2>verify installation</h2>
      <p>Once services are running, verify everything works:</p>

      <ol>
        <li>Open <code>http://localhost:3000</code> in your browser</li>
        <li>You should see the PrismSpace dashboard with the large clock display</li>
        <li>Check <code>http://localhost:7433/docs</code> for the backend API documentation</li>
        <li>Navigate to <code>http://localhost:3000/swarm</code> to see the Agent Swarm visualizer</li>
        <li>Scroll down on the home page to access the 23 developer tools</li>
      </ol>

      <h2>first steps</h2>
      <p>Now that PrismSpace is running, try these:</p>

      <ul>
        <li><strong>Customize the Clock</strong> - Click the ⚙️ settings button (bottom right) to change clock style, color, and format</li>
        <li><strong>Try Developer Tools</strong> - Scroll down to Dev Space and click any of the 23 tools</li>
        <li><strong>Open Agent Swarm</strong> - Visit <code>/swarm</code> to see the multi-agent orchestration dashboard</li>
        <li><strong>Open SQL Playground</strong> - Test the WASM SQLite environment with live queries</li>
        <li><strong>Upload Custom Wallpaper</strong> - Personalize your workspace with your own background</li>
      </ul>

      <h2>next steps</h2>
      <div className="quick-links-grid">
        <Link href="/docs/getting-started/installation" className="quick-link-card">
          <span className="quick-link-icon">📦</span>
          <span className="quick-link-title">Full Installation</span>
          <span className="quick-link-desc">Detailed installation with ML environment setup and GPU support</span>
        </Link>

        <Link href="/docs/usage-guide/settings" className="quick-link-card">
          <span className="quick-link-icon">⚙️</span>
          <span className="quick-link-title">Settings Guide</span>
          <span className="quick-link-desc">Learn how to customize your PrismSpace experience</span>
        </Link>

        <Link href="/docs/features/dev-tools" className="quick-link-card">
          <span className="quick-link-icon">🛠️</span>
          <span className="quick-link-title">Developer Tools</span>
          <span className="quick-link-desc">Explore all 23 developer utilities and their features</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Documentation Home</span>
        </Link>
        <Link href="/docs/getting-started/installation" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Installation Guide →</span>
        </Link>
      </div>
    </div>
  );
}
