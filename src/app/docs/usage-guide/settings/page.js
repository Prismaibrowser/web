import Link from 'next/link';

export default function SettingsGuidePage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/usage-guide/settings">Usage Guide</Link>
        <span>/</span>
        <span>Settings & Customization</span>
      </div>

      <h1>settings & customization</h1>
      <p className="lead">
        Complete guide to customizing PrismSpace including clock styles, themes, colors, 
        backgrounds, quotes, and system preferences.
      </p>

      <div className="docs-callout">
        <div className="docs-callout-title">⚙️ Access Settings</div>
        <p>
          Click the <strong>⚙️ Settings</strong> button in the bottom right corner of the dashboard 
          to open the settings modal.
        </p>
      </div>

      <h2>clock settings</h2>

      <h3>change clock format</h3>
      <ol>
        <li>Open Settings modal (⚙️ button)</li>
        <li>Go to <strong>Clock</strong> section</li>
        <li>Choose <strong>12-hour</strong> or <strong>24-hour</strong> format</li>
        <li>Changes apply immediately (page reloads)</li>
      </ol>

      <h3>change clock color</h3>
      <ol>
        <li>Go to <strong>Clock</strong> section → <strong>Clock Color</strong></li>
        <li>Use color picker or enter hex code (e.g., <code>#00df81</code>)</li>
        <li>Recent colors are saved for quick access (up to 10 colors)</li>
        <li>Click <strong>Reset</strong> to restore white</li>
        <li>Click <strong>Clear History</strong> to remove saved colors</li>
      </ol>

      <h3>change clock style</h3>
      <p>PrismSpace offers 15+ unique clock fonts:</p>

      <table>
        <thead>
          <tr>
            <th>Style Name</th>
            <th>Typeface</th>
            <th>Character</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Default</strong></td>
            <td>Bold Montserrat</td>
            <td>Clean, modern, professional</td>
          </tr>
          <tr>
            <td><strong>Minimal</strong></td>
            <td>Light Space Grotesk</td>
            <td>Thin, elegant, minimalist</td>
          </tr>
          <tr>
            <td><strong>Serif</strong></td>
            <td>Classic Georgia</td>
            <td>Traditional, readable</td>
          </tr>
          <tr>
            <td><strong>Handwritten</strong></td>
            <td>Brush Script</td>
            <td>Casual, artistic</td>
          </tr>
          <tr>
            <td><strong>Permanent Marker</strong></td>
            <td>Marker style</td>
            <td>Bold, informal</td>
          </tr>
          <tr>
            <td><strong>Bitcount Grid</strong></td>
            <td>Retro monospace</td>
            <td>Digital, technical</td>
          </tr>
        </tbody>
      </table>

      <p>Plus 9 more custom fonts: Serif Condensed, Corpta, Fenotype Wonder, NCL Kemgor, Westiva, Ammonite, Crude, Ghetto, Zombiess</p>

      <h4>how to change</h4>
      <ol>
        <li>Go to <strong>Clock</strong> section → <strong>Clock Style</strong></li>
        <li>Browse all 15 styles with live previews</li>
        <li>Click any style to apply</li>
        <li>Changes take effect immediately (page reloads)</li>
      </ol>

      <h2>theme settings</h2>

      <h3>switch theme mode</h3>
      <ol>
        <li>Go to <strong>Themes</strong> section → <strong>Themes</strong></li>
        <li>Choose <strong>Home</strong> (default) or <strong>Focus</strong> mode</li>
        <li>Each theme has different UI emphasis</li>
      </ol>

      <h3>change background wallpaper</h3>

      <h4>built-in wallpapers</h4>
      <ol>
        <li>Go to <strong>Themes</strong> section → <strong>Background</strong></li>
        <li>Click any of the 8 built-in gradient wallpapers</li>
        <li>Background changes immediately</li>
      </ol>

      <h4>upload custom wallpaper</h4>
      <ol>
        <li>Click <strong>Upload Custom Wallpaper</strong> button</li>
        <li>Select image file (JPG or PNG)</li>
        <li>Image sets as background immediately</li>
        <li>Stored in localStorage</li>
      </ol>

      <div className="docs-callout">
        <div className="docs-callout-title">💡 Image Tips</div>
        <p>
          For best performance, use optimized images under 5MB. High-resolution images 
          (1920×1080 or higher) work best for full-screen displays.
        </p>
      </div>

      <h2>quotes & greetings</h2>

      <h3>toggle dynamic greetings (top quote)</h3>
      <ol>
        <li>Go to <strong>Quotes</strong> section</li>
        <li>Toggle <strong>Show dynamic greetings</strong></li>
        <li><strong>ON</strong> = Random tech quotes appear at top right</li>
        <li><strong>OFF</strong> = No top quote displayed</li>
      </ol>

      <h3>toggle daily greetings (center messages)</h3>
      <ol>
        <li>Toggle <strong>Show greetings</strong></li>
        <li><strong>ON</strong> = Daily messages shown above clock</li>
        <li><strong>OFF</strong> = Only clock is displayed (page reloads)</li>
      </ol>

      <p>Each day of the week has unique greeting messages for variety.</p>

      <h2>extras</h2>

      <h3>toggle matrix display</h3>
      <ol>
        <li>Go to <strong>Extras</strong> section</li>
        <li>Toggle <strong>Matrix Display</strong></li>
        <li><strong>ON</strong> = Animated matrix in bottom left</li>
        <li><strong>OFF</strong> = Matrix hidden (page reloads)</li>
      </ol>

      <h3>other controls</h3>
      <ul>
        <li><strong>Fullscreen Mode</strong> - Click ⛶ button (bottom right) or press F11</li>
        <li><strong>Notepad Panel</strong> - Click 📝 button (bottom left) for quick notes</li>
        <li><strong>System Info Widget</strong> - Hover over left side panel for live stats</li>
      </ul>

      <h2>settings persistence</h2>

      <h3>where settings are stored</h3>
      <p>All settings are stored in browser <strong>localStorage</strong>:</p>
      <ul>
        <li>Clock format (12/24 hour)</li>
        <li>Clock style selection</li>
        <li>Clock color and color history</li>
        <li>Selected background</li>
        <li>Toggle preferences (greetings, matrix)</li>
        <li>Focus timer settings</li>
      </ul>

      <h3>what is NOT stored</h3>
      <ul>
        <li>No server-side storage</li>
        <li>No analytics or tracking</li>
        <li>No cookies (except localStorage)</li>
        <li>No personal data collection</li>
        <li>No external API calls for settings</li>
      </ul>

      <h3>clearing all settings</h3>
      <p><strong>Method 1: Browser DevTools</strong></p>
      <ol>
        <li>Open DevTools (F12)</li>
        <li>Go to <strong>Application</strong> tab</li>
        <li>Click <strong>Local Storage</strong> → <strong>localhost:3000</strong></li>
        <li>Click <strong>Clear All</strong></li>
        <li>Refresh the page</li>
      </ol>

      <p><strong>Method 2: Browser Console</strong></p>
      <pre><code>// In browser console (F12)
localStorage.clear();
location.reload();</code></pre>

      <h2>browser compatibility notes</h2>

      <h3>chrome / edge (best experience)</h3>
      <ul>
        <li>✅ All features fully supported</li>
        <li>✅ RAM monitoring in System Info widget</li>
        <li>✅ Performance.memory API available</li>
        <li>✅ Best color picker support</li>
      </ul>

      <h3>firefox</h3>
      <ul>
        <li>✅ All features supported</li>
        <li>✅ Minor CSS styling differences</li>
        <li>⚠️ RAM monitoring unavailable (API not supported)</li>
      </ul>

      <h3>safari</h3>
      <ul>
        <li>✅ Core features work</li>
        <li>⚠️ Some CSS features limited</li>
        <li>⚠️ RAM monitoring shows "N/A"</li>
        <li>⚠️ Color picker may differ</li>
      </ul>

      <h2>keyboard shortcuts</h2>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Shortcut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open Settings</td>
            <td>Click ⚙️ button (no hotkey)</td>
          </tr>
          <tr>
            <td>Close Settings/Panels</td>
            <td><code>ESC</code></td>
          </tr>
          <tr>
            <td>Fullscreen Toggle</td>
            <td><code>F11</code> or ⛶ button</td>
          </tr>
          <tr>
            <td>Navigate Elements</td>
            <td><code>TAB</code></td>
          </tr>
          <tr>
            <td>Activate Button/Link</td>
            <td><code>ENTER</code></td>
          </tr>
        </tbody>
      </table>

      <h2>troubleshooting</h2>
      <p>See the <Link href="/docs/usage-guide/troubleshooting">Troubleshooting Guide</Link> for solutions to common issues with settings, backgrounds, and customization.</p>

      <div className="docs-nav-footer">
        <Link href="/docs/features/dev-tools" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Developer Tools</span>
        </Link>
        <Link href="/docs/usage-guide/troubleshooting" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Troubleshooting →</span>
        </Link>
      </div>
    </div>
  );
}
