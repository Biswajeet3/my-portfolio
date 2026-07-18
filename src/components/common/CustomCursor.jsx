import { useState, useEffect } from 'react'
import '../../styles/common/CustomCursor.css'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Check if it's a touch device
    if ('ontouchstart' in window) {
      return
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleHover = (e) => {
      const target = e.target
      const interactive = target.closest(
        'a, button, [role="button"], input, select, textarea, .btn, .hero__btn, .header__cta, .about__bio-link'
      )
      setIsHovering(!!interactive)
    }

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', handleHover)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleHover)
    }
  }, [])

  // Don't render on touch devices
  if ('ontouchstart' in window) {
    return null
  }

  return (
    <>
      {/* Main Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'custom-cursor--hover' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Follower */}
      <div 
        className={`custom-cursor__follower ${isHovering ? 'custom-cursor__follower--hover' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Glow */}
      <div 
        className={`custom-cursor__glow ${isHovering ? 'custom-cursor__glow--active' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  )
}

export default CustomCursor