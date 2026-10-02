'use client';

import DocsSidebar from '@/components/docs/DocsSidebar';
import { GradientButtonGroup } from '@/components/ui/gradient-button-group';
import '@/app/docs/docs.css';

export default function DocsLayout({ children }) {
  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'transparent',
        width: '100%',
        pointerEvents: 'none'
      }}>
        <GradientButtonGroup />
      </header>
      
      <div className="docs-container">
        <DocsSidebar />
        <main className="docs-content">
          {children}
        </main>
      </div>
    </>
  );
}
