import React from 'react';
import { useScrollReveal, revealStyle } from '../hooks/useScrollReveal';

/* ── Animated timeline item ── */
const TimelineItem = ({ number, date, title, company, bullets, index }) => {
  const { ref, visible } = useScrollReveal({ rootMargin: '0px 0px -60px 0px' });
  return (
    <div
      ref={ref}
      style={{
        ...styles.timelineItem,
        ...revealStyle(visible, index * 150, 'up', 700),
      }}
    >
      <div style={styles.timelineMeta}>
        <span style={styles.timelineNumber}>{number}</span>
        <span style={styles.timelineLine}></span>
        <span style={styles.timelineDate}>{date}</span>
      </div>

      <div style={styles.timelineContent} className="pl-0 md:pl-[76px]">
        <h3 style={styles.jobTitle}>{title}</h3>
        <p style={styles.companyName}>{company}</p>

        <ul style={styles.jobDescription}>
          {bullets.map((b, i) => (
            <li
              key={i}
              style={{
                ...styles.bulletPoint,
                ...revealStyle(visible, index * 150 + 80 + i * 60, 'up', 500),
              }}
            >
              <span style={styles.bulletIcon}>++</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref: headRef, visible: headVisible } = useScrollReveal();

  const items = [
    {
      number: '01',
      date: 'JAN 2026 - JUN 2026',
      title: 'Software Development Intern',
      company: 'Scientific Analysis Group (SAG), DRDO, Delhi',
      bullets: [
        'Developed an Internship and Digital Certificate Management System for the HR department using Java, Spring Boot, REST APIs, PostgreSQL, Hibernate/JPA, Spring Security and React to automate intern onboarding, tracking, and certificate generation workflows.',
        'Integrated Hyperledger Fabric and QR-based verification mechanisms to provide tamper-proof certificate validation, reducing manual verification effort by approximately 90%.',
        'Containerized application services using Docker and worked in a Linux-based environment for development, testing, and deployment activities.',
        'Configured Nginx as a reverse proxy for routing requests to backend services and improving application accessibility.',
      ],
    },
    {
      number: '02',
      date: 'JAN 2024 - JUN 2025',
      title: 'Technical Committee Head',
      company: 'JD College of Engineering & Management, Nagpur',
      bullets: [
        'I led the college\'s tech team, organizing exciting events and projects that brought students together to innovate and learn.',
        'My role was to plan, coordinate, and make sure everything ran smoothly, all while encouraging everyone to think creatively and grow their technical skills.',
        'It was about building a smart, collaborative tech community!',
      ],
    },
  ];

  return (
    <section id="experience" className="section fade-in" style={styles.section}>
      <div className="container" style={styles.container}>

        <h2
          ref={headRef}
          style={{ ...styles.sectionTitle, ...revealStyle(headVisible, 0, 'up', 700) }}
        >
          My <span className="text-italic-serif">Journey</span>
        </h2>

        <div style={styles.timeline}>
          {items.map((item, i) => (
            <TimelineItem key={item.number} {...item} index={i} />
          ))}
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
  timelineContent: {},
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
    flexShrink: 0,
  },
};

export default Experience;
