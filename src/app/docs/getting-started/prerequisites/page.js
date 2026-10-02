import Link from 'next/link';

export const metadata = { title: 'Prerequisites', description: 'Review the hardware, software, runtime, and service prerequisites for PrismSpace.', alternates: { canonical: '/docs/getting-started/prerequisites' } };

export default function PrerequisitesPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/getting-started/quick-start">Getting Started</Link>
        <span>/</span>
        <span>Prerequisites</span>
      </div>

      <h1>prerequisites</h1>
      <p className="lead">
        Detailed system requirements, software dependencies, and version specifications 
        for running PrismSpace in development and production environments.
      </p>

      <h2>system requirements</h2>

      <h3>minimum requirements</h3>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Requirement</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="editorial-badge">CPU</span></td>
            <td>Dual-core 2.0 GHz</td>
            <td>Intel i3 or AMD Ryzen 3 equivalent</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">RAM</span></td>
            <td>4GB</td>
            <td>8GB recommended for ML models</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">Storage</span></td>
            <td>2GB free space</td>
            <td>10GB+ for datasets and models</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">OS</span></td>
            <td>Windows 10+, macOS 10.15+, Linux</td>
            <td>WSL2 supported on Windows</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">Browser</span></td>
            <td>Chrome 90+, Firefox 88+, Edge 90+</td>
            <td>Safari 14+ with limitations</td>
          </tr>
        </tbody>
      </table>

      <h3>recommended requirements</h3>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Recommendation</th>
            <th>Benefits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="editorial-badge">CPU</span></td>
            <td>Quad-core 3.0+ GHz</td>
            <td>Faster builds, concurrent agent execution</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">RAM</span></td>
            <td>16GB</td>
            <td>ML model training, multiple agents, large datasets</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">GPU</span></td>
            <td>NVIDIA RTX 3060+ (8GB VRAM)</td>
            <td>GPU-accelerated ML training & inference</td>
          </tr>
          <tr>
            <td><span className="editorial-badge">Storage</span></td>
            <td>50GB+ SSD</td>
            <td>Fast I/O for datasets, model artifacts, node_modules</td>
          </tr>
        </tbody>
      </table>

      <h2>software dependencies</h2>

      <h3>node.js & package managers</h3>
      <table>
        <thead>
          <tr>
            <th>Software</th>
            <th>Version</th>
            <th>Installation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Node.js</strong></td>
            <td>18.0+</td>
            <td><a href="https://nodejs.org" target="_blank">nodejs.org</a></td>
          </tr>
          <tr>
            <td><strong>npm</strong></td>
            <td>9.0+</td>
            <td>Included with Node.js</td>
          </tr>
          <tr>
            <td><strong>pnpm</strong> (optional)</td>
            <td>8.0+</td>
            <td><code>npm install -g pnpm</code></td>
          </tr>
          <tr>
            <td><strong>yarn</strong> (optional)</td>
            <td>1.22+</td>
            <td><code>npm install -g yarn</code></td>
          </tr>
        </tbody>
      </table>

      <h4>verify node.js installation</h4>
      <pre><code>node --version  # Should show v18.0.0 or higher
npm --version   # Should show 9.0.0 or higher</code></pre>

      <h3>python & pip</h3>
      <table>
        <thead>
          <tr>
            <th>Software</th>
            <th>Version</th>
            <th>Installation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Python</strong></td>
            <td>3.11+</td>
            <td><a href="https://python.org" target="_blank">python.org</a></td>
          </tr>
          <tr>
            <td><strong>pip</strong></td>
            <td>23.0+</td>
            <td>Included with Python</td>
          </tr>
          <tr>
            <td><strong>venv</strong></td>
            <td>Built-in</td>
            <td>Standard library module</td>
          </tr>
        </tbody>
      </table>

      <h4>verify python installation</h4>
      <pre><code>python --version  # Should show Python 3.11.0 or higher
pip --version     # Should show pip 23.0 or higher</code></pre>

      <div className="docs-callout">
        <div className="docs-callout-title">💡 Python 3.10 Support</div>
        <p>
          While Python 3.10 is supported, Python 3.11+ is strongly recommended for improved 
          performance and better type hint support in the ML subsystem.
        </p>
      </div>

      <h3>cuda & gpu (optional for ml)</h3>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Version</th>
            <th>Installation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>CUDA Toolkit</strong></td>
            <td>12.6+</td>
            <td><a href="https://developer.nvidia.com/cuda-downloads" target="_blank">NVIDIA CUDA</a></td>
          </tr>
          <tr>
            <td><strong>cuDNN</strong></td>
            <td>8.9+</td>
            <td><a href="https://developer.nvidia.com/cudnn" target="_blank">NVIDIA cuDNN</a></td>
          </tr>
          <tr>
            <td><strong>NVIDIA Driver</strong></td>
            <td>525.60+</td>
            <td><a href="https://www.nvidia.com/drivers" target="_blank">NVIDIA Drivers</a></td>
          </tr>
        </tbody>
      </table>

      <h4>verify cuda installation</h4>
      <pre><code># Check NVIDIA driver and CUDA version
nvidia-smi

# Expected output shows driver version and CUDA version
# +-----------------------------------------------------------------------------+
# | NVIDIA-SMI 535.98       Driver Version: 535.98       CUDA Version: 12.6     |
# +-----------------------------------------------------------------------------+</code></pre>

      <h3>git version control</h3>
      <table>
        <thead>
          <tr>
            <th>Software</th>
            <th>Version</th>
            <th>Installation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Git</strong></td>
            <td>2.30+</td>
            <td><a href="https://git-scm.com" target="_blank">git-scm.com</a></td>
          </tr>
        </tbody>
      </table>

      <h4>verify git installation</h4>
      <pre><code>git --version  # Should show git version 2.30.0 or higher</code></pre>

      <h2>framework versions</h2>

      <h3>frontend stack</h3>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Version</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Next.js</strong></td>
            <td>15.x</td>
            <td>React framework, App Router</td>
          </tr>
          <tr>
            <td><strong>React</strong></td>
            <td>19.x</td>
            <td>UI library with Server Components</td>
          </tr>
          <tr>
            <td><strong>TypeScript</strong></td>
            <td>5.7+</td>
            <td>Type safety and IntelliSense</td>
          </tr>
          <tr>
            <td><strong>Tailwind CSS</strong></td>
            <td>3.4+</td>
            <td>Utility-first styling</td>
          </tr>
        </tbody>
      </table>

      <h3>backend stack</h3>
      <table>
        <thead>
          <tr>
            <th>Package</th>
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
            <td>ASGI server</td>
          </tr>
          <tr>
            <td><strong>Pydantic</strong></td>
            <td>2.5+</td>
            <td>Data validation</td>
          </tr>
        </tbody>
      </table>

      <h3>machine learning stack</h3>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Version</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>PyTorch</strong></td>
            <td>2.1+</td>
            <td>Deep learning framework</td>
          </tr>
          <tr>
            <td><strong>Transformers</strong></td>
            <td>4.35+</td>
            <td>HuggingFace models</td>
          </tr>
          <tr>
            <td><strong>Scikit-learn</strong></td>
            <td>1.3+</td>
            <td>Classical ML algorithms</td>
          </tr>
          <tr>
            <td><strong>FAISS</strong></td>
            <td>1.7+</td>
            <td>Dense vector search</td>
          </tr>
          <tr>
            <td><strong>NumPy</strong></td>
            <td>1.24+</td>
            <td>Numerical computing</td>
          </tr>
          <tr>
            <td><strong>Pandas</strong></td>
            <td>2.1+</td>
            <td>Data manipulation</td>
          </tr>
        </tbody>
      </table>

      <h2>browser compatibility</h2>

      <h3>fully supported</h3>
      <ul>
        <li><strong>Google Chrome</strong> 90+ - Best experience, all features</li>
        <li><strong>Microsoft Edge</strong> 90+ - Chromium-based, full support</li>
        <li><strong>Firefox</strong> 88+ - Full support with minor styling differences</li>
      </ul>

      <h3>supported with limitations</h3>
      <ul>
        <li><strong>Safari</strong> 14+ - Some CSS features limited, RAM monitoring unavailable</li>
        <li><strong>Brave</strong> - Works but may need shield adjustments</li>
        <li><strong>Opera</strong> - Chromium-based, generally compatible</li>
      </ul>

      <h3>not supported</h3>
      <ul>
        <li>Internet Explorer (any version)</li>
        <li>Legacy Edge (pre-Chromium)</li>
        <li>Browsers with JavaScript disabled</li>
      </ul>

      <div className="docs-callout warning">
        <div className="docs-callout-title">⚠️ Safari Limitations</div>
        <p>
          Safari does not support the <code>performance.memory</code> API, so RAM usage 
          monitoring will show "N/A" in the System Info widget.
        </p>
      </div>

      <h2>network requirements</h2>

      <h3>ports</h3>
      <table>
        <thead>
          <tr>
            <th>Port</th>
            <th>Service</th>
            <th>Protocol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>3000</code></td>
            <td>Next.js Frontend</td>
            <td>HTTP</td>
          </tr>
          <tr>
            <td><code>7433</code></td>
            <td>FastAPI Backend</td>
            <td>HTTP</td>
          </tr>
        </tbody>
      </table>

      <h3>external connections</h3>
      <ul>
        <li><strong>HuggingFace Hub</strong> - Dataset and model downloads (optional)</li>
        <li><strong>Google Fonts</strong> - Web font loading</li>
        <li><strong>CDNs</strong> - Optional for production deployments</li>
      </ul>

      <h2>development tools (recommended)</h2>

      <h3>code editors</h3>
      <ul>
        <li><strong>VS Code</strong> - Recommended, with TypeScript and Python extensions</li>
        <li><strong>WebStorm</strong> - Full Next.js support</li>
        <li><strong>PyCharm</strong> - Excellent for Python backend work</li>
      </ul>

      <h3>browser extensions</h3>
      <ul>
        <li><strong>React Developer Tools</strong> - Component debugging</li>
        <li><strong>Redux DevTools</strong> - State inspection (if using Redux)</li>
        <li><strong>Lighthouse</strong> - Performance auditing</li>
      </ul>

      <h2>quick setup checklist</h2>
      <p>Use this checklist to verify your environment is ready:</p>

      <ul>
        <li>☐ Node.js 18+ installed and on PATH</li>
        <li>☐ Python 3.11+ installed and on PATH</li>
        <li>☐ Git installed</li>
        <li>☐ npm or pnpm available</li>
        <li>☐ pip and venv available</li>
        <li>☐ CUDA Toolkit installed (optional, for GPU)</li>
        <li>☐ Ports 3000 and 7433 available</li>
        <li>☐ At least 4GB RAM available</li>
        <li>☐ At least 2GB disk space free</li>
        <li>☐ Modern browser installed</li>
        <li>☐ Internet connection for package downloads</li>
      </ul>

      <h2>next steps</h2>
      <p>Once prerequisites are met, proceed with installation:</p>

      <div className="quick-links-grid">
        <Link href="/docs/getting-started/installation" className="quick-link-card">
          <span className="quick-link-icon">📦</span>
          <span className="quick-link-title">Installation Guide</span>
          <span className="quick-link-desc">Step-by-step installation instructions</span>
        </Link>

        <Link href="/docs/getting-started/quick-start" className="quick-link-card">
          <span className="quick-link-icon">⚡</span>
          <span className="quick-link-title">Quick Start</span>
          <span className="quick-link-desc">Get up and running in minutes</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/getting-started/installation" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Installation</span>
        </Link>
        <Link href="/docs/architecture/overview" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Architecture Overview →</span>
        </Link>
      </div>
    </div>
  );
}
