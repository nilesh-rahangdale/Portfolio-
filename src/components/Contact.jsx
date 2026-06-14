import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="section fade-in" style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>
            Let's <span className="text-italic-serif">Connect</span>
          </h2>
          <p style={styles.subtitle}>
            Open to opportunities, collaborations, and meaningful conversations. Let’s connect.
          </p>
          
          <a href="mailto:nileshrahangdale08@gmail.com" style={styles.emailButton}>
            nileshrahangdale08@gmail.com
            <span style={styles.arrow}>→</span>
          </a>

          <div style={styles.socialLinks}>
            <a href="https://github.com/nilesh-rahangdale" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
            <a href="https://linkedin.com/in/nilesh-rahangdale" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
            <a href="https://leetcode.com/u/nileshrahangdale08/" target="_blank" rel="noopener noreferrer" style={styles.link}>LeetCode</a>
          </div>
        </div>
        
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>© {new Date().getFullYear()} Nilesh Rahangdale. All rights reserved.</p>
          <p style={styles.location}>Nagpur, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    borderTop: '1px solid var(--border-color)',
    background: 'var(--bg-secondary)',
    paddingBottom: '40px',
  },
  container: {
    maxWidth: '1000px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '80px',
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    marginBottom: '24px',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: '1.25rem',
    maxWidth: '500px',
    marginBottom: '48px',
  },
  emailButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 32px',
    background: 'var(--text-primary)',
    color: 'var(--bg-primary)',
    borderRadius: '100px',
    fontSize: '1.125rem',
    fontWeight: 500,
    marginBottom: '64px',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
  },
  arrow: {
    fontSize: '1.25rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    transition: 'color 0.3s ease',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    paddingTop: '32px',
    borderTop: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
  },
  copyright: {
    margin: 0,
  },
  location: {
    margin: 0,
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
  }
};

export default Contact;
