import React from 'react';
import { useScrollReveal, revealStyle } from '../hooks/useScrollReveal';

/* ─── SVG grid + diagonal lines rendered as a background ─── */
const GridBackground = () => (
  <div style={bg.wrapper} aria-hidden="true">
    {/* Fine dot grid */}
    <svg style={bg.svg} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        {/* 48×48 grid cell */}
        <pattern id="contact-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          {/* horizontal line */}
          <line x1="0" y1="0" x2="48" y2="0" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
          {/* vertical line */}
          <line x1="0" y1="0" x2="0" y2="48" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
        </pattern>

        {/* Radial fade mask — bright centre, transparent edges */}
        <radialGradient id="grid-mask" cx="50%" cy="45%" r="55%">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="70%"  stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <mask id="grid-fade">
          <rect width="100%" height="100%" fill="url(#grid-mask)" />
        </mask>
      </defs>

      {/* Grid layer, masked to fade at edges */}
      <rect width="100%" height="100%" fill="url(#contact-grid)" mask="url(#grid-fade)" />
    </svg>

    {/* Diagonal accent lines */}
    <svg style={{ ...bg.svg, pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="line-fade-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="white" stopOpacity="0" />
          <stop offset="40%"  stopColor="white" stopOpacity="0.07" />
          <stop offset="60%"  stopColor="white" stopOpacity="0.07" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-fade-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="white" stopOpacity="0" />
          <stop offset="35%"  stopColor="white" stopOpacity="0.04" />
          <stop offset="65%"  stopColor="white" stopOpacity="0.04" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Subtle horizontal separator lines */}
      <line x1="0" y1="160" x2="1000" y2="160" stroke="url(#line-fade-1)" strokeWidth="1" />
      <line x1="0" y1="340" x2="1000" y2="340" stroke="url(#line-fade-1)" strokeWidth="1" />
      {/* Soft diagonal cross lines from corners */}
      <line x1="-100" y1="0"   x2="550"  y2="500" stroke="url(#line-fade-2)" strokeWidth="1" />
      <line x1="1100" y1="0"   x2="450"  y2="500" stroke="url(#line-fade-2)" strokeWidth="1" />
    </svg>

    {/* Soft radial glow at centre */}
    <div style={bg.glow} />
  </div>
);

const bg = {
  wrapper: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 0,
  },
  svg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
  },
  glow: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(255,255,255,0.025) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
};

/* ─── Main component ─── */
const Contact = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 });

  return (
    <footer id="contact" className="section fade-in" style={styles.footer}>

      {/* Decorative background */}
      <GridBackground />

      <div className="container" style={styles.container}>

        {/* Corner decorators */}
        <div style={{ ...styles.cornerTL }} aria-hidden="true" />
        <div style={{ ...styles.cornerTR }} aria-hidden="true" />

        <div ref={ref} style={styles.content}>

          {/* Small label above title */}
          <p style={{ ...styles.eyebrow, ...revealStyle(visible, 0, 'fade', 500) }}>
            Get in touch
          </p>

          <h2 style={{ ...styles.title, ...revealStyle(visible, 80, 'up', 750) }}>
            Let's <span className="text-italic-serif">Connect</span>
          </h2>

          <p style={{ ...styles.subtitle, ...revealStyle(visible, 180, 'up', 700) }}>
            Open to opportunities, collaborations, and meaningful conversations. Let's connect.
          </p>

          {/* Thin divider line */}
          <div style={{ ...styles.divider, ...revealStyle(visible, 260, 'scale', 600) }} />

          <a
            href="mailto:nileshrahangdale08@gmail.com"
            style={{ ...styles.emailButton, ...revealStyle(visible, 300, 'up', 700) }}
          >
            nileshrahangdale08@gmail.com
            <span style={styles.arrow}>→</span>
          </a>

          <div
            style={{ ...styles.socialLinks, ...revealStyle(visible, 400, 'fade', 600) }}
            className="flex-col md:flex-row items-center gap-6 md:gap-8"
          >
            <a href="https://github.com/nilesh-rahangdale"       target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
            <span style={styles.linkDot} aria-hidden="true">·</span>
            <a href="https://linkedin.com/in/nilesh-rahangdale"  target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
            <span style={styles.linkDot} aria-hidden="true">·</span>
            <a href="https://leetcode.com/u/nileshrahangdale08/" target="_blank" rel="noopener noreferrer" style={styles.link}>LeetCode</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={styles.bottomBar}
          className="flex-col md:flex-row justify-center md:justify-between text-center md:text-left gap-4 md:gap-4"
        >
          <p style={styles.copyright}>© {new Date().getFullYear()} Nilesh Rahangdale. All rights reserved.</p>
          <p style={styles.location}>Nagpur, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
};

/* ─── Styles ─── */
const styles = {
  footer: {
    borderTop: '1px solid var(--border-color)',
    background: 'var(--bg-secondary)',
    paddingBottom: '40px',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1000px',
    position: 'relative',
    zIndex: 1,
  },

  /* corner bracket decorators */
  cornerTL: {
    position: 'absolute',
    top: '80px',
    left: '24px',
    width: '40px',
    height: '40px',
    borderTop: '1px solid rgba(255,255,255,0.12)',
    borderLeft: '1px solid rgba(255,255,255,0.12)',
    pointerEvents: 'none',
  },
  cornerTR: {
    position: 'absolute',
    top: '80px',
    right: '24px',
    width: '40px',
    height: '40px',
    borderTop: '1px solid rgba(255,255,255,0.12)',
    borderRight: '1px solid rgba(255,255,255,0.12)',
    pointerEvents: 'none',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '20px',
    marginBottom: '80px',
  },

  eyebrow: {
    fontSize: '0.72rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono, monospace)',
    marginBottom: '20px',
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    marginBottom: '20px',
    letterSpacing: '-0.03em',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: '1.125rem',
    maxWidth: '460px',
    lineHeight: 1.7,
    marginBottom: '40px',
  },

  divider: {
    width: '48px',
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)',
    marginBottom: '40px',
  },

  emailButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 32px',
    background: 'var(--text-primary)',
    color: 'var(--bg-primary)',
    borderRadius: '100px',
    fontSize: '1.0625rem',
    fontWeight: 500,
    marginBottom: '48px',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  arrow: {
    fontSize: '1.2rem',
  },

  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    transition: 'color 0.25s ease',
  },
  linkDot: {
    color: 'rgba(255,255,255,0.15)',
    fontSize: '1.2rem',
    userSelect: 'none',
  },

  bottomBar: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '32px',
    borderTop: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
    fontSize: '0.8rem',
    letterSpacing: '0.02em',
    position: 'relative',
    zIndex: 1,
  },
  copyright: { margin: 0 },
  location: {
    margin: 0,
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
  },
};

export default Contact;
