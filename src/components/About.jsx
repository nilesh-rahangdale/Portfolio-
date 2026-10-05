import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal, revealStyle } from '../hooks/useScrollReveal';

/* ─── Animated counter hook ─── */
const useCounter = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

/* ─── Stat card ─── */
const StatCard = ({ value, suffix = '', label, started }) => {
  const count = useCounter(value, 1600, started);
  return (
    <div style={styles.statCard}>
      <span style={styles.statNumber}>
        {count}{suffix}
      </span>
      <span style={styles.statLabel}>{label}</span>
    </div>
  );
};

/* ─── Education item ─── */
const EduItem = ({ degree, school, year, score, last }) => (
  <div style={styles.timelineItem}>
    {/* dot */}
    <div style={styles.timelineDot} />
    {/* line */}
    {!last && <div style={styles.timelineLine} />}
    {/* content */}
    <div style={styles.timelineContent}>
      <div style={styles.eduHeader}>
        <h4 style={styles.eduDegree}>{degree}</h4>
        <span style={styles.eduYear}>{year}</span>
      </div>
      <p style={styles.eduSchool}>{school}</p>
      <span style={styles.eduScore}>{score}</span>
    </div>
  </div>
);

const techTags = [
  'Java', 'Spring Boot', 'React', 'Microservices',
  'Blockchain', 'AWS', 'Docker', 'Node.js',
];

const About = () => {
  const sectionRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const { ref: headRef, visible: headVisible } = useScrollReveal();
  const { ref: leftRef,  visible: leftVisible  } = useScrollReveal({ rootMargin: '0px 0px -60px 0px' });
  const { ref: rightRef, visible: rightVisible  } = useScrollReveal({ rootMargin: '0px 0px -60px 0px' });

  return (
    <section id="about" ref={sectionRef} className="section fade-in" style={styles.section}>
      <div className="container" style={styles.container}>

        {/* ── Header ── */}
        <div ref={headRef} style={styles.header}>
          <p style={{ ...styles.eyebrow, ...revealStyle(headVisible, 0, 'fade', 500) }}>Get to know me</p>
          <h2 style={{ ...styles.sectionTitle, ...revealStyle(headVisible, 80, 'up', 750) }}>
            About <span className="text-italic-serif">Me</span>
          </h2>
        </div>


        {/* ── Main two-col layout ── */}
        <div style={styles.content}>

          {/* Left — bio + tags */}
          <div ref={leftRef} style={{ ...styles.leftCol, ...revealStyle(leftVisible, 0, 'left', 700) }}>
            <div style={styles.bioCard}>
              <div style={styles.accentBar} />
              <div style={styles.bioText}>
                <p style={styles.paragraph}>
                  I'm a <strong style={styles.highlight}>Software Engineer</strong> and{' '}
                  <strong style={styles.highlight}>Innovation Facilitator</strong> who enjoys turning
                  complex ideas into simple, scalable, and meaningful solutions. My journey began at{' '}
                  <strong style={styles.highlight}>DRDO</strong>, where I developed robust software
                  systems and learned to approach engineering with scientific rigor, curiosity, and
                  precision.
                </p>
                <p style={styles.paragraph}>
                  Today, I build across AgriTech, Healthcare, hackathons, and student programs —
                  driven by one simple idea:{' '}
                  <em style={styles.quoteText}>
                    understand the problem, build with purpose, and create something that truly matters.
                  </em>
                </p>
              </div>
            </div>


          </div>

          {/* Right — education timeline */}
          <div ref={rightRef} style={{ ...styles.rightCol, ...revealStyle(rightVisible, 120, 'right', 700) }}>
            <p style={styles.eyebrow} >Education</p>
            <h3 style={styles.subTitle}>Academic Background</h3>

            <div style={styles.timeline}>
              <EduItem
                degree="B.Tech — Computer Science & Engineering"
                school="JD College of Engineering and Management, Nagpur"
                year="2022 – 2026"
                score="CGPA: 9.51"
              />
              <EduItem
                degree="Higher Secondary Certificate (HSC)"
                school="New English High School Junior College, Nagpur"
                year="2020 – 2022"
                score="81.33%"
              />
              <EduItem
                degree="Secondary School Certificate (SSC)"
                school="Vidya Vijay High School, Nagpur"
                year="2019 – 2020"
                score="94.6%"
                last
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ─────────────── Styles ─────────────── */
const styles = {
  section: {
    borderTop: '1px solid var(--border-color)',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1100px',
    position: 'relative',
    zIndex: 1,
  },

  /* header */
  header: {
    textAlign: 'center',
    marginBottom: '56px',
  },
  eyebrow: {
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono, monospace)',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    letterSpacing: '-0.03em',
    marginBottom: 0,
  },

  /* stats */
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '16px',
    marginBottom: '64px',
  },
  statCard: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    padding: '28px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  statNumber: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
    fontWeight: '600',
    color: 'var(--text-primary)',
    lineHeight: 1,
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '-0.03em',
  },
  statLabel: {
    fontSize: '0.78rem',
    color: 'var(--text-secondary)',
    letterSpacing: '0.04em',
    lineHeight: 1.4,
  },

  /* main layout */
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
    gap: '48px',
    alignItems: 'start',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  /* bio card */
  bioCard: {
    display: 'flex',
    gap: '0',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
  },
  accentBar: {
    width: '4px',
    minHeight: '100%',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.05))',
    flexShrink: 0,
  },
  bioText: {
    padding: '28px 28px 28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  paragraph: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.85,
    margin: 0,
  },
  highlight: {
    color: 'var(--text-primary)',
    fontWeight: 500,
  },
  quoteText: {
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: '1.05rem',
  },

  /* tags */
  tagsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  tagsLabel: {
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono, monospace)',
  },
  tagsWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    padding: '6px 14px',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '100px',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    letterSpacing: '0.04em',
    cursor: 'default',
    transition: 'color 0.2s ease, border-color 0.2s ease',
  },

  /* education timeline */
  subTitle: {
    fontSize: '1.6rem',
    color: 'var(--text-primary)',
    fontWeight: 500,
    marginBottom: '28px',
    letterSpacing: '-0.02em',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: '20px',
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: '28px',
    paddingBottom: '32px',
  },
  timelineDot: {
    position: 'absolute',
    left: '-7px',
    top: '6px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: 'var(--bg-primary)',
    border: '2px solid rgba(255,255,255,0.35)',
    zIndex: 1,
  },
  timelineLine: {
    position: 'absolute',
    left: '-1px',
    top: '20px',
    bottom: 0,
    width: '1px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)',
  },
  timelineContent: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    padding: '20px 22px',
    transition: 'transform 0.3s ease',
  },
  eduHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '6px',
    flexWrap: 'wrap',
  },
  eduDegree: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  eduYear: {
    fontSize: '0.78rem',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono, monospace)',
    whiteSpace: 'nowrap',
    letterSpacing: '0.05em',
  },
  eduSchool: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    marginBottom: '10px',
    lineHeight: 1.4,
  },
  eduScore: {
    display: 'inline-block',
    fontSize: '0.78rem',
    color: 'var(--text-primary)',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '100px',
    padding: '3px 10px',
    fontFamily: 'var(--font-mono, monospace)',
    letterSpacing: '0.05em',
  },
};

export default About;
