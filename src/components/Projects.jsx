import React, { useState } from 'react';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      id: "01",
      title: "Internship Management & Digital Certificate System",
      subtitle: "INTERN ONBOARDING & TRACKING",
      techShort: ["REACT", "SPRING BOOT", "POSTGRESQL", "Hyperledger Fabric"],
      description: "Developed a full-stack system for intern onboarding, tracking, and automated certificate generation.",
      features: [
        "Reduced certificate generation time from ~30 minutes to <2 seconds",
        "Integrated private blockchain (Hyperledger Fabric) for tamper-proof storage",
        "Implemented PKI-based digital signatures (RSA-2048, SHA-256) with X.509 validation"
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL", "Hyperledger Fabric"],
      repoUrl: "https://github.com/nilesh-rahangdale/Intern-Management-System",
      imgUrl: "/intern.png",
      featured: true
    },
    {
      id: "02",
      title: "Swasthya Sarthi",
      subtitle: "PHARMACEUTICAL E-COMMERCE PLATFORM",
      techShort: ["REACT", "EXPRESS.JS", "MONGODB", "JWT"],
      description: "Collaboratively designed and developed a pharmacy e-commerce platform with location-based medicine search, prescription handling, real-time order tracking, and secure payment integration.",
      features: [
        "Role-based access control (RBAC) for customers, pharmacies, volunteers, and admins",
        "Responsive frontend using React with protected routes",
        "API integration and secure payment handling"
      ],
      technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB", "JWT"],
      repoUrl: "https://github.com/nilesh-rahangdale/Swasthya-Sarathi",
      imgUrl: "/swasthya_sarthi.png",
      featured: true
    },
    {
      id: "03",
      title: "Banking Management System",
      subtitle: "SECURE BANKING APPLICATION",
      techShort: ["JAVA", "SPRING BOOT", "HIBERNATE", "PostgreSQL"],
      description: "Developed a secure banking application to manage core banking operations with a focus on authentication, transaction handling, and data security.",
      features: [
        "Secure user authentication and authorization using Spring Security and JWT",
        "REST APIs for managing customer accounts and banking operations",
        "Database interactions using Hibernate/JPA with PostgreSQL",
        "Modular backend architecture for scalable transactions"
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "Spring Security", "JWT", "Hibernate/JPA", "PostgreSQL"],
      repoUrl: "https://github.com/nilesh-rahangdale/Niyora-Bank",
      imgUrl: "/niyora_bank.png",
      featured: false
    },
    {
      id: "04",
      title: "Microservices-Based Quiz Application",
      subtitle: "DISTRIBUTED QUIZ PLATFORM",
      techShort: ["SPRING BOOT", "EUREKA", "OPENFEIGN", "GATEWAY"],
      description: "Developed a scalable quiz platform using a microservices architecture with independent services for quiz management and question handling. Designed RESTful APIs for seamless communication and scalable backend structure.",
      features: [
        "Separate Quiz Service and Question Service for independent scalability",
        "Eureka Service Discovery for dynamic registration",
        "OpenFeign Client for declarative REST communication",
        "API Gateway as a single entry point"
      ],
      technologies: ["Spring Boot", "Microservices", "Eureka", "OpenFeign", "API Gateway", "REST APIs", "JWT"],
      repoUrl: "https://github.com/nilesh-rahangdale",
      // imgUrl: "N/A",
      featured: false

    }
  ];

  const visibleProjects = showAll ? projectsData : projectsData.filter(p => p.featured);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="section fade-in" style={styles.section}>
      <div className="container" style={styles.container}>

        <div style={styles.header}>
          <h2 style={styles.sectionTitle}>
            Featured<br />
            <span className="text-italic-serif" style={styles.titleSerif}>Projects</span>
          </h2>
          <p style={styles.headerDesc}>
            Showcasing projects that combine scalable architecture, clean engineering, and real-world problem solving.
          </p>
        </div>

        <div style={styles.projectsList}>
          {visibleProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div key={project.id} style={styles.projectWrapper}>
                {/* Accordion Header */}
                <div
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0"
                  style={{ ...styles.projectRow, ...(isExpanded ? styles.projectRowExpanded : {}) }}
                  onClick={() => toggleExpand(project.id)}
                >
                  <div style={styles.rowLeft}>
                    <span style={styles.projectId}>{project.id}</span>
                    <h3 style={{ ...styles.projectTitleRow, ...(isExpanded ? styles.projectTitleRowExpanded : {}) }}>{project.title}</h3>
                  </div>

                  <div style={styles.rowRight}>
                    <div style={styles.techTagsRow}>
                      {project.techShort.map((tech, i) => (
                        <span key={i} style={styles.techTag}>→ {tech}</span>
                      ))}
                    </div>
                    <button style={styles.toggleBtn}>
                      {isExpanded ? '×' : '+'}
                    </button>
                  </div>
                </div>

                {/* Accordion Content */}
                <div style={{
                  ...styles.projectContent,
                  maxHeight: isExpanded ? '1000px' : '0',
                  opacity: isExpanded ? 1 : 0,
                  padding: isExpanded ? '40px 0 60px' : '0',
                  pointerEvents: isExpanded ? 'auto' : 'none',
                }}>
                  <div style={styles.contentLayout} className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Left Info */}
                    <div style={styles.infoCol}>
                      <h4 style={styles.subTitle}>{project.subtitle}</h4>
                      <p style={styles.description}>{project.description}</p>

                      <div style={styles.featuresSection}>
                        <h5 style={styles.listHeading}>KEY FEATURES:</h5>
                        <ul style={styles.featureList}>
                          {project.features.map((feature, i) => (
                            <li key={i} style={styles.featureItem}>
                              <span style={styles.dot}>.</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={styles.technologiesSection}>
                        <h5 style={styles.listHeading}>TECHNOLOGIES USED:</h5>
                        <div style={styles.techPills}>
                          {project.technologies.map((tech, i) => (
                            <span key={i} style={styles.techPill}>{tech}</span>
                          ))}
                        </div>
                      </div>

                      <a href={project.repoUrl} target="_blank" rel="noreferrer" style={styles.repoBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        View Repository
                      </a>
                    </div>

                    {/* Right Image */}
                    <div style={styles.imageCol}>
                      <div style={styles.imageContainer}>
                        {project.imgUrl ? (
                          <img src={project.imgUrl} alt={`${project.title} preview`} style={styles.projectImage} />
                        ) : (
                          <span style={styles.placeholderText}>{project.title} Preview</span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div style={styles.exploreContainer}>
          <button style={styles.exploreBtn} onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Explore All Projects'}
          </button>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    background: '#050505',
    padding: '120px 0',
    borderTop: '1px solid var(--border-color)',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 5%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '100px',
    flexWrap: 'wrap',
    gap: '40px',
  },
  sectionTitle: {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    lineHeight: 1.1,
    color: '#eaeaea',
    margin: 0,
    fontWeight: 500,
  },
  titleSerif: {
    color: '#888',
  },
  headerDesc: {
    maxWidth: '500px',
    color: '#888',
    fontSize: '1rem',
    lineHeight: 1.6,
    margin: 0,
    paddingTop: '12px',
  },
  projectsList: {
    display: 'flex',
    flexDirection: 'column',
  },
  projectWrapper: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  projectRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  projectRowExpanded: {
    paddingBottom: '20px',
  },
  rowLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  },
  projectId: {
    fontFamily: 'var(--font-mono, monospace)',
    fontSize: '1.5rem',
    color: '#555',
  },
  projectTitleRow: {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    color: '#888',
    margin: 0,
    fontWeight: 400,
    transition: 'color 0.3s ease',
  },
  projectTitleRowExpanded: {
    color: '#eaeaea',
  },
  rowRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
  },
  techTagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    maxWidth: '400px',
  },
  techTag: {
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono, monospace)',
    color: '#888',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  toggleBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'transparent',
    color: '#fff',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    paddingBottom: '4px',
    transition: 'background 0.3s ease, border 0.3s ease',
  },
  projectContent: {
    overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    borderBottom: '1px solid transparent',
  },
  contentLayout: {
    display: 'grid',
    gap: '60px',
    alignItems: 'start',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  subTitle: {
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
    color: '#666',
    margin: 0,
    fontFamily: 'var(--font-mono, monospace)',
  },
  description: {
    fontSize: '1.125rem',
    lineHeight: 1.6,
    color: '#eaeaea',
    margin: 0,
  },
  featuresSection: {
    marginTop: '16px',
  },
  listHeading: {
    fontSize: '0.875rem',
    letterSpacing: '0.1em',
    color: '#eaeaea',
    margin: '0 0 16px 0',
  },
  featureList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    fontSize: '0.9375rem',
    color: '#aaa',
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  dot: {
    color: '#fff',
    fontSize: '1.2rem',
    lineHeight: 0.8,
  },
  technologiesSection: {
    marginTop: '16px',
  },
  techPills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  techPill: {
    padding: '8px 20px',
    borderRadius: '100px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.03)',
    color: '#aaa',
    fontSize: '0.875rem',
  },
  repoBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 24px',
    borderRadius: '100px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'transparent',
    color: '#fff',
    fontSize: '0.9375rem',
    fontWeight: 500,
    marginTop: '16px',
    width: 'fit-content',
    textDecoration: 'none',
    transition: 'background 0.3s ease',
  },
  imageCol: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: '16/9',
    background: '#111',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.05)',
    overflow: 'hidden',
    position: 'relative',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  placeholderText: {
    color: '#444',
    fontSize: '1.2rem',
    fontFamily: 'var(--font-mono, monospace)',
    zIndex: 1,
  },
  exploreContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px',
  },
  exploreBtn: {
    padding: '16px 40px',
    background: '#eaeaea',
    color: '#050505',
    borderRadius: '100px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  }
};

export default Projects;
