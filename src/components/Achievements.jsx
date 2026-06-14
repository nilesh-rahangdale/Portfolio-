import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Global Rank 479",
      subtitle: "TCS CodeVita Season 12",
      description: "Secured Global Rank 479 among 8,00,000+ participants worldwide in one of the largest competitive programming competitions.",
      date: "2024"
    },
    {
      title: "Campus Topper (3×)",
      subtitle: "JD College of Engineering & Management, Nagpur",
      description: "Achieved the position of Campus Topper for three consecutive academic years (1st, 2nd, and 3rd Year) by maintaining outstanding academic performance throughout the Computer Engineering program.",
      date: "2022-2025"
    },
    {
      title: "Programming in Java",
      subtitle: "IIT Kharagpur",
      description: "Completed comprehensive certification covering core Java concepts, object-oriented programming, and advanced data structures.",
      date: "2023"
    },
    {
      title: "Cloud Computing",
      subtitle: "IIT Kharagpur",
      description: "Acquired fundamental and advanced knowledge of cloud architectures, deployment models, and AWS infrastructure.",
      date: "2024"
    }
  ];

  return (
    <section id="achievements" className="section fade-in" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.sectionTitle}>
            Achievements & <span className="text-italic-serif">Certifications</span>
          </h2>
          <p style={styles.subtitle}>© 2022 - 2026</p>
        </div>

        <div style={styles.grid}>
          {achievements.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <span style={styles.cardDate}>{item.date}</span>
              </div>
              <p style={styles.cardSubtitle}>{item.subtitle}</p>
              <p style={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    borderTop: '1px solid var(--border-color)',
  },
  container: {
    maxWidth: '1000px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    marginBottom: '16px',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono, monospace)',
    letterSpacing: '0.1em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  },
  card: {
    background: 'var(--bg-tertiary)',
    padding: '40px',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    transition: 'transform 0.3s ease',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
  },
  cardDate: {
    fontSize: '0.875rem',
    color: 'var(--accent-color)',
    fontFamily: 'var(--font-mono, monospace)',
  },
  cardSubtitle: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
  },
  cardDescription: {
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    fontSize: '0.9375rem',
  }
};

export default Achievements;
