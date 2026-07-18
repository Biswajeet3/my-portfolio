import { FaCode, FaRocket, FaUsers, FaAward, FaArrowRight, FaStar, FaGem } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import '../../styles/sections/About.css'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    awards: 0
  })
  const sectionRef = useRef(null)

  const fullText = "I'm a passionate Software & Web Developer with a love for creating modern, responsive, and user-friendly digital experiences. With 2+ years of experience, I bring ideas to life through clean code and creative design."

  // Typing effect for bio
  useEffect(() => {
    if (isVisible && textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[textIndex])
        setTextIndex(prev => prev + 1)
      }, 20)
      return () => clearTimeout(timer)
    }
  }, [isVisible, textIndex])

  // Counter animation for stats
  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      const targetValues = {
        projects: 50,
        experience: 2,
        clients: 40,
        awards: 12
      }

      let currentStep = 0
      const counterInterval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setCounters({
          projects: Math.round(progress * targetValues.projects),
          experience: Math.round(progress * targetValues.experience),
          clients: Math.round(progress * targetValues.clients),
          awards: Math.round(progress * targetValues.awards)
        })

        if (currentStep >= steps) {
          clearInterval(counterInterval)
          setCounters({
            projects: targetValues.projects,
            experience: targetValues.experience,
            clients: targetValues.clients,
            awards: targetValues.awards
          })
        }
      }, interval)

      return () => clearInterval(counterInterval)
    }
  }, [isVisible])

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

  const stats = [
    { icon: <FaCode />, number: counters.projects + '+', label: 'Projects Completed' },
    { icon: <FaRocket />, number: counters.experience + '+', label: 'Years Experience' },
    { icon: <FaUsers />, number: counters.clients + '+', label: 'Happy Clients' },
    { icon: <FaAward />, number: counters.awards + '+', label: 'Awards Won' }
  ]

  const progressItems = [
    { name: 'Problem Solving', level: 92, color: '#61dafb', icon: <FaGem /> },
    { name: 'Creative Design', level: 88, color: '#f7df1e', icon: <FaGem /> },
    { name: 'Performance Optim', level: 85, color: '#68a063', icon: <FaGem /> },
    { name: 'Team Leadership', level: 78, color: '#e44d26', icon: <FaGem /> },
    { name: 'Communication', level: 90, color: '#21759b', icon: <FaGem /> }
  ]

  return (
    <section ref={sectionRef} className="about" id="about">
      {/* Floating Particles */}
      <div className="about__particles">
        <span className="about__particle p1"></span>
        <span className="about__particle p2"></span>
        <span className="about__particle p3"></span>
        <span className="about__particle p4"></span>
        <span className="about__particle p5"></span>
        <span className="about__particle p6"></span>
        <span className="about__particle p7"></span>
        <span className="about__particle p8"></span>
      </div>

      <div className="about__container">
        {/* Section Header */}
        <div 
          className={`about__header ${isVisible ? 'animate-in' : ''}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p 
            className="about__tag"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            ✦ ABOUT ME
          </p>
          <h2 
            className="about__title"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Turning Ideas Into <span>Digital Experiences</span>
          </h2>
          <div 
            className="about__line"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="600"
          >
            <span className="about__line-left"></span>
            <span className="about__line-diamond">◆</span>
            <span className="about__line-right"></span>
          </div>
        </div>

        <div className="about__grid">
          {/* Left Column - Bio with Typing Effect */}
          <div 
            className={`about__bio ${isVisible ? 'animate-left' : ''}`}
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h3>Who I Am</h3>
            <div className="about__bio-text">
              <p>
                {displayText}
                <span className="about__cursor-blink">|</span>
              </p>
            </div>
            
            <div className="about__bio-stats">
              <div 
                className="about__bio-stat"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <span className="about__bio-number">100%</span>
                <span className="about__bio-label">Commitment</span>
              </div>
              <div 
                className="about__bio-stat"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="500"
              >
                <span className="about__bio-number">24/7</span>
                <span className="about__bio-label">Support</span>
              </div>
              <div 
                className="about__bio-stat"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <span className="about__bio-number">5★</span>
                <span className="about__bio-label">Client Rating</span>
              </div>
            </div>

            <a 
              href="#" 
              className="about__bio-link"
              data-aos="fade-up"
              data-aos-delay="550"
              data-aos-duration="500"
            >
              More About Me <FaArrowRight />
            </a>
          </div>

          {/* Right Column - Progress Bars */}
          <div 
            className={`about__skills ${isVisible ? 'animate-right' : ''}`}
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h3>My Strengths</h3>
            <div className="about__skills-list">
              {progressItems.map((item, index) => (
                <div 
                  key={item.name} 
                  className="about__skill"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-aos="fade-left"
                  data-aos-delay={index * 100 + 400}
                  data-aos-duration="600"
                >
                  <div className="about__skill-header">
                    <span className="about__skill-name">
                      <span className="about__skill-icon">{item.icon}</span>
                      {item.name}
                    </span>
                    <span className="about__skill-percent">
                      {isVisible ? item.level : 0}%
                    </span>
                  </div>
                  <div className="about__skill-bar">
                    <div 
                      className="about__skill-fill"
                      style={{
                        width: isVisible ? `${item.level}%` : '0%',
                        '--skill-color': item.color,
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="about__skill-glow"></div>
                      <div className="about__skill-sparkle"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section with Counters */}
        <div 
          className={`about__stats ${isVisible ? 'animate-up' : ''}`}
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="about__stat"
              style={{ animationDelay: `${index * 0.15}s` }}
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 650}
              data-aos-duration="500"
            >
              <div className="about__stat-icon">{stat.icon}</div>
              <div className="about__stat-number">{stat.number}</div>
              <div className="about__stat-label">{stat.label}</div>
              <div className="about__stat-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About