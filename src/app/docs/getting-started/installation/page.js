import Link from 'next/link';

export default function InstallationPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/getting-started/quick-start">Getting Started</Link>
        <span>/</span>
        <span>Installation</span>
      </div>

      <h1>installation guide</h1>
      <p className="lead">
        Complete installation instructions for PrismSpace including frontend, backend, 
        machine learning environment setup, and GPU acceleration support.
      </p>

      <h2>prerequisites</h2>
      <p>Before starting, ensure you have the following installed:</p>

      <ul>
        <li><strong>Node.js</strong>: 18.0+ & <code>npm</code> or <code>pnpm</code></li>
        <li><strong>Python</strong>: 3.11+ (3.10+ minimum)</li>
        <li><strong>Git</strong>: For cloning the repository</li>
        <li><strong>NVIDIA GPU</strong> (Optional): CUDA 12.6+ for ML acceleration</li>
      </ul>

      <div className="docs-callout">
        <div className="docs-callout-title">💡 System Requirements</div>
        <p>
          <strong>Minimum:</strong> 4GB RAM, dual-core CPU, 2GB disk space<br/>
          <strong>Recommended:</strong> 16GB RAM, quad-core CPU, NVIDIA GPU with 8GB VRAM, 10GB disk space
        </p>
      </div>

      <h2>1. clone the repository</h2>
      <pre><code>git clone https://github.com/NobinSijo7T/prismspace-web.git
cd prismspace-web</code></pre>

      <h2>2. frontend installation</h2>
      
      <h3>install node dependencies</h3>
      <pre><code># Using npm (default)
npm install

# Or using pnpm (faster)
pnpm install

# Or using yarn
yarn install</code></pre>

      <h3>environment variables (optional)</h3>
      <p>Create a <code>.env.local</code> file for custom configuration:</p>
      <pre><code># Copy example environment file
cp .env.example .env.local

# Edit with your settings
# NEXT_PUBLIC_API_URL=http://localhost:7433
# NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id</code></pre>

      <h3>verify frontend</h3>
      <pre><code># Run development server
npm run dev

# Should start on http://localhost:3000</code></pre>

      <h2>3. backend installation</h2>

      <h3>create python virtual environment</h3>
      <pre><code># Create virtual environment
python -m venv .venv

# Activate on Windows (PowerShell)
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1

# Activate on Linux/macOS
source .venv/bin/activate</code></pre>

      <h3>install backend dependencies</h3>
      <pre><code># Upgrade pip
python -m pip install --upgrade pip

# Install backend requirements
pip install -r backend/requirements.txt</code></pre>

      <h3>verify backend</h3>
      <pre><code># Run FastAPI server
cd backend
python hive_api.py

# Should start on http://localhost:7433
# API docs at http://localhost:7433/docs</code></pre>

      <h2>4. machine learning environment (optional)</h2>
      <p>
        For ML model training, evaluation, and GPU-accelerated inference, set up the ML subsystem:
      </p>

      <h3>install pytorch with cuda support</h3>
      <pre><code># Install PyTorch with CUDA 12.6 (NVIDIA GPU)
python -m pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126

# Or CPU-only version (no GPU)
python -m pip install torch torchvision torchaudio</code></pre>

      <h3>install ml requirements</h3>
      <pre><code># Install all ML dependencies
python -m pip install -r model/requirements.txt</code></pre>

      <h3>verify gpu availability</h3>
      <pre><code>python -c "import torch; print('CUDA available:', torch.cuda.is_available()); print('Device:', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'CPU Fallback')"</code></pre>

      <p>Expected output with GPU:</p>
      <pre><code>CUDA available: True
Device: NVIDIA GeForce RTX 4090</code></pre>

      <h2>5. dataset preparation (optional)</h2>
      <p>
        For training ML models, download and prepare datasets:
      </p>

      <h3>download datasets</h3>
      <p>Datasets are automatically downloaded when training, or manually:</p>
      <pre><code># Download specific datasets from HuggingFace
# ScaleAI LHAW
huggingface-cli download ScaleAI/lhaw --repo-type dataset --local-dir model/datasets/training/lhaw

# Berkeley Function Calling Leaderboard
huggingface-cli download gorilla-llm/Berkeley-Function-Calling-Leaderboard --repo-type dataset --local-dir model/datasets/training/Berkeley-Function-Calling-Leaderboard</code></pre>

      <h3>prepare supervised datasets</h3>
      <pre><code># Process and normalize datasets
python -m model.prepare_supervised_datasets --input-dir model/datasets/training --output-dir model/datasets/training/curated</code></pre>

      <div className="docs-callout warning">
        <div className="docs-callout-title">⚠️ Storage Requirements</div>
        <p>
          Complete dataset collection requires approximately <strong>50-100GB</strong> of disk space. 
          You can selectively download only the datasets you need for specific models.
        </p>
      </div>

      <h2>6. production build</h2>
      <p>For production deployment, build optimized versions:</p>

      <h3>build frontend</h3>
      <pre><code># Create optimized production build
npm run build

# Test production build locally
npm start</code></pre>

      <h3>build validation</h3>
      <pre><code># Validate TypeScript
npx tsc --noEmit

# Run linter
npm run lint

# Check build size
npm run build -- --profile</code></pre>

      <h2>7. docker installation (alternative)</h2>
      <p>Run PrismSpace in containers (coming soon):</p>
      <pre><code># Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down</code></pre>

      <h2>troubleshooting</h2>

      <h3>node_modules issues</h3>
      <pre><code># Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install</code></pre>

      <h3>python dependency conflicts</h3>
      <pre><code># Recreate virtual environment
deactivate
rm -rf .venv
python -m venv .venv
.\.venv\Scripts\Activate.ps1  # or source .venv/bin/activate
pip install -r backend/requirements.txt</code></pre>

      <h3>cuda/gpu not detected</h3>
      <pre><code># Check CUDA installation
nvidia-smi

# Reinstall PyTorch with correct CUDA version
pip uninstall torch torchvision torchaudio
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126</code></pre>

      <h3>port conflicts</h3>
      <pre><code>{`# Find process using port 3000 or 7433
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/macOS
lsof -ti:3000
kill -9 <PID>`}</code></pre>

      <h2>verification checklist</h2>
      <p>After installation, verify all components:</p>

      <ul>
        <li>✅ Frontend runs on <code>http://localhost:3000</code></li>
        <li>✅ Backend API accessible at <code>http://localhost:7433</code></li>
        <li>✅ Swagger docs available at <code>http://localhost:7433/docs</code></li>
        <li>✅ Agent Swarm dashboard loads at <code>/swarm</code></li>
        <li>✅ All 23 developer tools are accessible</li>
        <li>✅ Settings modal opens and saves preferences</li>
        <li>✅ ML models load successfully (if installed)</li>
        <li>✅ GPU is detected (if available)</li>
      </ul>

      <h2>next steps</h2>
      <div className="quick-links-grid">
        <Link href="/docs/getting-started/prerequisites" className="quick-link-card">
          <span className="quick-link-icon">📋</span>
          <span className="quick-link-title">Prerequisites Details</span>
          <span className="quick-link-desc">Detailed system requirements and dependency versions</span>
        </Link>

        <Link href="/docs/api/training" className="quick-link-card">
          <span className="quick-link-icon">🧠</span>
          <span className="quick-link-title">Training Models</span>
          <span className="quick-link-desc">Train ML models with your datasets</span>
        </Link>

        <Link href="/docs/api/deployment" className="quick-link-card">
          <span className="quick-link-icon">🚀</span>
          <span className="quick-link-title">Deployment</span>
          <span className="quick-link-desc">Deploy to Vercel, AWS, or self-hosted servers</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/getting-started/quick-start" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Quick Start</span>
        </Link>
        <Link href="/docs/getting-started/prerequisites" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Prerequisites →</span>
        </Link>
      </div>
    </div>
  );
}
