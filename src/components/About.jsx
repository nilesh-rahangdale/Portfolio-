import React from 'react';

const About = () => {
  return (
    <section id="about" className="section fade-in" style={styles.section}>
      <div className="container" style={styles.container}>
        <h2 style={styles.sectionTitle}>
          About <span className="text-italic-serif">Me</span>
        </h2>
        
        <div style={styles.content} className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16">
          <div style={styles.textContent}>
            <p style={styles.paragraph}>
              With a proven track record of designing and building scalable, secure, and cutting-edge applications, I bring a unique blend of scientific rigor and software craftsmanship. My journey began at the prestigious Defence Research and Development Organisation (DRDO), where I specialized in developing robust systems for DRDO. 
            </p>
            <p style={styles.paragraph}>
              Today, I leverage my expertise in Java, Spring Boot, React, Microservices, and Blockchain technologies to create impactful solutions that drive efficiency and security in complex environments. Passionate about clean architecture, modern tech stacks, and real-world problem solving, I am committed to delivering software that not only meets technical excellence but also makes a tangible difference.
            </p>
          </div>

          <div style={styles.educationGrid}>
            <h3 style={styles.subTitle}>Education</h3>
            
            <div style={styles.eduItem}>
              <div style={styles.eduHeader}>
                <h4 style={styles.eduDegree}>B.Tech - Computer Science & Engineering</h4>
                <span style={styles.eduYear}>2022 - 2026</span>
              </div>
              <p style={styles.eduSchool}>JD College of Engineering and Management, Nagpur</p>
              <p style={styles.eduScore}>CGPA: 9.51</p>
            </div>

            <div style={styles.eduItem}>
              <div style={styles.eduHeader}>
                <h4 style={styles.eduDegree}>Higher Secondary Certificate (HSC)</h4>
                <span style={styles.eduYear}>2020 - 2022</span>
              </div>
              <p style={styles.eduSchool}>New English High School Junior College, Nagpur</p>
              <p style={styles.eduScore}>Percentage: 81.33%</p>
            </div>
            
            <div style={styles.eduItem}>
              <div style={styles.eduHeader}>
                <h4 style={styles.eduDegree}>Secondary School Certificate (SSC)</h4>
                <span style={styles.eduYear}>2019 - 2020</span>
              </div>
              <p style={styles.eduSchool}>Vidya Vijay High School, Nagpur</p>
              <p style={styles.eduScore}>Percentage: 94.6%</p>
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
  },
  container: {
    maxWidth: '1000px',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '64px',
    textAlign: 'center',
  },
  content: {
    // Moved to tailwind classes
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  paragraph: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.8,
  },
  educationGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  subTitle: {
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
    marginBottom: '8px',
  },
  eduItem: {
    padding: '24px',
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    transition: 'transform 0.3s ease, background 0.3s ease',
  },
  eduHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '8px',
  },
  eduDegree: {
    fontSize: '1.125rem',
    color: 'var(--text-primary)',
    fontWeight: 500,
  },
  eduYear: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    whiteSpace: 'nowrap',
  },
  eduSchool: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    marginBottom: '8px',
  },
  eduScore: {
    fontSize: '0.875rem',
    color: 'var(--accent-color)',
    fontWeight: 500,
  }
};

export default About;
