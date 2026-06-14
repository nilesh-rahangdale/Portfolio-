import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section fade-in" style={styles.section}>
      <div className="container" style={styles.container}>
        <h2 style={styles.sectionTitle}>
          My <span className="text-italic-serif">Journey</span>
        </h2>

        <div style={styles.timeline}>
          {/* Experience Item 1*/}
          <div style={styles.timelineItem}>
            <div style={styles.timelineMeta}>
              <span style={styles.timelineNumber}>01</span>
              <span style={styles.timelineLine}></span>
              <span style={styles.timelineDate}>JAN 2026 - JUN 2026</span>
            </div>

            <div style={styles.timelineContent}>
              <h3 style={styles.jobTitle}>Software Development Intern</h3>
              <p style={styles.companyName}>Scientific Analysis Group (SAG), DRDO, Delhi</p>

              <ul style={styles.jobDescription}>
                <li style={styles.bulletPoint}>
                  <span style={styles.bulletIcon}>++</span>
                  <span>Developed an Internship and Digital Certificate Management System for the HR department using Java, Spring Boot, REST APIs, PostgreSQL, Hibernate/JPA, Spring Security and React to automate intern onboarding, tracking, and certificate generation workflows.</span>
                </li>
                <li style={styles.bulletPoint}>
                  <span style={styles.bulletIcon}>++</span>
                  <span>Integrated Hyperledger Fabric and QR-based verification mechanisms to provide tamper-proof certificate validation, reducing manual verification effort by approximately 90%.</span>
                </li>
                <li style={styles.bulletPoint}>
                  <span style={styles.bulletIcon}>++</span>
                  <span>Containerized application services using Docker and worked in a Linux-based environment for development, testing, and deployment activities.</span>
                </li>
                <li style={styles.bulletPoint}>
                  <span style={styles.bulletIcon}>++</span>
                  <span>Configured Nginx as a reverse proxy for routing requests to backend services and improving application accessibility.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2*/}
          <div style={styles.timelineItem}>
            <div style={styles.timelineMeta}>
              <span style={styles.timelineNumber}>02</span>
              <span style={styles.timelineLine}></span>
              <span style={styles.timelineDate}>JAN 2024 - JUN 2025</span>
            </div>

            <div style={styles.timelineContent}>
              <h3 style={styles.jobTitle}>Technical Committee Head</h3>
              <p style={styles.companyName}>JD College of Engineering & Management, Nagpur</p>

              <ul style={styles.jobDescription}>
                <li style={styles.bulletPoint}>
                  <span style={styles.bulletIcon}>++</span>
                  <span>I led the college’s tech team, organizing exciting events and projects that brought students together to innovate and learn.  </span>
                </li>
                <li style={styles.bulletPoint}>
                  <span style={styles.bulletIcon}>++</span>
                  <span>My role was to plan, coordinate, and make sure everything ran smoothly, all while encouraging everyone to think creatively and grow their technical skills.</span>
                </li>
                <li style={styles.bulletPoint}>
                  <span style={styles.bulletIcon}>++</span>
                  <span>It was about building a smart, collaborative tech community!</span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    borderTop: '1px solid var(--border-color)',
    background: 'var(--bg-secondary)',
  },
  container: {
    maxWidth: '1000px',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '80px',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
  },
  timelineItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  timelineMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-serif)',
    fontSize: '0.875rem',
    letterSpacing: '0.05em',
  },
  timelineNumber: {
    color: 'var(--accent-color)',
  },
  timelineLine: {
    height: '1px',
    width: '40px',
    background: 'var(--border-color)',
  },
  timelineDate: {
    textTransform: 'uppercase',
  },
  timelineContent: {
    paddingLeft: '0',
    '@media (min-width: 768px)': {
      paddingLeft: '76px', 
    }
  },
  jobTitle: {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    color: 'var(--text-primary)',
    marginBottom: '8px',
  },
  companyName: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    marginBottom: '32px',
  },
  jobDescription: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  bulletPoint: {
    display: 'flex',
    gap: '16px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    fontSize: '1rem',
    alignItems: 'flex-start',
  },
  bulletIcon: {
    color: 'var(--accent-color)',
    fontFamily: 'var(--font-serif)',
    fontSize: '0.875rem',
    marginTop: '4px',
  }
};

export default Experience;
