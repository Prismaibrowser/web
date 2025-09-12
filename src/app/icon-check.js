'use client';

import { GoDownload } from 'react-icons/go';

export default function IconCheck() {
  return (
    <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <h1>Icon Check</h1>
      
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h2>GoDownload Icon from react-icons/go</h2>
        <div style={{ fontSize: '48px' }}>
          <GoDownload />
        </div>
      </div>

      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h2>SVG in page.js</h2>
        <div style={{ fontSize: '48px', color: 'currentColor' }}>
          <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.75 9.5a.75.75 0 0 1 .75-.75h2.25v-7a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v7h2.25a.75.75 0 0 1 .53 1.28l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5A.75.75 0 0 1 1.75 9.5zm10-1.5V2H4.25v6H3.06l4.94 4.94L12.94 8h-1.19z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
