'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GradientButtonGroup } from '@/components/ui/gradient-button-group';
import Footer from '@/components/Footer';
import CustomScrollbar from '@/components/CustomScrollbar';
import './privacy.css';

const sections = [
  ['01', 'What PrismSpace does not collect', 'PrismSpace does not collect, sell, or share your personal data. We do not run third-party analytics or behavioral tracking, and we do not collect IP addresses, browsing history, search queries, or form data for our own use.'],
  ['02', 'PrismDb: local browser storage', 'PrismDb is PrismSpace’s browser-local data layer. It uses IndexedDB, a storage system built into your browser, to keep PrismDb data on the device where you created it. PrismSpace does not receive or store those PrismDb records on its own servers.'],
  ['03', 'Cookies, cache, and settings', 'Your browser may keep cookies, cache files, and interface settings locally to make the product work. You can inspect or clear these items through your browser settings. We do not have access to browser-local data simply because it exists on your device.'],
  ['04', 'External APIs and connected services', 'When you choose to use an external API, provider, model, sync service, or other connected integration, your request is sent to that provider. The provider’s own privacy policy, terms, retention rules, and security practices apply to that exchange. Review the relevant company’s policy before sending sensitive information. PrismSpace is not responsible for the privacy practices of an external company.'],
  ['05', 'Updates and other connections', 'PrismSpace may make external connections for updates, plugins, or services you explicitly use. Those connections are separate from PrismDb local storage. Where a connection is controlled by a third-party company, that company’s policy governs the data it receives.'],
  ['06', 'Your control', 'You control data stored in your browser. Clear site data, IndexedDB databases, cookies, and cache from your browser settings whenever you choose. For questions about this policy, contact us at prismaibrowser@gmail.com.'],
];

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="privacy-page">
      <CustomScrollbar />
      <header className="privacy-header"><GradientButtonGroup /></header>

      <main className="privacy-main">
        <button className="privacy-back" onClick={() => router.push('/')} aria-label="Back to home">← <span>BACK TO HOME</span></button>

        <section className="privacy-hero">
          <div>
            <span className="editorial-badge">LEGAL / TRANSPARENCY</span>
            <h1>privacy,<br /><span>without fog.</span></h1>
          </div>
          <div className="privacy-hero-meta">
            <span>LAST UPDATED</span>
            <strong>02 OCT 2026</strong>
            <p>A plain-language map of what stays in your browser, what leaves it, and who is responsible for each boundary.</p>
          </div>
        </section>

        <section className="privacy-summary">
          <div className="summary-status"><i /> <span>PRISMSPACE POSITION</span></div>
          <h2>Your data has a home address.</h2>
          <p>PrismSpace is designed to keep its own footprint small. PrismDb data is stored locally in your browser through IndexedDB. If you connect an external API, the data you send is handled under that provider’s policy.</p>
          <div className="summary-grid"><div><strong>LOCAL</strong><span>PrismDb → browser IndexedDB</span></div><div><strong>EXTERNAL</strong><span>API provider → its own policy</span></div><div><strong>CONTROL</strong><span>You → browser settings</span></div></div>
        </section>

        <div className="privacy-layout">
          <aside className="privacy-index" aria-label="Privacy policy sections">
            <span className="tech-label">ON THIS PAGE</span>
            {sections.map(([number, title]) => <a href={`#privacy-${number}`} key={number}><b>{number}</b>{title}</a>)}
          </aside>
          <article className="privacy-content">
            <p className="privacy-intro">Welcome to PrismSpace. This policy explains how the PrismSpace application handles information. It describes PrismSpace’s own behavior; it cannot change the policies of services you connect to.</p>
            {sections.map(([number, title, copy]) => (
              <section className="privacy-section" id={`privacy-${number}`} key={number}>
                <div className="privacy-section-number">{number}</div>
                <div><h2>{title}</h2><p>{copy}</p>{number === '02' && <div className="privacy-callout"><strong>PRISMDB / INDEXEDDB</strong><span>Stored on this browser · not PrismSpace’s server</span></div>}{number === '04' && <div className="privacy-callout privacy-callout-warning"><strong>CHECK THE OTHER SIDE</strong><span>Every external company has its own privacy terms. Read them before sharing sensitive data.</span></div>}</div>
              </section>
            ))}
            <div className="privacy-contact"><span className="tech-label">QUESTIONS?</span><h2>Let’s make the boundary clearer.</h2><p>Email <a href="mailto:prismaibrowser@gmail.com">prismaibrowser@gmail.com</a> or visit our <a href="https://github.com/Prismaibrowser" target="_blank" rel="noreferrer">GitHub organization →</a></p></div>
          </article>
        </div>

        <div className="privacy-footer-link"><Link href="/docs">← Back to documentation</Link></div>
      </main>
      <Footer />
    </div>
  );
}
