'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const docSections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Prerequisites', href: '/docs/getting-started/prerequisites' },
    ]
  },
  {
    title: 'Architecture',
    items: [
      { title: 'System Overview', href: '/docs/architecture/overview' },
      { title: 'ML Models & Alignment', href: '/docs/architecture/ml-models' },
      { title: 'Datasets & Benchmarks', href: '/docs/architecture/datasets' },
      { title: 'Directory Structure', href: '/docs/architecture/directory' },
    ]
  },
  {
    title: 'Features & Tools',
    items: [
      { title: 'Complete Features', href: '/docs/features/overview' },
      { title: 'Developer Tools', href: '/docs/features/dev-tools' },
      { title: 'UI Components', href: '/docs/features/dev-tools' },
      { title: 'Agent OS Tooling', href: '/docs/architecture/overview' },
    ]
  },
  {
    title: 'Usage Guide',
    items: [
      { title: 'Settings & Customization', href: '/docs/usage-guide/settings' },
      { title: 'Developer Tools', href: '/docs/features/dev-tools' },
      { title: 'Keyboard Shortcuts', href: '/docs/usage-guide/settings' },
      { title: 'Troubleshooting', href: '/docs/usage-guide/troubleshooting' },
    ]
  },
  {
    title: 'API & Development',
    items: [
      { title: 'Training Models', href: '/docs/api/training' },
      { title: 'Model Testing', href: '/docs/architecture/ml-models' },
      { title: 'Evaluation', href: '/docs/architecture/ml-models' },
      { title: 'Deployment', href: '/docs/architecture/overview' },
    ]
  },
  {
    title: 'License & Contributing',
    items: [
      { title: 'Apache 2.0 License', href: '/docs/license/apache' },
      { title: 'Contributing Guide', href: '/docs/license/contributing' },
      { title: 'Third-Party Notices', href: '/docs/license/apache' },
    ]
  }
];

export default function DocsSidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState(
    docSections.map(() => true) // All sections expanded by default
  );

  const toggleSection = (index) => {
    setExpandedSections(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <aside className="docs-sidebar">
      <div className="docs-sidebar-header">
        <Link href="/docs" className="docs-sidebar-logo">
          <span className="docs-icon" aria-hidden="true" />
          <span className="docs-title">Documentation</span>
        </Link>
        <Link href="/" className="docs-home-link">
          <span aria-hidden="true">←</span>
          Back to homepage
        </Link>
      </div>

      <nav className="docs-nav">
        {docSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="docs-section">
            <button
              className="docs-section-title"
              onClick={() => toggleSection(sectionIndex)}
              aria-expanded={expandedSections[sectionIndex]}
            >
              <span className="section-title-text">{section.title}</span>
              <span className={`section-toggle ${expandedSections[sectionIndex] ? 'expanded' : ''}`}>
                ›
              </span>
            </button>

            {expandedSections[sectionIndex] && (
              <ul className="docs-section-items">
                {section.items.map((item, itemIndex) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className={`docs-link ${isActive ? 'active' : ''}`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>

      <div className="docs-sidebar-footer">
        <div className="status-indicator">
          <span className="status-dot-pulse"></span>
          <span className="status-text">v1.0.0</span>
        </div>
      </div>
    </aside>
  );
}
