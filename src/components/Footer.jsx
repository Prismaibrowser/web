'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaReddit, FaShieldAlt } from 'react-icons/fa';
import { FaArrowRightLong, FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const socials = [
  { label: 'X', href: 'https://x.com/prismaibrowser', icon: FaXTwitter },
  { label: 'Reddit', href: 'https://www.reddit.com/user/Prism-Browser/', icon: FaReddit },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prism-browser-702b08385/', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/Prismaibrowser', icon: FaGithub },
];

const footerGroups = [
  {
    title: 'About us',
    links: [
      { label: 'About PrismSpace', href: '/about', description: 'What the project is and where it comes from' },
      { label: 'Privacy Policy', href: '/privacy', description: 'Your data protection matters', icon: FaShieldAlt },
      { label: 'GitHub', href: 'https://github.com/Prismaibrowser', description: 'Open source repository', icon: FaGithub },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Report a Bug', href: 'https://github.com/Prismaibrowser/prismspace-web/issues', description: 'Help us improve the system', icon: FaGithub },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs', description: 'Guides and API docs' },
      { label: 'Changelog', href: '/docs', description: 'Latest updates and releases' },
      { label: 'GitHub README', href: 'https://github.com/Prismaibrowser', description: 'Open source info' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="floating-footer">
      <div className="floating-footer__inner">
        <div className="floating-footer__brand">
          <span
            className="floating-footer__logo"
            role="img"
            aria-label="PrismSpace"
          />
          <p>AI DEV ENVIRONMENT WITH THE ML TO BACK IT UP.</p>
        </div>

        <div className="floating-footer__rule" />

        <div className="floating-footer__body">
          <div className="floating-footer__contact">
            <p className="floating-footer__label">Get in touch</p>
            <a className="floating-footer__email" href="mailto:prismaibrowser@gmail.com">
              <FaArrowRightLong aria-hidden="true" /> prismaibrowser@gmail.com
            </a>
            <p className="floating-footer__label floating-footer__social-label">Follow us</p>
            <div className="floating-footer__socials">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} className="floating-footer__social">
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div className="floating-footer__group" key={group.title}>
              <p className="floating-footer__label">{group.title}</p>
              {group.links.map(({ label, href, description, icon: Icon }) => (
                <a className="floating-footer__link" href={href} key={label}>
                  {Icon && <Icon className="floating-footer__link-icon" aria-hidden="true" />}
                  <span><strong>{label}</strong><small>{description}</small></span>
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="floating-footer__bottom">
          <span>© 2026 PrismSpace.</span>
          <span>Apache 2.0 License.</span>
          <span className="floating-footer__signal">BUILD WITH INTENT <i /></span>
        </div>
      </div>
    </footer>
  );
}
