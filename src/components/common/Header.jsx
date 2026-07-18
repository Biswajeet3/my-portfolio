import { useState, useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../../styles/common/Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState(null)
  const navRefs = useRef([])

  // Section IDs (matching the sections in Home.jsx)
  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Contact', path: '#contact' }
  ]

  // Handle scroll to section with smooth behavior
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
    
    // Close mobile menu if open
    if (isMenuOpen) {
      closeMenu()
    }
  }

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Find which section is in view
      const sections = navLinks.map(link => ({
        id: link.path.replace('#', ''),
        element: document.getElementById(link.path.replace('#', ''))
      }))
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveIndex(i)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsClosing(false)
    }, 400)
  }

  // Get position for underline
  const getUnderlineStyle = () => {
    const index = hoverIndex !== null ? hoverIndex : activeIndex
    const ref = navRefs.current[index]
    if (!ref) return { left: 0, width: 0 }
    
    const rect = ref.getBoundingClientRect()
    const containerRect = ref.closest('.header__nav-list')?.getBoundingClientRect()
    if (!containerRect) return { left: 0, width: 0 }
    
    return {
      left: rect.left - containerRect.left,
      width: rect.width
    }
  }

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          {/* Logo - Scroll to top */}
          <a 
            href="#home" 
            className="header__logo"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className="header__logo-icon">BS</div>
            <h2 className="header__logo-text">BISWAJEET.</h2>
          </a>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navLinks.map((link, index) => (
                <li key={link.name} className="header__nav-item">
                  <a
                    ref={el => navRefs.current[index] = el}
                    href={link.path}
                    className={`header__nav-link ${
                      activeIndex === index ? 'header__nav-link--active' : ''
                    }`}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onClick={(e) => handleScrollToSection(e, link.path)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Animated Underline */}
            <div 
              className="header__nav-underline"
              style={(() => {
                const style = getUnderlineStyle()
                return {
                  left: style.left,
                  width: style.width,
                  opacity: hoverIndex !== null ? 1 : 1
                }
              })()}
            />

            {/* CTA Button - Scroll to Contact */}
            <a 
              href="#contact" 
              className="header__cta"
              onClick={(e) => handleScrollToSection(e, '#contact')}
            >
              <span>Let's Talk</span>
              <FaArrowRight className="header__cta-icon" />
            </a>
          </nav>

          {/* Hamburger */}
          <button 
            className="header__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="header__mobile-overlay" onClick={closeMenu}>
          <div 
            className={`header__mobile-menu ${isClosing ? 'header__mobile-menu--closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="header__mobile-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>

            <ul className="header__mobile-list">
              {navLinks.map((link, index) => (
                <li key={link.name} style={{
                  animation: `linkFadeIn 0.4s ease ${index * 0.08}s both`
                }}>
                  <a 
                    href={link.path}
                    className={`header__mobile-link ${
                      activeIndex === index ? 'header__mobile-link--active' : ''
                    }`}
                    onClick={(e) => handleScrollToSection(e, link.path)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <a 
              href="#contact" 
              className="header__mobile-cta"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              style={{
                animation: `linkFadeIn 0.4s ease 0.5s both`
              }}
            >
              <span>Let's Talk</span>
              <FaArrowRight className="header__mobile-cta-icon" />
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Header