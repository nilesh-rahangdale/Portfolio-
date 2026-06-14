import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" style={styles.nav}>
      <div className="container" style={styles.container}>
        <div style={styles.links}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#experience" style={styles.link}>Experience</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#skills" style={styles.link}>Skills</a>
          <a href="#achievements" style={styles.link}>Achievements</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '20px 0',
    background: 'rgba(5, 5, 5, 0.8)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border-color)',
    zIndex: 100,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    gap: '32px',
    background: 'rgba(255, 255, 255, 0.03)',
    padding: '12px 32px',
    borderRadius: '100px',
    border: '1px solid var(--border-color)',
  },
  link: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
    color: 'var(--text-secondary)',
  }
};

export default Navbar;
