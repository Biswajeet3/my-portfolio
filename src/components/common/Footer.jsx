import { Link } from 'react-router-dom'
import { 
  FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram,
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp
} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import '../../styles/common/Footer.css'

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Contact', path: '#contact' }
  ]

  const services = [
    'Web Development',
    'Frontend Development',
    'WordPress Development',
    'E-commerce Solutions',
    'UI/UX Design',
    'Website Maintenance'
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@yourusername', label: 'YouTube' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourusername', label: 'Instagram' }
  ]

  const handleScrollToSection = (e, path) => {
    e.preventDefault()
    const targetId = path.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80
      const targetPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      {/* Scroll to Top Button */}
      <button 
        className={`footer__scroll-top ${showScrollTop ? 'footer__scroll-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      <div className="footer__container">
        {/* Main Footer Grid */}
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand" data-aos="fade-up" data-aos-delay="0">
            <h2 className="footer__logo">
              <span className="footer__logo-icon">BS</span>
              <span>BISWAJEET.</span>
            </h2>
            <p className="footer__brand-text">
              Building modern, responsive and user-friendly web experiences 
              that bring ideas to life.
            </p>
            <div className="footer__contact-info">
              <a href="mailto:biswajeetswain131@gmail.com">
                <FaEnvelope />
                biswajeetswain131@gmail.com
              </a>
              <a href="tel:+919556108489">
                <FaPhone />
                +91 9556108489
              </a>
              <span>
                <FaMapMarkerAlt />
                India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links" data-aos="fade-up" data-aos-delay="100">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    onClick={(e) => handleScrollToSection(e, link.path)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__links" data-aos="fade-up" data-aos-delay="200">
            <h3>Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div className="footer__newsletter" data-aos="fade-up" data-aos-delay="300">
            <h3>Let's Connect</h3>
            <p>Follow me on social media for updates and more.</p>
            
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>
            © {currentYear} <strong>Biswajeet Swain</strong>. All rights reserved.
          </p>
          <p className="footer__bottom-links">
            <a href="#home" onClick={(e) => handleScrollToSection(e, '#home')}>Home</a>
            <a href="#about" onClick={(e) => handleScrollToSection(e, '#about')}>About</a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')}>Contact</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer