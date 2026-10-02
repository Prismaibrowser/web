'use client';

import { useEffect, useState } from 'react';
import { SiAnthropic, SiGooglegemini, SiNvidia, SiOpenai } from 'react-icons/si';
import Footer from '@/components/Footer';
import CustomScrollbar from '@/components/CustomScrollbar';
import { GradientButtonGroup } from '@/components/ui/gradient-button-group';
import { SpeechBubble } from '@/components/ui/speech-bubble';
import { CosmicButton } from '@/components/ui/cosmic-button';
import './eclipse-home.css';

const agents = [
  { name: 'NVIDIA', role: 'reasoning', Logo: SiNvidia, models: ['Nemotron Ultra', 'Llama 3.3 70B', 'Mistral Large 2'] },
  { name: 'Anthropic', role: 'synthesis', Logo: SiAnthropic, models: ['Claude Opus 4.1', 'Claude Sonnet 4.5', 'Claude Haiku 3.5'] },
  { name: 'OpenAI', role: 'generation', Logo: SiOpenai, models: ['GPT-5', 'GPT-5 mini', 'o3'] },
  { name: 'Gemini', role: 'vision', Logo: SiGooglegemini, models: ['Gemini 2.5 Pro', 'Gemini 2.5 Flash', 'Gemini 2.0 Flash'] },
  { name: 'Groq', role: 'speed', Logo: GroqLogo, models: ['Llama 4 Maverick', 'Llama 3.3 70B', 'Qwen3 32B'] },
  { name: 'OpenRouter', role: 'routing', Logo: OpenRouterLogo, models: ['Auto', 'Claude Sonnet 4.5', 'GPT-5'] },
];

function GroqLogo(props) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M15.8 3.2a8.6 8.6 0 1 0 4.9 7.8h-7.1v3h3.8a5.7 5.7 0 1 1-2-7.2l2.1-2.1a8.6 8.6 0 0 0-1.7-1.5Z" /><path fill="currentColor" d="M20.7 11h-2.9v5.8h2.9z" /></svg>;
}

function OpenRouterLogo(props) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h9.5a4.5 4.5 0 0 1 0 9H8m0 0 3-3m-3 3 3 3" /><circle cx="5" cy="7" r="2" fill="currentColor" /><circle cx="8" cy="16" r="2" fill="currentColor" /></svg>;
}

const workflow = [
  ['01', 'Capture', 'The browser understands the task before it touches a tab.'],
  ['02', 'Route', 'ML routing assigns the right model to every piece of work.'],
  ['03', 'Ship', 'Agents return one clean result instead of four noisy answers.'],
];

const faqItems = [
  ['What is PrismSpace?', 'PrismSpace is an intelligent browser home that brings multiple AI models into one focused workspace.'],
  ['How does model routing work?', 'Your task sets the route. PrismSpace can direct each request to the model best suited to reason, synthesize, generate, or see.'],
  ['Do I need to switch between tabs?', 'No. PrismSpace keeps the conversation in one surface, so you can move from question to answer without rebuilding context.'],
  ['Can I help build PrismSpace?', 'Yes. The project is open source, and the GitHub repository is the best place to explore the code or contribute.'],
];

export default function PrismHomepage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="eclipse-site">
      <CustomScrollbar />

      <header className="eclipse-nav">
        <GradientButtonGroup />
      </header>

      <main>
        <section className="eclipse-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-sun" aria-hidden="true"><span /></div>
          <div className="hero-ray hero-ray-one" aria-hidden="true" />
          <div className="hero-ray hero-ray-two" aria-hidden="true" />
          <div className="hero-signal" aria-hidden="true"><span /><span /><span /></div>

          <div className="eclipse-hero-content">
            <h1 className="eclipse-display eclipse-hero-display">
              <span className="eclipse-hero-display-lead">your ideas,</span>
              <span className="eclipse-cutout">in parallel.</span>
            </h1>
            <p className="eclipse-hero-copy">
              PrismSpace is the intelligent browser home for people who build, research, and ship with more than one model.
            </p>
            <div className="eclipse-actions" aria-label="PrismSpace actions">
              <a className="eclipse-button eclipse-button-primary" href="https://github.com/NobinSijo7T/prismspace-web" target="_blank" rel="noreferrer">
                <span className="github-button-icons" aria-hidden="true">
                  <svg className="github-mark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
                  </svg>
                  <span className="eclipse-button-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 14.18 9.82 21.5 12l-7.32 2.18L12 21.5l-2.18-7.32L2.5 12l7.32-2.18L12 2.5Z" /></svg>
                  </span>
                </span>
                STAR ON GITHUB
              </a>
              <CosmicButton
                className="eclipse-cosmic-cta"
                href="https://prismbrowser.tech"
                target="_blank"
                rel="noreferrer"
                aria-label="Open PrismSpace"
              >
                OPEN PRISMSPACE <span aria-hidden="true">↗</span>
              </CosmicButton>
            </div>
          </div>

          <div className="hero-footer-note"><span>PRISMSPACE / 2026</span><span>ONE SURFACE / EVERY MIND</span></div>

        </section>

        <div className="eclipse-marquee" aria-label="PrismSpace capabilities">
          <div className="eclipse-marquee-track">
            <div className="eclipse-marquee-run">
              <span>ORCHESTRATE INTELLIGENCE</span><b>—</b><span>ROUTE EVERY REQUEST</span><b>—</b><span>SHIP FASTER</span>
            </div>
            <div className="eclipse-marquee-run" aria-hidden="true">
              <span>ORCHESTRATE INTELLIGENCE</span><b>—</b><span>ROUTE EVERY REQUEST</span><b>—</b><span>SHIP FASTER</span>
            </div>
          </div>
        </div>

        <section className="eclipse-paper eclipse-intro">
          <div className="eclipse-section-label">02 / WHY PRISMSPACE</div>
          <div className="eclipse-intro-grid">
            <h2 className="eclipse-heading">One surface.<br /><i>Every</i> mind.</h2>
            <div className="eclipse-intro-note">
              <p>Stop switching tabs to ask the same question four different ways. PrismSpace turns the browser into a conductor: it knows which model to call, when to call it, and how to bring the answer back.</p>
              <a className="eclipse-text-link" href="#workflow">SEE THE SYSTEM <span>↗</span></a>
            </div>
          </div>
        </section>

        <section id="workflow" className="eclipse-paper eclipse-workflow">
          <div className="eclipse-section-label">03 / THE FLOW</div>
          <div className="workflow-grid">
            {workflow.map(([number, title, copy]) => (
              <article className="workflow-card" key={number}>
                <div className="workflow-number">{number}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="workflow-arrow">↘</span>
              </article>
            ))}
          </div>
        </section>

        <section id="network" className="eclipse-network">
          <div className="eclipse-section-label eclipse-label-light">04 / THE NETWORK</div>
          <div className="network-heading-row">
            <h2 className="eclipse-heading eclipse-heading-light">Six minds.<br /><i>One</i> answer.</h2>
            <p>PrismSpace is model-agnostic by design. It is a <strong>BYOK (Bring Your Own Key)</strong> way to work with the models you choose. Your task sets the route, not a marketing contract.</p>
          </div>
          <div className="agent-grid">
            {agents.map((agent, index) => (
              <article className={`agent-card ${index === 1 ? 'agent-card-active' : ''}`} key={agent.name} tabIndex="0" aria-label={`${agent.name} models`}>
                <span className="agent-mark"><agent.Logo /></span>
                <div className="agent-copy"><h3>{agent.name}</h3><p>{agent.role}</p></div>
                <div className="agent-models">
                  <span className="agent-models-label">AVAILABLE MODELS</span>
                  {agent.models.map((model) => <span className="agent-model" key={model}>{model}<b>↗</b></span>)}
                </div>
                <span className="agent-status">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="eclipse-paper eclipse-faq">
          <div className="eclipse-section-label">FAQ / HOW IT WORKS</div>
          <div className="faq-heading-row">
            <h2 className="eclipse-heading">Questions<br /><i>meet</i> clarity.</h2>
            <p>Ask the thing you are wondering. PrismSpace answers without making you hunt through another tab.</p>
          </div>

          <div className="faq-conversation">
            <svg className="faq-connector-network" viewBox="0 0 1000 280" preserveAspectRatio="none" aria-hidden="true">
              <path className={`faq-connector-line faq-connector-blue ${activeFaq === 0 ? 'faq-connector-active' : ''}`} d="M330 34 C430 34 470 102 565 140 L690 140" />
              <path className={`faq-connector-line faq-connector-cyan ${activeFaq === 1 ? 'faq-connector-active' : ''}`} d="M390 100 C460 100 490 120 565 140 L690 140" />
              <path className={`faq-connector-line faq-connector-white ${activeFaq === 2 ? 'faq-connector-active' : ''}`} d="M390 166 C470 166 500 150 565 140 L690 140" />
              <path className={`faq-connector-line faq-connector-pink ${activeFaq === 3 ? 'faq-connector-active' : ''}`} d="M360 232 C440 232 490 170 565 140 L690 140" />
            </svg>
            <div className="faq-questions" aria-label="Frequently asked questions">
              {faqItems.map(([question], index) => (
                <SpeechBubble
                  key={question}
                  as="button"
                  type="button"
                  className={`faq-question ${index === activeFaq ? 'faq-question-active' : ''}`}
                  showCursor={index === activeFaq}
                  aria-pressed={index === activeFaq}
                  onClick={() => setActiveFaq(index)}
                >
                  {question}
                </SpeechBubble>
              ))}
            </div>

            <div className="faq-answer-column" aria-live="polite">
              <div className="faq-answer-line" aria-hidden="true" />
              <div className="faq-answer" key={faqItems[activeFaq][0]}>
                <span className="faq-answer-label">PRISMSPACE ANSWERS</span>
                <p>{faqItems[activeFaq][1]}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="eclipse-paper eclipse-cta">
          <p className="eclipse-eyebrow">THE NEXT TAB IS WAITING</p>
          <h2 className="eclipse-display eclipse-display-cta"><span className="eclipse-cutout">MAKE SPACE</span><em>FOR BETTER</em><span className="eclipse-cutout">QUESTIONS</span></h2>
          <a className="eclipse-button eclipse-button-primary" href="/contribute">JOIN THE BUILD <span>↗</span></a>
        </section>
      </main>

      <Footer />

      {showScrollTop && <button className="eclipse-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">↑</button>}
    </div>
  );
}
