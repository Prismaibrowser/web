import Link from 'next/link';

export const metadata = { title: 'Contributing to PrismSpace', description: 'Learn how to contribute to PrismSpace, from code quality and licensing to pull requests and review.', alternates: { canonical: '/docs/license/contributing' } };

export default function ContributingPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/license/apache">License & Contributing</Link>
        <span>/</span>
        <span>Contributing Guide</span>
      </div>

      <h1>contributing to prismspace</h1>
      <p className="lead">
        Guidelines for contributing to PrismSpace including collaboration policy, 
        contribution requirements, and maintainer-controlled areas.
      </p>

      <div className="docs-callout">
        <div className="docs-callout-title">📝 Copyright Notice</div>
        <p>
          Copyright © 2026 Nobin Sijo (<a href="https://github.com/NobinSijo7T" target="_blank">NobinSijo7T</a>). 
          PrismSpace source is licensed under Apache-2.0.
        </p>
      </div>

      <h2>dev space collaboration</h2>
      <p>
        Collaborators are <strong>welcome and encouraged</strong> to contribute to the Dev Space tools:
      </p>

      <h3>open for contributions</h3>
      <ul>
        <li><code>public/dev-space/</code> - Dev Space assets and resources</li>
        <li><code>components/tools/</code> - Individual tool components</li>
        <li><code>app/dev-space/</code> - Dev Space pages and routes</li>
        <li>Supporting code in <code>lib/</code>, <code>hooks/</code>, and <code>components/</code></li>
      </ul>

      <h3>what you can do</h3>
      <ul>
        <li>✅ Add new independent Dev Space tools</li>
        <li>✅ Improve existing tool UX and features</li>
        <li>✅ Fix bugs in tools</li>
        <li>✅ Add tests for tools</li>
        <li>✅ Improve documentation</li>
        <li>✅ Enhance accessibility</li>
        <li>✅ Optimize performance</li>
      </ul>

      <h2>core ai & model boundary</h2>
      <p>
        The following areas are <strong>maintainer-controlled</strong> and require prior authorization:
      </p>

      <h3>restricted areas</h3>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Scope</th>
            <th>Authorization Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>model/</code></td>
            <td>Model architecture, training, routing, reward, safety, evaluation</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><code>model/artifacts*/</code></td>
            <td>Serialized models, indexes, checkpoints, reports</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><code>model/datasets/</code></td>
            <td>Training, validation, test data</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><code>backend/model_inference.py</code></td>
            <td>Model-serving and inference integration</td>
            <td>✅ Yes</td>
          </tr>
        </tbody>
      </table>

      <h3>requires written authorization</h3>
      <p>You must NOT without prior authorization from Nobin Sijo:</p>
      <ul>
        <li>Train, replace, or fine-tune core AI models</li>
        <li>Modify model weights or checkpoints</li>
        <li>Change datasets used for training</li>
        <li>Alter routing policies or safety behavior</li>
        <li>Redistribute model artifacts</li>
        <li>Change model-serving or deployment configuration</li>
      </ul>

      <div className="docs-callout warning">
        <div className="docs-callout-title">⚠️ Authorization Process</div>
        <p>
          Authorized work must document: model/data source, version, license, provenance, 
          evaluation impact, and redistribution terms before it can be merged.
        </p>
      </div>

      <h2>contribution requirements</h2>

      <h3>1. code quality</h3>
      <ul>
        <li>Keep Dev Space changes focused and scoped</li>
        <li>Include reproducible steps or tests</li>
        <li>Follow existing code style and conventions</li>
        <li>Add comments for complex logic</li>
        <li>Update documentation as needed</li>
      </ul>

      <h3>2. security & privacy</h3>
      <ul>
        <li>Do NOT commit API keys or secrets</li>
        <li>Do NOT include private user data</li>
        <li>Do NOT commit gated datasets without permission</li>
        <li>Do NOT include model artifacts unless authorized</li>
      </ul>

      <h3>3. licensing & attribution</h3>
      <ul>
        <li>Preserve copyright, license, and NOTICE information</li>
        <li>Include Apache-2.0 SPDX header where appropriate</li>
        <li>Disclose third-party, generated, or AI-assisted material</li>
        <li>Document provenance of copied/adapted code</li>
      </ul>

      <h3>4. contribution rights</h3>
      <p>By submitting a contribution, you confirm that:</p>
      <ul>
        <li>You have the right to submit it under Apache-2.0</li>
        <li>Your contribution is your original work or properly attributed</li>
        <li>You understand it becomes part of the project</li>
        <li>No separate written agreement says otherwise</li>
      </ul>

      <h2>contribution workflow</h2>

      <h3>step 1: fork & clone</h3>
      <pre><code># Fork repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR-USERNAME/prismspace-web.git
cd prismspace-web</code></pre>

      <h3>step 2: create branch</h3>
      <pre><code># Create feature branch
git checkout -b feature/your-feature-name

# Or bug fix branch
git checkout -b fix/bug-description</code></pre>

      <h3>step 3: make changes</h3>
      <ul>
        <li>Implement your changes in Dev Space areas</li>
        <li>Follow code style and conventions</li>
        <li>Add tests if applicable</li>
        <li>Update documentation</li>
      </ul>

      <h3>step 4: test locally</h3>
      <pre><code># Run development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Test your changes thoroughly</code></pre>

      <h3>step 5: commit & push</h3>
      <pre><code># Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add new developer tool for X"

# Push to your fork
git push origin feature/your-feature-name</code></pre>

      <h3>step 6: create pull request</h3>
      <ol>
        <li>Go to original PrismSpace repository on GitHub</li>
        <li>Click "New Pull Request"</li>
        <li>Select your branch</li>
        <li>Fill out PR template with:
          <ul>
            <li>Description of changes</li>
            <li>What was tested</li>
            <li>Screenshots (if UI changes)</li>
            <li>Related issues</li>
          </ul>
        </li>
        <li>Submit for review</li>
      </ol>

      <h2>commit message guidelines</h2>
      <p>Use conventional commits format:</p>
      <pre><code>type(scope): brief description

[optional body]

[optional footer]</code></pre>

      <h3>types</h3>
      <ul>
        <li><code>feat:</code> - New feature</li>
        <li><code>fix:</code> - Bug fix</li>
        <li><code>docs:</code> - Documentation only</li>
        <li><code>style:</code> - Code style (formatting, no logic change)</li>
        <li><code>refactor:</code> - Code refactoring</li>
        <li><code>perf:</code> - Performance improvement</li>
        <li><code>test:</code> - Adding or fixing tests</li>
        <li><code>chore:</code> - Maintenance tasks</li>
      </ul>

      <h3>examples</h3>
      <pre><code>feat(tools): add regex workbench tool
fix(clock): correct 24-hour format display
docs(readme): update installation instructions
style(components): format with prettier</code></pre>

      <h2>code style</h2>

      <h3>javascript/typescript</h3>
      <ul>
        <li>Use functional components with hooks</li>
        <li>Prefer arrow functions</li>
        <li>Use meaningful variable names</li>
        <li>Add JSDoc comments for complex functions</li>
        <li>Follow ESLint rules</li>
      </ul>

      <h3>react</h3>
      <ul>
        <li>Use 'use client' directive for client components</li>
        <li>Prefer Server Components when possible</li>
        <li>Keep components small and focused</li>
        <li>Extract reusable logic to custom hooks</li>
      </ul>

      <h3>css/styling</h3>
      <ul>
        <li>Use Tailwind CSS utility classes</li>
        <li>Follow High Voltage UI design tokens</li>
        <li>Maintain consistent spacing and colors</li>
        <li>Ensure responsive behavior</li>
      </ul>

      <h2>review process</h2>

      <h3>what reviewers check</h3>
      <ul>
        <li>Code quality and style</li>
        <li>Test coverage</li>
        <li>Documentation updates</li>
        <li>Performance impact</li>
        <li>Accessibility compliance</li>
        <li>License and attribution</li>
      </ul>

      <h3>approval authority</h3>
      <p>
        <strong>Nobin Sijo</strong> is the final maintainer for:
      </p>
      <ul>
        <li>Contribution scope decisions</li>
        <li>Core AI access permissions</li>
        <li>Licensing exceptions</li>
        <li>Release approvals</li>
      </ul>

      <h2>reporting issues</h2>

      <h3>before reporting</h3>
      <ul>
        <li>Check if issue already exists</li>
        <li>Verify it's not expected behavior</li>
        <li>Test on latest version</li>
        <li>Collect necessary information</li>
      </ul>

      <h3>issue template</h3>
      <p>Include in bug reports:</p>
      <ul>
        <li><strong>Environment</strong>: OS, browser, Node.js version</li>
        <li><strong>Steps to reproduce</strong>: Detailed reproduction steps</li>
        <li><strong>Expected behavior</strong>: What should happen</li>
        <li><strong>Actual behavior</strong>: What actually happens</li>
        <li><strong>Screenshots</strong>: If applicable</li>
        <li><strong>Console errors</strong>: From browser DevTools</li>
      </ul>

      <h2>getting help</h2>

      <h3>resources</h3>
      <ul>
        <li><strong>Documentation</strong> - This site (<code>/docs</code>)</li>
        <li><strong>README</strong> - Project overview</li>
        <li><strong>USAGE_GUIDE</strong> - User guide</li>
        <li><strong>FEATURES</strong> - Feature list</li>
      </ul>

      <h3>community</h3>
      <ul>
        <li><strong>GitHub Issues</strong> - Bug reports and feature requests</li>
        <li><strong>GitHub Discussions</strong> - Q&A and ideas</li>
        <li><strong>Email</strong> - prismaibrowser@gmail.com</li>
      </ul>

      <h2>recognition</h2>
      <p>Contributors will be:</p>
      <ul>
        <li>Listed in project acknowledgments</li>
        <li>Credited in release notes</li>
        <li>Recognized in README (for significant contributions)</li>
      </ul>

      <h2>legal</h2>
      <p>
        This is a repository contribution and access rule. It does not purport to override 
        Apache-2.0 rights that a recipient may otherwise have in law, and it does not grant 
        permission to redistribute third-party models or datasets.
      </p>

      <div className="docs-nav-footer">
        <Link href="/docs/license/apache" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Apache 2.0 License</span>
        </Link>
        <Link href="/docs" className="docs-nav-button">
          <span className="docs-nav-label">Documentation Home</span>
          <span className="docs-nav-title">Back to Docs →</span>
        </Link>
      </div>
    </div>
  );
}
