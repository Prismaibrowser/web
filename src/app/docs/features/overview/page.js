import Link from 'next/link';

export default function FeaturesOverviewPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/features/overview">Features & Tools</Link>
        <span>/</span>
        <span>Complete Features</span>
      </div>

      <h1>complete features</h1>
      <p className="lead">
        PrismSpace delivers 50+ features including 23 developer tools, customizable UI, 
        agent OS capabilities, and comprehensive settings across 11 configuration sections.
      </p>

      <h2>feature categories</h2>

      <div className="quick-links-grid">
        <Link href="/docs/features/dev-tools" className="quick-link-card">
          <span className="quick-link-icon">🛠️</span>
          <span className="quick-link-title">23 Developer Tools</span>
          <span className="quick-link-desc">
            JSON toolkit, SQL playground, regex workbench, AI tools, productivity utilities
          </span>
        </Link>

        <Link href="/docs/features/ui-components" className="quick-link-card">
          <span className="quick-link-icon">🎨</span>
          <span className="quick-link-title">UI Components</span>
          <span className="quick-link-desc">
            15+ clock styles, glassmorphism design, customizable themes, system monitor
          </span>
        </Link>

        <Link href="/docs/features/agent-os" className="quick-link-card">
          <span className="quick-link-icon">🤖</span>
          <span className="quick-link-title">Agent OS Tooling</span>
          <span className="quick-link-desc">
            Filesystem, terminal, process, service, and system operations with approval gates
          </span>
        </Link>

        <Link href="/docs/usage-guide/settings" className="quick-link-card">
          <span className="quick-link-icon">⚙️</span>
          <span className="quick-link-title">Settings & Customization</span>
          <span className="quick-link-desc">
            11 settings sections for clock, themes, quotes, extras, and more
          </span>
        </Link>
      </div>

      <h2>developer tools (23)</h2>
      <p>
        Complete suite of integrated development utilities accessible from the Dev Space:
      </p>

      <h3>development tools (9)</h3>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Description</th>
            <th>Opens In</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Localhost</strong></td>
            <td>Quick access to local development server</td>
            <td>New tab</td>
          </tr>
          <tr>
            <td><strong>GitHub</strong></td>
            <td>Version control and collaboration</td>
            <td>New tab</td>
          </tr>
          <tr>
            <td><strong>JSON Toolkit</strong></td>
            <td>Format, validate, diff & transform JSON</td>
            <td>Side panel</td>
          </tr>
          <tr>
            <td><strong>Crypto Utils</strong></td>
            <td>Hash, encode/decode, JWT, UUID, passwords</td>
            <td>Side panel</td>
          </tr>
          <tr>
            <td><strong>Regex Workbench</strong></td>
            <td>Test patterns, match highlighting, library</td>
            <td>Side panel</td>
          </tr>
          <tr>
            <td><strong>Markdown Editor</strong></td>
            <td>Live preview, toolbar, auto-save</td>
            <td>Side panel</td>
          </tr>
          <tr>
            <td><strong>Git Reference</strong></td>
            <td>Cheat sheet, builder, scenarios</td>
            <td>Side panel</td>
          </tr>
          <tr>
            <td><strong>Time & Date</strong></td>
            <td>Timestamp converter, world clock, cron</td>
            <td>Side panel</td>
          </tr>
          <tr>
            <td><strong>Color Gen</strong></td>
            <td>Interactive color palette generator</td>
            <td>Side panel</td>
          </tr>
        </tbody>
      </table>

      <h3>ai-powered tools (6)</h3>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Description</th>
            <th>Capability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Prompt Synthesizer</strong></td>
            <td>AI-powered prompt enhancement</td>
            <td>Large side panel</td>
          </tr>
          <tr>
            <td><strong>Writing Assistant</strong></td>
            <td>AI writing improvement, translate, summarize</td>
            <td>Content transformation</td>
          </tr>
          <tr>
            <td><strong>Language Learning</strong></td>
            <td>AI tutor for 8+ languages with progress tracker</td>
            <td>Interactive learning</td>
          </tr>
          <tr>
            <td><strong>Code Explainer</strong></td>
            <td>Explain code for learners & junior devs</td>
            <td>Code comprehension</td>
          </tr>
          <tr>
            <td><strong>Code Translator</strong></td>
            <td>Convert code between 12+ programming languages</td>
            <td>Language conversion</td>
          </tr>
          <tr>
            <td><strong>Decision Analyzer</strong></td>
            <td>AI deep analysis with thinking mode</td>
            <td>Decision support</td>
          </tr>
        </tbody>
      </table>

      <h3>productivity tools (6)</h3>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Description</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Checklist Manager</strong></td>
            <td>Task lists and templates</td>
            <td>Named lists, drag-and-drop, print mode</td>
          </tr>
          <tr>
            <td><strong>Focus Timer</strong></td>
            <td>Pomodoro timer</td>
            <td>Stats, task labels, minimal mode</td>
          </tr>
          <tr>
            <td><strong>Bookmark Manager</strong></td>
            <td>Save and organize links</td>
            <td>Tags, search, import/export, visit tracking</td>
          </tr>
          <tr>
            <td><strong>Habit Tracker</strong></td>
            <td>Track daily habits</td>
            <td>Streaks, heatmaps, weekly charts, history</td>
          </tr>
          <tr>
            <td><strong>Random Picker</strong></td>
            <td>Randomization utilities</td>
            <td>Names, numbers, dice, coins, yes/no, history</td>
          </tr>
          <tr>
            <td><strong>Shortcut Reference</strong></td>
            <td>Keyboard shortcuts cheat sheet</td>
            <td>Searchable, pinnable shortcuts</td>
          </tr>
        </tbody>
      </table>

      <h3>system tools (2)</h3>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Description</th>
            <th>Data Shown</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>System Info</strong></td>
            <td>Browser & system information</td>
            <td>Browser, OS, RAM, screen, connection (copies to clipboard)</td>
          </tr>
          <tr>
            <td><strong>PrismBrowser Web</strong></td>
            <td>Link to Prism documentation</td>
            <td>Quick access to prism website</td>
          </tr>
        </tbody>
      </table>

      <h2>ui & customization</h2>

      <h3>clock settings</h3>
      <ul>
        <li><strong>Clock Format</strong> - 12-hour or 24-hour time display</li>
        <li><strong>Clock Color</strong> - Custom color picker with hex input and history (10 recent colors)</li>
        <li><strong>15+ Clock Styles</strong> - Default, Minimal, Serif, Handwritten, Permanent Marker, Bitcount Grid, and 9 more custom fonts</li>
      </ul>

      <h3>theme settings</h3>
      <ul>
        <li><strong>Theme Modes</strong> - Home (default) or Focus mode with different UI emphasis</li>
        <li><strong>Background Gallery</strong> - 8 built-in gradient wallpapers</li>
        <li><strong>Custom Wallpaper Upload</strong> - Use your own background images (JPG, PNG)</li>
        <li><strong>Background Persistence</strong> - Settings saved in localStorage</li>
      </ul>

      <h3>quotes & greetings</h3>
      <ul>
        <li><strong>Dynamic Greetings</strong> - Toggle motivational tech quotes at top right</li>
        <li><strong>Daily Greetings</strong> - Show/hide day-specific messages above clock</li>
        <li><strong>Day-specific Content</strong> - Different quotes for each day of the week</li>
      </ul>

      <h3>extras</h3>
      <ul>
        <li><strong>Matrix Display</strong> - Animated matrix effect in bottom left (toggleable)</li>
        <li><strong>Fullscreen Mode</strong> - Toggle fullscreen with button or F11</li>
        <li><strong>Notepad Panel</strong> - Quick-access side panel notepad</li>
        <li><strong>System Info Widget</strong> - Hover-to-expand live system monitoring</li>
      </ul>

      <h2>agent os capabilities</h2>

      <h3>filesystem tools</h3>
      <ul>
        <li>Search filenames and file contents</li>
        <li>Read, write, edit files with full text manipulation</li>
        <li>Create, delete, copy, move files and directories</li>
        <li>Inspect directory trees and file metadata</li>
        <li>Permission inspection and updates</li>
      </ul>

      <h3>terminal & os tools</h3>
      <ul>
        <li>Run PowerShell (Windows) or native shell (Linux/macOS)</li>
        <li>Execute builds, tests, scripts, Git commands</li>
        <li>Stream command output through live agent log panel</li>
        <li>Host information, CPU/load, memory, disk usage</li>
        <li>Process listing, status checks, stopping, restarting</li>
      </ul>

      <h3>native file transfers</h3>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Tool</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Windows</strong></td>
            <td>Robocopy</td>
            <td>/J flag, retries, ETA output, move flags</td>
          </tr>
          <tr>
            <td><strong>Linux/macOS</strong></td>
            <td>rsync</td>
            <td>Archive mode, progress info</td>
          </tr>
          <tr>
            <td><strong>Fallback</strong></td>
            <td>cp / Python copy</td>
            <td>Used when preferred tool unavailable</td>
          </tr>
        </tbody>
      </table>

      <h3>structured os operations</h3>
      <ul>
        <li><strong>Services</strong> - Windows services and systemd service management</li>
        <li><strong>Package Management</strong> - winget, Chocolatey, Homebrew, apt, dnf, pacman</li>
        <li><strong>Environment Variables</strong> - Inspection and mutation</li>
        <li><strong>Archives</strong> - ZIP/TAR creation and secure extraction</li>
        <li><strong>Scheduler</strong> - Windows Task Scheduler and Linux/macOS scheduled tasks</li>
        <li><strong>Network</strong> - Ping and DNS diagnostics</li>
      </ul>

      <h3>approval & safety</h3>
      <p>
        High-risk operations pause the agent and appear as approval requests in the UI:
      </p>
      <ul>
        <li>Process and service changes</li>
        <li>Package installation</li>
        <li>Environment mutation</li>
        <li>Permission changes</li>
        <li>Scheduled task changes</li>
        <li>Archive extraction</li>
        <li>Destructive filesystem operations</li>
        <li>Destructive terminal commands</li>
      </ul>

      <h2>performance & optimization</h2>

      <h3>frontend metrics</h3>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>First Load JS</strong></td>
            <td>116 KB</td>
            <td>Initial JavaScript bundle size</td>
          </tr>
          <tr>
            <td><strong>Page Size</strong></td>
            <td>13.2 KB</td>
            <td>HTML payload size</td>
          </tr>
          <tr>
            <td><strong>Build Time</strong></td>
            <td>~2-3 seconds</td>
            <td>Production build duration</td>
          </tr>
        </tbody>
      </table>

      <h3>optimization techniques</h3>
      <ul>
        <li><strong>Code Splitting</strong> - Automatic by Next.js App Router</li>
        <li><strong>Lazy Loading</strong> - Iframes and images load on demand</li>
        <li><strong>Static Generation</strong> - Pages pre-rendered at build time</li>
        <li><strong>Tree Shaking</strong> - Unused code automatically removed</li>
        <li><strong>Minification</strong> - CSS and JS minified in production</li>
        <li><strong>Image Optimization</strong> - Next.js Image component with WebP</li>
      </ul>

      <h2>browser compatibility</h2>

      <h3>fully supported</h3>
      <ul>
        <li><strong>Chrome 90+</strong> - Best experience, all features including RAM monitoring</li>
        <li><strong>Edge 90+</strong> - Chromium-based, full support</li>
        <li><strong>Firefox 88+</strong> - Full support with minor styling differences</li>
      </ul>

      <h3>supported with limitations</h3>
      <ul>
        <li><strong>Safari 14+</strong> - Some CSS features limited, RAM monitoring shows "N/A"</li>
        <li><strong>Brave</strong> - Works but may need shield adjustments</li>
        <li><strong>Opera</strong> - Chromium-based, generally compatible</li>
      </ul>

      <h2>deployment ready</h2>

      <h3>supported platforms</h3>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Support Level</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Vercel</strong></td>
            <td>✅ Full</td>
            <td>One-click deployment, recommended</td>
          </tr>
          <tr>
            <td><strong>Netlify</strong></td>
            <td>✅ Full</td>
            <td>Static export or SSR</td>
          </tr>
          <tr>
            <td><strong>AWS Amplify</strong></td>
            <td>✅ Full</td>
            <td>Compatible with Next.js</td>
          </tr>
          <tr>
            <td><strong>Railway</strong></td>
            <td>✅ Full</td>
            <td>Backend + frontend deployment</td>
          </tr>
          <tr>
            <td><strong>DigitalOcean</strong></td>
            <td>✅ Full</td>
            <td>App Platform support</td>
          </tr>
          <tr>
            <td><strong>Docker</strong></td>
            <td>✅ Full</td>
            <td>Containerization ready</td>
          </tr>
          <tr>
            <td><strong>Self-hosted</strong></td>
            <td>✅ Full</td>
            <td>PM2, Nginx compatible</td>
          </tr>
        </tbody>
      </table>

      <h2>status summary</h2>

      <div className="quick-links-grid">
        <div className="quick-link-card">
          <span className="editorial-badge">Build</span>
          <span className="quick-link-title">✅ Production Ready</span>
          <span className="quick-link-desc">No TypeScript or linting errors, optimized builds</span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">Features</span>
          <span className="quick-link-title">50+ Implemented</span>
          <span className="quick-link-desc">23 dev tools, 15+ clock styles, 11 settings sections</span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">Performance</span>
          <span className="quick-link-title">116 KB First Load</span>
          <span className="quick-link-desc">Optimized bundle size with code splitting</span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">Compatibility</span>
          <span className="quick-link-title">Modern Browsers</span>
          <span className="quick-link-desc">Chrome, Firefox, Edge, Safari 14+ supported</span>
        </div>
      </div>

      <h2>next steps</h2>
      <div className="quick-links-grid">
        <Link href="/docs/features/dev-tools" className="quick-link-card">
          <span className="quick-link-icon">🛠️</span>
          <span className="quick-link-title">Developer Tools</span>
          <span className="quick-link-desc">Detailed guide to all 23 tools</span>
        </Link>

        <Link href="/docs/usage-guide/settings" className="quick-link-card">
          <span className="quick-link-icon">⚙️</span>
          <span className="quick-link-title">Settings Guide</span>
          <span className="quick-link-desc">Customize your PrismSpace experience</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/architecture/directory" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Directory Structure</span>
        </Link>
        <Link href="/docs/features/dev-tools" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Developer Tools →</span>
        </Link>
      </div>
    </div>
  );
}
