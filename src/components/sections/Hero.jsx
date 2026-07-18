import { useState, useRef, useEffect } from 'react'
import { FaPlay, FaDownload, FaTimes, FaVolumeMute, FaVolumeUp, FaVolumeOff } from 'react-icons/fa'
import '../../styles/sections/Hero.css'

function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showUnmuteHint, setShowUnmuteHint] = useState(true)
  const [titleIndex, setTitleIndex] = useState(0)
  const videoRef = useRef(null)

  const titles = [
    'Web Alchemist',
    'Software Architect', 
    'Full Stack Visionary',
    'UI/UX Craftsman'
  ]

  // Rotating titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Video autoplay
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        await video.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('Autoplay blocked')
        setIsPlaying(false)
      }
    }

    playVideo()

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause()
      } else {
        video.play()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    const timer = setTimeout(() => {
      setShowUnmuteHint(false)
    }, 5000)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearTimeout(timer)
    }
  }, [])

  const handleUserInteraction = () => {
    const video = videoRef.current
    if (video && video.muted) {
      video.muted = false
      setIsMuted(false)
      setShowUnmuteHint(false)
      if (video.paused) {
        video.play()
      }
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    const newMutedState = !video.muted
    video.muted = newMutedState
    setIsMuted(newMutedState)
    setShowUnmuteHint(false)
    if (!newMutedState && video.paused) {
      video.play()
    }
  }

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <section className="hero" onClick={handleUserInteraction}>
        {/* Video Background */}
        <video 
          ref={videoRef}
          className="hero__video-bg"
          src="/video/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="hero__overlay"></div>

        {/* Unmute Hint */}
        {showUnmuteHint && isMuted && (
          <div 
            className="hero__unmute-hint"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <FaVolumeOff />
            <span>Click anywhere to unmute</span>
          </div>
        )}

        {/* Controls */}
        <button 
          className="hero__play-btn"
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-duration="500"
        >
          {!isPlaying ? <FaPlay /> : '⏸'}
        </button>

        <button 
          className="hero__volume-btn"
          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-duration="500"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        {/* Premium Content */}
        <div className="hero__container">
          <div className="hero__content">
            <p 
              className="hero__greeting animate-fly-left"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              ✦ WELCOME
            </p>

            <h1 
              className="hero__title"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="hero__name-wrapper">
                <span className="hero__name-glow">
                  <span className="hero__letter hero__letter--big animate-glow-b">B</span>
                  <span className="hero__letter hero__letter--small">iswajeet</span>
                  <span className="hero__letter hero__letter--big animate-glow-s">S</span>
                  <span className="hero__letter hero__letter--small">wain</span>
                </span>
                <span className="hero__name-shine"></span>
              </span>
            </h1>

            <div 
              className="hero__title-line"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <span className="hero__line-left"></span>
              <span className="hero__line-diamond">◆</span>
              <span className="hero__line-right"></span>
            </div>

            <p 
              className="hero__subtitle animate-fly-right"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <span className="hero__rotating-title">
                {titles[titleIndex]}
              </span>
              <span className="hero__title-dot">•</span>
            </p>

            <p 
              className="hero__description animate-fly-up"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              I create modern, responsive and user-friendly web applications 
              that bring ideas to life.
            </p>

            {/* Buttons */}
            <div 
              className="hero__buttons animate-fly-up-delay"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              <button
                className="hero__btn hero__btn--play"
                onClick={(e) => { e.stopPropagation(); setIsVideoOpen(true); }}
              >
                <span className="hero__btn-glow"></span>
                <FaPlay className="hero__btn-icon" />
                <span>Watch Introduction</span>
              </button>

              <a 
                href="/cv.pdf" 
                className="hero__btn hero__btn--secondary"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <FaDownload className="hero__btn-icon" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP */}
      {isVideoOpen && (
        <div className="hero__modal" onClick={() => setIsVideoOpen(false)}>
          <div className="hero__modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="hero__modal-close"
              onClick={() => setIsVideoOpen(false)}
            >
              <FaTimes />
            </button>
            <div className="hero__modal-video">
              <video
                src="/src/assets/images/intro.mp4"
                controls
                autoPlay
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero