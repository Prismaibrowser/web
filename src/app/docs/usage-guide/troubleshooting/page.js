import Link from 'next/link';

export default function TroubleshootingPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/usage-guide/settings">Usage Guide</Link>
        <span>/</span>
        <span>Troubleshooting</span>
      </div>

      <h1>troubleshooting</h1>
      <p className="lead">
        Solutions to common issues with PrismSpace including settings, performance, 
        build errors, and compatibility problems.
      </p>

      <h2>settings issues</h2>

      <h3>settings not saving</h3>
      <p><strong>Problem:</strong> Changes don't persist after page reload</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Check if cookies/localStorage are enabled in browser</li>
        <li>Try incognito/private mode to test</li>
        <li>Clear browser cache: <code>Ctrl+Shift+Del</code></li>
        <li>Check for browser extensions blocking storage</li>
        <li>Verify you're not in private browsing mode</li>
      </ol>

      <h3>custom background not loading</h3>
      <p><strong>Problem:</strong> Custom wallpaper doesn't show after upload</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Check file size (keep under 5MB)</li>
        <li>Use JPG or PNG format only</li>
        <li>Try a different image</li>
        <li>Clear localStorage and re-upload</li>
        <li>Check browser console (F12) for errors</li>
      </ol>

      <h3>clock not updating</h3>
      <p><strong>Problem:</strong> Time display is frozen</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Refresh the page (F5)</li>
        <li>Check if JavaScript is enabled</li>
        <li>Try a different browser</li>
        <li>Clear cache and reload</li>
      </ol>

      <h2>performance issues</h2>

      <h3>slow page load</h3>
      <p><strong>Problem:</strong> Dashboard takes long to load</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Disable matrix display (Settings → Extras)</li>
        <li>Use static backgrounds instead of animations</li>
        <li>Close unused tool panels</li>
        <li>Clear browser cache</li>
        <li>Check internet connection speed</li>
        <li>Update to latest browser version</li>
      </ol>

      <h3>high cpu/ram usage</h3>
      <p><strong>Problem:</strong> Browser using too many resources</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Turn off matrix animation</li>
        <li>Close unnecessary browser tabs</li>
        <li>Use static wallpapers (not GIFs)</li>
        <li>Disable browser extensions temporarily</li>
        <li>Reload page occasionally to clear accumulated state</li>
      </ol>

      <h2>build & development issues</h2>

      <h3>npm run dev fails</h3>
      <p><strong>Problem:</strong> Development server won't start</p>
      <p><strong>Solutions:</strong></p>
      <pre><code># Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check Node.js version (requires 18+)
node --version

# Try different port if 3000 is in use
PORT=3001 npm run dev</code></pre>

      <h3>npm run build errors</h3>
      <p><strong>Problem:</strong> Production build fails</p>
      <p><strong>Solutions:</strong></p>
      <pre><code># Clear Next.js cache
rm -rf .next

# Run TypeScript check
npx tsc --noEmit

# Run linter
npm run lint

# Rebuild
npm run build</code></pre>

      <h3>backend won't start</h3>
      <p><strong>Problem:</strong> FastAPI server fails to run</p>
      <p><strong>Solutions:</strong></p>
      <pre><code># Recreate virtual environment
deactivate
rm -rf .venv
python -m venv .venv

# Windows
.\.venv\Scripts\Activate.ps1

# Linux/macOS
source .venv/bin/activate

# Reinstall dependencies
pip install -r backend/requirements.txt

# Run backend
cd backend
python hive_api.py</code></pre>

      <h2>browser compatibility</h2>

      <h3>ram monitoring shows "n/a"</h3>
      <p><strong>Problem:</strong> System Info widget can't display RAM</p>
      <p><strong>Explanation:</strong> Only Chrome/Edge support <code>performance.memory</code> API</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Switch to Chrome or Edge for RAM monitoring</li>
        <li>This is a browser limitation, not a bug</li>
        <li>Other system info still works (browser, OS, screen, connection)</li>
      </ul>

      <h3>panel not opening</h3>
      <p><strong>Problem:</strong> Tool panel doesn't open when clicked</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Check browser console (F12) for JavaScript errors</li>
        <li>Ensure popup blockers aren't active</li>
        <li>Try clicking the tool card again</li>
        <li>Refresh the page</li>
        <li>Try a different tool to isolate the issue</li>
      </ol>

      <h3>fullscreen not working</h3>
      <p><strong>Problem:</strong> Fullscreen button doesn't work</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Some browsers require user gesture - click button again</li>
        <li>Use F11 as alternative</li>
        <li>Check browser permissions</li>
        <li>Try from a user interaction (not automated)</li>
      </ol>

      <h2>ml model issues</h2>

      <h3>cuda/gpu not detected</h3>
      <p><strong>Problem:</strong> PyTorch can't find GPU</p>
      <p><strong>Solutions:</strong></p>
      <pre><code># Check NVIDIA driver
nvidia-smi

# Reinstall PyTorch with correct CUDA version
pip uninstall torch torchvision torchaudio
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126

# Verify GPU
python -c "import torch; print(torch.cuda.is_available())"</code></pre>

      <h3>model training out of memory</h3>
      <p><strong>Problem:</strong> GPU runs out of memory during training</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Reduce batch size in training config</li>
        <li>Use <code>--max-rows-per-file 1000</code> for testing</li>
        <li>Close other GPU applications</li>
        <li>Use CPU fallback for small datasets</li>
        <li>Enable gradient checkpointing if available</li>
      </ol>

      <h2>port conflicts</h2>

      <h3>port 3000 already in use</h3>
      <p><strong>Problem:</strong> Frontend can't start on port 3000</p>
      <p><strong>Solutions:</strong></p>
      <pre><code># Windows - find and kill process
netstat -ano | findstr :3000
taskkill /PID &lt;PID&gt; /F

# Linux/macOS - find and kill process
lsof -ti:3000
kill -9 &lt;PID&gt;

# Or use different port
PORT=3001 npm run dev</code></pre>

      <h3>port 7433 already in use</h3>
      <p><strong>Problem:</strong> Backend can't start on port 7433</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Find and stop the conflicting process</li>
        <li>Change port in <code>backend/hive_api.py</code></li>
        <li>Update frontend API endpoint configuration</li>
      </ol>

      <h2>data & privacy</h2>

      <h3>clear all user data</h3>
      <p>To completely reset PrismSpace to defaults:</p>
      <pre><code>// Browser console (F12)
localStorage.clear();
sessionStorage.clear();
location.reload();</code></pre>

      <p>Or manually in DevTools:</p>
      <ol>
        <li>Open DevTools (F12)</li>
        <li>Go to <strong>Application</strong> tab</li>
        <li>Expand <strong>Local Storage</strong></li>
        <li>Right-click <strong>localhost:3000</strong></li>
        <li>Click <strong>Clear</strong></li>
        <li>Refresh page</li>
      </ol>

      <h2>getting more help</h2>

      <h3>check browser console</h3>
      <p>Many issues show error messages in the console:</p>
      <ol>
        <li>Press <code>F12</code> to open DevTools</li>
        <li>Click <strong>Console</strong> tab</li>
        <li>Look for red error messages</li>
        <li>Copy error text for troubleshooting</li>
      </ol>

      <h3>report bugs</h3>
      <p>If you encounter a bug:</p>
      <ol>
        <li>Check if it's a known issue in <Link href="/docs/license/contributing">Contributing Guide</Link></li>
        <li>Include browser name and version</li>
        <li>Describe steps to reproduce</li>
        <li>Include console error messages</li>
        <li>Add screenshots if helpful</li>
      </ol>

      <h2>common solutions checklist</h2>
      <p>Try these in order when troubleshooting:</p>
      <ul>
        <li>☐ Refresh the page (F5)</li>
        <li>☐ Clear browser cache (Ctrl+Shift+Del)</li>
        <li>☐ Try incognito/private mode</li>
        <li>☐ Check browser console for errors (F12)</li>
        <li>☐ Try a different browser</li>
        <li>☐ Clear localStorage: <code>localStorage.clear()</code></li>
        <li>☐ Restart development servers</li>
        <li>☐ Reinstall node_modules</li>
        <li>☐ Check for system updates</li>
        <li>☐ Review documentation</li>
      </ul>

      <div className="docs-nav-footer">
        <Link href="/docs/usage-guide/settings" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Settings Guide</span>
        </Link>
        <Link href="/docs/api/training" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Training Models →</span>
        </Link>
      </div>
    </div>
  );
}
