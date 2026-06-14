import React, { useState } from 'react';

// Inline SVGs for categories
const CodeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>);
const ServerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>);
const LayoutIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>);
const CloudIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19A4.5 4.5 0 0 0 18 10h-.5a7.1 7.1 0 0 0-14 0A5 5 0 0 0 5 20h12Z"></path></svg>);
const BrainIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>);

const getDevIcon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Languages",
      icon: <CodeIcon />,
      skills: [
        { name: "Java", icon: getDevIcon('java') },
        { name: "JavaScript", icon: getDevIcon('javascript') },
        { name: "Go", icon: getDevIcon('go') },
        // { name: "SQL", icon: getDevIcon('mysql') }
      ]
    },
    {
      title: "Backend Technologies",
      icon: <ServerIcon />,
      skills: [
        { name: "Spring Boot", icon: getDevIcon('spring') },
        { name: "Spring MVC", icon: getDevIcon('spring') },
        { name: "Spring Security", icon: getDevIcon('spring') },
        { name: "Hyperledger Fabrics (Blockchain)", icon: null },
        { name: "REST APIs", icon: null },
        { name: "Microservices", icon: null },
        { name: "Hibernate", icon: getDevIcon('hibernate') },
        { name: "JPA", icon: null },
        { name: "JWT", icon: null }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <LayoutIcon />,
      skills: [
        { name: "React", icon: getDevIcon('react') },
        { name: "React Native", icon: getDevIcon('react') },
        { name: "HTML5", icon: getDevIcon('html5') },
        { name: "CSS3", icon: getDevIcon('css3') },
        { name: "Tailwind CSS", icon: getDevIcon('tailwindcss') }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <CloudIcon />,
      skills: [
        { name: "PostgreSQL", icon: getDevIcon('postgresql') },
        { name: "MySQL", icon: getDevIcon('mysql') },
        // { name: "AWS", icon: getDevIcon('amazonwebservices') },
        { name: "Docker", icon: getDevIcon('docker') },
        { name: "Linux", icon: getDevIcon('linux') },
        { name: "Nginx", icon: getDevIcon('nginx') }
      ]
    },
    {
      title: "Core Concepts",
      icon: <BrainIcon />,
      skills: [
        { name: "Data Structures & Algorithms", icon: null },
        { name: "OOP", icon: null },
        { name: "DBMS", icon: null },
        { name: "Operating Systems", icon: null },
        { name: "Computer Networks", icon: null }
      ]
    }
  ];

  const currentCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="section fade-in" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.sectionTitle}>
            Skills & <span className="text-italic-serif">Technologies</span>
          </h2>
          <p style={styles.subtitle}>
            A comprehensive toolkit built through real-world projects and industry experience.
          </p>
        </div>

        {/* Category Navigation */}
        <div style={styles.navContainer}>
          <div style={styles.navRow}>
            {skillCategories.map((category, index) => {
              const isActive = activeCategory === index;
              return (
                <div key={index} style={styles.navItemContainer}>
                  <button
                    onClick={() => setActiveCategory(index)}
                    style={{
                      ...styles.navButton,
                      borderColor: isActive ? 'var(--text-primary)' : 'var(--border-color)',
                      boxShadow: isActive ? '0 0 20px rgba(255, 255, 255, 0.1)' : 'none',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
                    }}
                  >
                    {category.icon}
                  </button>
                  {isActive && (
                    <span style={styles.activeLabel}>{category.title}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Display Area */}
        <div style={styles.displayArea}>
          <div style={styles.bgNumber}>
            0{currentCategory.skills.length}
          </div>
          
          <div style={styles.skillsGrid}>
            {currentCategory.skills.map((skill, i) => (
              <div 
                key={`${activeCategory}-${i}`} 
                style={{
                  ...styles.skillCard,
                  animationDelay: `${i * 0.05}s`
                }}
                className="fade-in-up"
              >
                <div style={styles.skillIconContainer}>
                  {skill.icon ? (
                    <img src={skill.icon} alt={skill.name} style={styles.skillIcon} />
                  ) : (
                    <span style={styles.fallbackIcon}>{skill.name.charAt(0)}</span>
                  )}
                </div>
                <span style={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    borderTop: '1px solid var(--border-color)',
    background: 'var(--bg-secondary)', // changed to match dark aesthetic
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px',
  },
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    marginBottom: '16px',
    color: '#eaeaea',
  },
  subtitle: {
    color: '#888',
    fontSize: '1.125rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px',
  },
  navRow: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
    minHeight: '120px', // Space for the active label below
  },
  navItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '80px',
  },
  navButton: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#0a0a0a',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  activeLabel: {
    color: 'var(--text-primary)',
    fontSize: '0.875rem',
    fontWeight: 500,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    animation: 'fadeInUp 0.3s ease forwards',
  },
  displayArea: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0',
    minHeight: '400px',
  },
  bgNumber: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 'clamp(10rem, 25vw, 25rem)',
    fontWeight: 800,
    color: 'rgba(255, 255, 255, 0.02)',
    zIndex: 0,
    pointerEvents: 'none',
    userSelect: 'none',
    lineHeight: 1,
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px',
    maxWidth: '900px',
    zIndex: 1,
  },
  skillCard: {
    background: '#111',
    border: '1px solid #222',
    borderRadius: '24px',
    padding: '24px',
    width: '140px',
    height: '140px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    cursor: 'default',
  },
  skillIconContainer: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: 'brightness(0.9)',
  },
  fallbackIcon: {
    fontSize: '2rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    background: '#222',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillName: {
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
    fontWeight: 500,
    textAlign: 'center',
  }
};

export default Skills;
