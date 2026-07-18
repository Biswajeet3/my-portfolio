import { useState, useEffect, useRef } from 'react'
import '../../styles/sections/Skills.css'

function Skills() {
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

  const skillCategories = [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'HTML5', color: '#e44d26' },
        { name: 'CSS3', color: '#264de4' },
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'React.js', color: '#61dafb' },
        { name: 'Tailwind', color: '#38bdf8' },
        { name: 'Bootstrap', color: '#7952b3' }
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', color: '#68a063' },
        { name: 'Express.js', color: '#ffffff' },
        { name: 'Django', color: '#092e20' },
        { name: 'Spring Boot', color: '#6db33f' },
        { name: 'Laravel', color: '#ff2d20' },
        { name: 'PHP', color: '#777bb4' },
        { name: 'Python', color: '#306998' }
      ]
    },
    {
      name: 'Database',
      icon: '💾',
      skills: [
        { name: 'MongoDB', color: '#4ea94b' },
        { name: 'PostgreSQL', color: '#336791' }
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', color: '#f05033' },
        { name: 'GitHub', color: '#ffffff' },
        { name: 'Figma', color: '#f24e1e' },
        { name: 'VS Code', color: '#007acc' },
        { name: 'WordPress', color: '#21759b' }
      ]
    }
  ]

  return (
    <section ref={sectionRef} className="skills" id="skills">
      {/* Animated Background Particles */}
      <div className="skills__bg-particles">
        <div className="skills__bg-particle p1"></div>
        <div className="skills__bg-particle p2"></div>
        <div className="skills__bg-particle p3"></div>
        <div className="skills__bg-particle p4"></div>
        <div className="skills__bg-particle p5"></div>
        <div className="skills__bg-particle p6"></div>
      </div>

      <div className="skills__container">
        {/* Section Header */}
        <div 
          className={`skills__header ${isVisible ? 'animate-in' : ''}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p 
            className="skills__tag"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            ⚡ EXPERTISE
          </p>
          <h2 
            className="skills__title"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            My <span>Tech Stack</span>
          </h2>
          <div 
            className="skills__line"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="600"
          >
            <span className="skills__line-left"></span>
            <span className="skills__line-diamond">◆</span>
            <span className="skills__line-right"></span>
          </div>
          <p 
            className="skills__subtitle"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Technologies and tools I work with to build amazing digital experiences.
          </p>
        </div>

        {/* Skill Categories */}
        <div 
          className={`skills__grid ${isVisible ? 'animate-grid' : ''}`}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="skills__category"
              data-aos="fade-up"
              data-aos-delay={catIndex * 150 + 400}
              data-aos-duration="700"
            >
              <div className="skills__category-header">
                <span className="skills__category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>
              <div className="skills__category-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skills__card"
                    style={{ 
                      animationDelay: `${(catIndex * 0.2) + (skillIndex * 0.05)}s`,
                      '--float-delay': `${(catIndex * 0.2) + (skillIndex * 0.05)}s`
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={catIndex * 100 + skillIndex * 50 + 500}
                    data-aos-duration="500"
                  >
                    <div 
                      className="skills__card-dot" 
                      style={{ background: skill.color }}
                    ></div>
                    <span className="skills__card-name">{skill.name}</span>
                    <div className="skills__card-glow" style={{ background: skill.color }}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className="skills__footer"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="600"
        >
          <a href="#" className="skills__view-all">
            <span>View All Skills</span>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills