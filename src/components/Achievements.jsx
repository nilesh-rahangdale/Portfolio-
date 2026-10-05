import React, { useRef, useEffect, useState } from 'react';
import { useScrollReveal, revealStyle } from '../hooks/useScrollReveal';

const achievements = [
  {
    id: 1,
    title: "Nagpur Rise Agri Innovation Cohort",
    subtitle: "Presented to Union Minister Shri Nitin Gadkari",
    description:
      "Presented Nagpur Rise, an Agri Innovation initiative tackling 20 real-world agricultural challenges across Vidarbha, to Union Minister Shri Nitin Gadkari. The initiative connects farmers, FPOs, industry experts, and student innovators to build technology-driven solutions for the farm-to-market ecosystem.",
    image: "/nitin_gadkari_presentation_1791213756677.png",
    tag: "Leadership",
  },
  {
    id: 2,
    title: "MEDHA MEDITHON 2026",
    subtitle: "Organizing Committee",
    description:
      "Helped drive the execution of a national healthcare innovation challenge that attracted 709+ teams from 70+ cities across India. The program brought together innovators to tackle 13 real-world healthcare challenges spanning AI, MedTech, computer vision, hospital systems, and clinical workflows.",
    image: "/medha_medithon.png",
    tag: "Organizer",
  },
  {
    id: 3,
    title: "VORTEX Hackathon 2026",
    subtitle: "Hackathon Judge",
    description:
      "Served as a Judge for VORTEX Hackathon 2026, assessing student-built solutions for innovation, technical depth, problem-solving, feasibility, and real-world impact.",
    image: "/Vortex_2026.jpg",
    tag: "Judge",
  },
  {
    id: 4,
    title: "Social Innovation Program",
    subtitle: "Jhulelal College of Engineering & Management",
    description:
      "Facilitated a Social Innovation Program for engineering students, taking students from identifying real-world problems to exploring human-centred solutions through Design Thinking and innovation methodologies.",
    image: "/social_innovation.png",
    tag: "Facilitator",
  },
  {
    id: 5,
    title: "Global Rank 479",
    subtitle: "TCS CodeVita Season 12",
    description:
      "Secured Global Rank 479 among 8,00,000+ participants worldwide in one of the largest competitive programming competitions.",
    image: "/TCS_CodeVita.png",
    tag: "2024",
  },
  {
    id: 6,
    title: "Campus Topper (3×)",
    subtitle: "JD College of Engineering & Management, Nagpur",
    description:
      "Achieved the position of Campus Topper for three consecutive academic years (1st, 2nd, and 3rd Year) by maintaining outstanding academic performance throughout the Computer Engineering program.",
    image: "/CampusTopper.png",
    tag: "2022–2025",
  },
  {
    id: 7,
    title: "Programming in Java",
    subtitle: "IIT Kharagpur",
    description:
      "Completed comprehensive certification covering core Java concepts, object-oriented programming, and advanced data structures.",
    image: "/IIT_kharagpur.png",
    tag: "2023",
  },
  {
    id: 8,
    title: "Cloud Computing",
    subtitle: "IIT Kharagpur",
    description:
      "Acquired fundamental and advanced knowledge of cloud architectures, deployment models, and AWS infrastructure.",
    image: "/IIT_kharagpur.png",
    tag: "2024",
  },
];

const AchievementCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.card,
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(32px)',
        transition: visible
          ? 'opacity 0.6s ease, transform 0.4s ease, box-shadow 0.4s ease'
          : 'opacity 0.6s ease, transform 0.6s ease',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)'
          : '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {/* Image */}
      <div style={styles.imageWrapper}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            ...styles.image,
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease',
            filter: hovered ? 'grayscale(0%) brightness(1.05)' : 'grayscale(100%)',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = '#1a1a1a';
          }}
        />
        {/* Tag */}
        <span style={styles.tag}>{item.tag}</span>

        {/* Gradient overlay */}
        <div
          style={{
            ...styles.imageOverlay,
            opacity: hovered ? 0.5 : 0.7,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>

      {/* Content */}
      <div style={styles.content}>
        <h3 style={styles.cardTitle}>{item.title}</h3>
        <p style={styles.cardSubtitle}>{item.subtitle}</p>
        <p style={styles.cardDescription}>{item.description}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const { ref: headRef, visible: headVisible } = useScrollReveal();

  return (
    <section id="achievements" className="section fade-in" style={styles.section}>
      <div className="container" style={styles.container}>
        {/* Header */}
        <div ref={headRef} style={styles.header}>
          <h2 style={{ ...styles.sectionTitle, ...revealStyle(headVisible, 0, 'up', 750) }}>
            Achievements &amp; <span className="text-italic-serif">Experience</span>
          </h2>
          <p style={{ ...styles.subtitle, ...revealStyle(headVisible, 120, 'fade', 600) }}>© 2022 - 2026</p>
        </div>

        {/* Masonry-like grid */}
        <div style={styles.grid}>
          {achievements.map((item, index) => (
            <AchievementCard key={item.id} item={item} index={index} />
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
    maxWidth: '1200px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '72px',
  },
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono, monospace)',
    letterSpacing: '0.15em',
    fontSize: '0.85rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
    gap: '24px',
    alignItems: 'start',
  },
  card: {
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: '4 / 3',
    overflow: 'hidden',
    background: '#111',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)',
    pointerEvents: 'none',
  },
  tag: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: 'var(--text-primary)',
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '4px 10px',
    borderRadius: '100px',
    fontFamily: 'var(--font-mono, monospace)',
    zIndex: 2,
  },
  content: {
    padding: '20px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    lineHeight: 1.3,
  },
  cardSubtitle: {
    fontSize: '0.875rem',
    color: 'var(--accent-color)',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    marginBottom: '4px',
  },
  cardDescription: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.65,
  },
};

export default Achievements;
