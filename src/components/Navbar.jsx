import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" style={styles.nav}>
      <div className="container" style={styles.container}>
        <div className="hidden md:flex" style={styles.links}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#experience" style={styles.link}>Experience</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#skills" style={styles.link}>Skills</a>
          <a href="#achievements" style={styles.link}>Achievements</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 z-50 absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#050505]/95 backdrop-blur-sm z-40 flex flex-col items-center justify-start pt-32 pb-16 gap-8 md:hidden overflow-y-auto min-h-screen">
          <a href="#about" style={{...styles.link, fontSize: '1.5rem'}} onClick={() => setIsOpen(false)}>About</a>
          <a href="#experience" style={{...styles.link, fontSize: '1.5rem'}} onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" style={{...styles.link, fontSize: '1.5rem'}} onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" style={{...styles.link, fontSize: '1.5rem'}} onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#achievements" style={{...styles.link, fontSize: '1.5rem'}} onClick={() => setIsOpen(false)}>Achievements</a>
          <a href="#contact" style={{...styles.link, fontSize: '1.5rem'}} onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
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
    position: 'relative',
    minHeight: '44px',
  },
  links: {
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
