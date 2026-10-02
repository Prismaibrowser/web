import Link from 'next/link';

export default function ApacheLicensePage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/license/apache">License & Contributing</Link>
        <span>/</span>
        <span>Apache 2.0 License</span>
      </div>

      <h1>apache 2.0 license</h1>
      <p className="lead">
        PrismSpace is licensed under the Apache License 2.0, one of the most permissive 
        and business-friendly open source licenses.
      </p>

      <h2>license summary</h2>
      <p>
        Apache 2.0 is a permissive license that allows you to:
      </p>

      <div className="quick-links-grid">
        <div className="quick-link-card">
          <span className="editorial-badge">✅ Commercial Use</span>
          <span className="quick-link-desc">Use PrismSpace in commercial products and services</span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">✅ Modification</span>
          <span className="quick-link-desc">Modify the source code for your needs</span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">✅ Distribution</span>
          <span className="quick-link-desc">Distribute original or modified versions</span>
        </div>

        <div className="quick-link-card">
          <span className="editorial-badge">✅ Private Use</span>
          <span className="quick-link-desc">Use privately without disclosing source</span>
        </div>
      </div>

      <h2>key requirements</h2>
      <p>When using PrismSpace, you must:</p>

      <h3>1. include license notice</h3>
      <p>Include a copy of the Apache 2.0 license in any distribution:</p>
      <pre><code>Copyright © 2026 Nobin Sijo (NobinSijo7T)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0</code></pre>

      <h3>2. state changes</h3>
      <p>If you modify PrismSpace, you must include notices stating that changes were made:</p>
      <pre><code>// Modified by [Your Name] on [Date]
// Changes: [Brief description of modifications]</code></pre>

      <h3>3. preserve notices</h3>
      <p>Retain all copyright, patent, trademark, and attribution notices from the source code.</p>

      <h2>what you can do</h2>

      <h3>commercial use</h3>
      <ul>
        <li>Use PrismSpace in commercial products</li>
        <li>Offer PrismSpace as a service</li>
        <li>Integrate into proprietary software</li>
        <li>No royalties or fees required</li>
      </ul>

      <h3>modification</h3>
      <ul>
        <li>Modify source code freely</li>
        <li>Create derivative works</li>
        <li>Customize for your use case</li>
        <li>No obligation to share modifications</li>
      </ul>

      <h3>distribution</h3>
      <ul>
        <li>Distribute original PrismSpace</li>
        <li>Distribute modified versions</li>
        <li>Include in larger works</li>
        <li>Must include license and notices</li>
      </ul>

      <h2>patent grant</h2>
      <p>
        Apache 2.0 includes an express patent license. Contributors grant you a perpetual, 
        worldwide license to any patents they hold that cover their contributions.
      </p>

      <div className="docs-callout">
        <div className="docs-callout-title">📝 Patent Protection</div>
        <p>
          If you sue anyone claiming PrismSpace infringes your patents, your patent license 
          from all contributors terminates automatically.
        </p>
      </div>

      <h2>no trademark license</h2>
      <p>
        The license does NOT grant permission to use trade names, trademarks, or service marks:
      </p>
      <ul>
        <li>"PrismSpace" name and logo are not included</li>
        <li>Remove branding if distributing modified versions</li>
        <li>Reasonable use for attribution is permitted</li>
      </ul>

      <h2>disclaimer of warranty</h2>
      <p>
        PrismSpace is provided "AS IS" without warranties:
      </p>
      <pre><code>Unless required by applicable law, PrismSpace is provided 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express 
or implied, including warranties of MERCHANTABILITY, FITNESS 
FOR A PARTICULAR PURPOSE, or NON-INFRINGEMENT.</code></pre>

      <h2>limitation of liability</h2>
      <p>
        Contributors are not liable for damages arising from use of PrismSpace unless 
        required by law or agreed to in writing.
      </p>

      <h2>third-party components</h2>
      <p>
        PrismSpace includes or references third-party software with separate licenses:
      </p>
      <ul>
        <li><strong>Next.js, React</strong> - MIT License</li>
        <li><strong>PyTorch</strong> - BSD License</li>
        <li><strong>FastAPI</strong> - MIT License</li>
        <li><strong>Tailwind CSS</strong> - MIT License</li>
        <li><strong>Fonts</strong> - Various licenses (see NOTICE file)</li>
      </ul>

      <p>See <Link href="/docs/license/notices">Third-Party Notices</Link> for complete list.</p>

      <div className="docs-callout warning">
        <div className="docs-callout-title">⚠️ Important Note</div>
        <p>
          The repository may contain or reference datasets, model artifacts, and AI services 
          with separate terms. Those materials are NOT relicensed by the Apache 2.0 license.
          See <code>NOTICE</code> and <code>LICENSE_AUDIT.md</code> before redistributing.
        </p>
      </div>

      <h2>contribution policy</h2>
      <p>
        When contributing to PrismSpace, you affirm that:
      </p>
      <ul>
        <li>You have the right to submit your contribution under Apache 2.0</li>
        <li>Your contribution is your original work or properly attributed</li>
        <li>You understand the contribution becomes part of the project</li>
      </ul>

      <p>See <Link href="/docs/license/contributing">Contributing Guide</Link> for details on collaboration policy.</p>

      <h2>getting the full license</h2>
      <p>The complete Apache 2.0 license text is available in:</p>
      <ul>
        <li><code>LICENSE</code> file in the repository root</li>
        <li>Online: <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">apache.org/licenses/LICENSE-2.0</a></li>
      </ul>

      <h2>comparison with other licenses</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Apache 2.0</th>
            <th>MIT</th>
            <th>GPL 3.0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Commercial Use</strong></td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>Patent Grant</strong></td>
            <td>✅ Express</td>
            <td>❌ No</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>Trademark</strong></td>
            <td>❌ Not granted</td>
            <td>❌ Not granted</td>
            <td>❌ Not granted</td>
          </tr>
          <tr>
            <td><strong>Copyleft</strong></td>
            <td>❌ No</td>
            <td>❌ No</td>
            <td>✅ Strong</td>
          </tr>
          <tr>
            <td><strong>Private Use</strong></td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>Relicense</strong></td>
            <td>✅ Allowed</td>
            <td>✅ Allowed</td>
            <td>❌ Must stay GPL</td>
          </tr>
        </tbody>
      </table>

      <h2>questions</h2>
      <p>For licensing questions:</p>
      <ul>
        <li>Review the <code>LICENSE</code> file</li>
        <li>Check <code>NOTICE</code> for third-party components</li>
        <li>Read <code>LICENSE_AUDIT.md</code> for detailed audit</li>
        <li>Consult with your legal team for commercial use</li>
      </ul>

      <div className="docs-nav-footer">
        <Link href="/docs/api/training" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← Training Models</span>
        </Link>
        <Link href="/docs/license/contributing" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Contributing Guide →</span>
        </Link>
      </div>
    </div>
  );
}
