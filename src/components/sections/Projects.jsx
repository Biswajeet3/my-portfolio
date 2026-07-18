import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaUserTie, FaChartBar, FaNewspaper, FaUtensils, FaBuilding } from 'react-icons/fa'
import '../../styles/sections/Projects.css'

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'WooCommerce Store',
      category: 'E-Commerce',
      icon: <FaShoppingCart />,
      description: 'Full-featured e-commerce platform with payment gateway integration, inventory management, and order tracking system.',
      tech: ['WooCommerce', 'WordPress', 'PHP', 'MySQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      color: '#6db33f',
      live: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Creative Portfolio',
      category: 'Portfolio',
      icon: <FaUserTie />,
      description: 'Modern portfolio website with 3D animations, dark mode, and interactive elements for creative professionals.',
      tech: ['React.js', 'Three.js', 'Framer Motion', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
      color: '#61dafb',
      live: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'Admin Panel',
      icon: <FaChartBar />,
      description: 'Real-time analytics dashboard with interactive charts, user activity tracking, and custom reporting features.',
      tech: ['React.js', 'D3.js', 'Node.js', 'MongoDB', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: '#f7df1e',
      live: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Food Blog Platform',
      category: 'Content',
      icon: <FaNewspaper />,
      description: 'Full-featured blog platform for food enthusiasts with recipe management, user comments, and newsletter system.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind', 'Alpine.js'],
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
      color: '#ff2d20',
      live: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Restaurant Ordering',
      category: 'Food & Drink',
      icon: <FaUtensils />,
      description: 'Online food ordering system with real-time order tracking, table reservations, and delivery management.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      color: '#e44d26',
      live: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Corporate Website',
      category: 'Business',
      icon: <FaBuilding />,
      description: 'Professional corporate website with CMS integration, team management, client portal, and service showcasing.',
      tech: ['WordPress', 'PHP', 'JavaScript', 'SCSS', 'ACF'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      color: '#21759b',
      live: '#',
      github: '#'
    }
  ]

  return (
    <section ref={sectionRef} className="projects" id="projects">
      <div className="projects__bg-particles">
        <div className="projects__bg-particle p1"></div>
        <div className="projects__bg-particle p2"></div>
        <div className="projects__bg-particle p3"></div>
        <div className="projects__bg-particle p4"></div>
      </div>

      <div className="projects__container">
        {/* Section Header */}
        <div 
          className={`projects__header ${isVisible ? 'animate-in' : ''}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p 
            className="projects__tag"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            🚀 PORTFOLIO
          </p>
          <h2 
            className="projects__title"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            My <span>Projects</span>
          </h2>
          <div 
            className="projects__line"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="600"
          >
            <span className="projects__line-left"></span>
            <span className="projects__line-diamond">◆</span>
            <span className="projects__line-right"></span>
          </div>
          <p 
            className="projects__subtitle"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Some of the projects I've worked on across different industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          className={`projects__grid ${isVisible ? 'animate-grid' : ''}`}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="projects__card"
              data-aos="flip-up"
              data-aos-delay={index * 100 + 400}
              data-aos-duration="700"
            >
              <div className="projects__card-image">
                <img src={project.image} alt={project.title} />
                <div className="projects__card-overlay">
                  <div className="projects__card-icon" style={{ color: project.color }}>
                    {project.icon}
                  </div>
                  <div className="projects__card-actions">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects__card-content">
                <span className="projects__card-category" style={{ color: project.color }}>
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projects__card-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className="projects__footer"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="600"
        >
          <a href="#" className="projects__view-all">
            <span>View All Projects</span>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects