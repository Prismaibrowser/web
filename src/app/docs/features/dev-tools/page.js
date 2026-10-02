import Link from 'next/link';

export default function DevToolsPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/features/overview">Features & Tools</Link>
        <span>/</span>
        <span>Developer Tools</span>
      </div>

      <h1>developer tools (23)</h1>
      <p className="lead">
        Complete reference for all 23 integrated developer utilities in PrismSpace Dev Space.
      </p>

      <div className="docs-callout">
        <div className="docs-callout-title">📍 Access Dev Space</div>
        <p>
          Scroll down from the main dashboard to find the Dev Space with all 23 tools organized by category.
        </p>
      </div>

      <h2>development tools</h2>
      
      <h3>1. localhost</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p>Quick access to your local development server at <code>localhost:3000</code>. Perfect for testing your Next.js app or any local web server.</p>

      <h3>2. github</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p>Direct link to GitHub for version control, collaboration, and repository management.</p>

      <h3>3. json toolkit</h3>
      <p><span className="editorial-badge">side panel</span></p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>Format and beautify JSON</li>
        <li>Validate JSON syntax</li>
        <li>Diff comparison between two JSON objects</li>
        <li>Transform and query JSON data</li>
        <li>Copy formatted output</li>
      </ul>

      <h3>4. crypto utils</h3>
      <p><span className="editorial-badge">side panel</span></p>
      <p><strong>Capabilities:</strong></p>
      <ul>
        <li>Hash generation (MD5, SHA-1, SHA-256, SHA-512)</li>
        <li>Base64 encode/decode</li>
        <li>URL encode/decode</li>
        <li>JWT token decoder</li>
        <li>UUID generator</li>
        <li>Password generator with strength options</li>
      </ul>

      <h3>5. regex workbench</h3>
      <p><span className="editorial-badge">side panel</span></p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>Test regex patterns against sample text</li>
        <li>Match highlighting</li>
        <li>Common regex library (email, phone, URL patterns)</li>
        <li>Capture group extraction</li>
        <li>Replace functionality</li>
      </ul>

      <h3>6. markdown editor</h3>
      <p><span className="editorial-badge">side panel</span></p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>Live preview pane</li>
        <li>Formatting toolbar</li>
        <li>Auto-save to localStorage</li>
        <li>Export as Markdown or HTML</li>
        <li>Support for tables, code blocks, and images</li>
      </ul>

      <h3>7. git reference</h3>
      <p><span className="editorial-badge">side panel</span></p>
      <p><strong>Contents:</strong></p>
      <ul>
        <li>Git command cheat sheet</li>
        <li>Command builder for complex operations</li>
        <li>Common workflow scenarios</li>
        <li>Best practices and tips</li>
      </ul>

      <h3>8. time & date</h3>
      <p><span className="editorial-badge">side panel</span></p>
      <p><strong>Utilities:</strong></p>
      <ul>
        <li>Unix timestamp converter</li>
        <li>World clock with multiple timezones</li>
        <li>Cron expression builder</li>
        <li>Date arithmetic calculator</li>
      </ul>

      <h3>9. color gen</h3>
      <p><span className="editorial-badge">side panel</span></p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>Interactive color palette generator</li>
        <li>Color harmony rules (complementary, triadic, etc.)</li>
        <li>Hex, RGB, HSL conversion</li>
        <li>Copy color values</li>
        <li>Export palette as CSS or JSON</li>
      </ul>

      <h2>ai-powered tools</h2>

      <h3>10. prompt synthesizer</h3>
      <p><span className="editorial-badge">large side panel</span></p>
      <p>AI-powered prompt enhancement tool that helps you craft better prompts for AI models. Includes templates and optimization suggestions.</p>

      <h3>11. writing assistant</h3>
      <p>AI tool for improving writing quality, translating text, and summarizing content. Perfect for documentation and communication.</p>

      <h3>12. language learning</h3>
      <p>Interactive AI language tutor supporting 8+ languages with progress tracking, exercises, and personalized feedback.</p>

      <h3>13. code explainer</h3>
      <p>Explains code snippets in plain English, great for learning new languages or understanding complex codebases.</p>

      <h3>14. code translator</h3>
      <p>Converts code between 12+ programming languages including Python, JavaScript, TypeScript, Java, C++, Go, Rust, and more.</p>

      <h3>15. decision analyzer</h3>
      <p>AI-powered deep analysis tool with thinking mode for complex decision-making and problem-solving.</p>

      <h2>productivity tools</h2>

      <h3>16. checklist manager</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>Multiple named lists</li>
        <li>Templates for common task types</li>
        <li>Drag-and-drop reordering</li>
        <li>Print mode for physical checklists</li>
        <li>Progress tracking</li>
      </ul>

      <h3>17. focus timer</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p><strong>Pomodoro Features:</strong></p>
      <ul>
        <li>25/5 minute work/break cycles</li>
        <li>Session statistics</li>
        <li>Task labels</li>
        <li>Minimal mode</li>
        <li>Browser notifications</li>
      </ul>

      <h3>18. bookmark manager</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p><strong>Capabilities:</strong></p>
      <ul>
        <li>Save and organize bookmarks</li>
        <li>Tag-based categorization</li>
        <li>Full-text search</li>
        <li>Import/export functionality</li>
        <li>Visit count tracking</li>
      </ul>

      <h3>19. habit tracker</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p><strong>Tracking Features:</strong></p>
      <ul>
        <li>Daily habit check-ins</li>
        <li>Streak counting</li>
        <li>Calendar heatmap visualization</li>
        <li>Weekly performance charts</li>
        <li>Habit history and statistics</li>
      </ul>

      <h3>20. random picker</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p><strong>Randomization Tools:</strong></p>
      <ul>
        <li>Name/item picker from lists</li>
        <li>Random number generator (range support)</li>
        <li>Dice roller (multiple dice types)</li>
        <li>Coin flipper</li>
        <li>Yes/No decision maker</li>
        <li>Selection history</li>
      </ul>

      <h3>21. shortcut reference</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>Searchable keyboard shortcuts database</li>
        <li>Pin frequently used shortcuts</li>
        <li>Application-specific shortcuts</li>
        <li>Platform-specific variations (Windows/Mac)</li>
      </ul>

      <h2>system tools</h2>

      <h3>22. system info</h3>
      <p><span className="editorial-badge">clipboard copy</span></p>
      <p>Copies comprehensive system information to clipboard including:</p>
      <ul>
        <li>Browser name and version</li>
        <li>Operating system</li>
        <li>Screen resolution</li>
        <li>RAM usage (Chrome only)</li>
        <li>Connection type and speed</li>
        <li>Language and timezone</li>
      </ul>

      <h3>23. prismBrowser web</h3>
      <p><span className="editorial-badge">new tab</span></p>
      <p>Quick access link to PrismSpace official website and documentation.</p>

      <h2>using the tools</h2>

      <h3>side panel tools</h3>
      <p>Tools that open in side panels slide in from the right side of the screen:</p>
      <ol>
        <li>Click the tool card in Dev Space</li>
        <li>Panel slides in with the tool interface</li>
        <li>Close with X button or ESC key</li>
        <li>Multiple panels can't be open simultaneously</li>
      </ol>

      <h3>new tab tools</h3>
      <p>Tools that open in new tabs launch in a separate browser tab for dedicated workspace:</p>
      <ol>
        <li>Click the tool card</li>
        <li>New tab opens with full tool interface</li>
        <li>Work independently from main dashboard</li>
        <li>Can have multiple tool tabs open</li>
      </ol>

      <div className="docs-callout">
        <div className="docs-callout-title">💡 Pro Tip</div>
        <p>
          Use side panel tools for quick tasks and new tab tools when you need extended focus time with a specific utility.
        </p>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/features/overview" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Features Overview</span>
        </Link>
        <Link href="/docs/usage-guide/settings" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Settings Guide →</span>
        </Link>
      </div>
    </div>
  );
}
