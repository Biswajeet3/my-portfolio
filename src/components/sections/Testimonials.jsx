import { useState, useEffect, useRef } from 'react'
import { FaQuoteLeft, FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../../styles/sections/Testimonials.css'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)
  const timerRef = useRef(null)

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

  const testimonials = [
    {
      id: 1,
      name: 'Rakesh Sharma',
      role: 'CEO, Tech Solutions',
      text: 'Biswajeet is a dedicated developer who delivers high-quality work on time. Great communication and skills! He transformed our entire digital presence with his expertise.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Priya Mehta',
      role: 'Founder, StartupHub',
      text: 'Excellent work! The website exceeded my expectations. Highly professional and easy to work with. The 3D animations and user experience are outstanding!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      role: 'CTO, InnovateTech',
      text: 'One of the most talented developers I\'ve worked with. His attention to detail is remarkable. He delivered a complex project under tight deadlines.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      role: 'Director, CreativeStudio',
      text: 'Absolutely phenomenal work! Biswajeet brought our vision to life with stunning visuals and flawless functionality. Highly recommended for any web project!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Product Manager, CloudTech',
      text: 'Working with Biswajeet was a game-changer. His deep understanding of React and modern web technologies helped us launch our product ahead of schedule.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  ]

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Reset auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`testimonials__star ${i < rating ? 'testimonials__star--filled' : ''}`} 
      />
    ))
  }

  return (
    <section ref={sectionRef} className="testimonials" id="testimonials">
      <div className="testimonials__bg-particles">
        <div className="testimonials__bg-particle p1"></div>
        <div className="testimonials__bg-particle p2"></div>
        <div className="testimonials__bg-particle p3"></div>
        <div className="testimonials__bg-particle p4"></div>
      </div>

      <div className="testimonials__container">
        {/* Section Header */}
        <div 
          className={`testimonials__header ${isVisible ? 'animate-in' : ''}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p 
            className="testimonials__tag"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            ⭐ TESTIMONIALS
          </p>
          <h2 
            className="testimonials__title"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            What <span>Clients Say</span>
          </h2>
          <div 
            className="testimonials__line"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="600"
          >
            <span className="testimonials__line-left"></span>
            <span className="testimonials__line-diamond">◆</span>
            <span className="testimonials__line-right"></span>
          </div>
          <p 
            className="testimonials__subtitle"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Real feedback from amazing clients I've worked with.
          </p>
        </div>

        {/* Slider */}
        <div 
          className={`testimonials__slider ${isVisible ? 'animate-in' : ''}`}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <div className="testimonials__slider-wrapper">
            <div 
              className="testimonials__slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonials__slide">
                  <div className="testimonials__card">
                    {/* Quote Icons */}
                    <FaQuoteLeft className="testimonials__quote-icon testimonials__quote-icon--left" />
                    <FaQuoteRight className="testimonials__quote-icon testimonials__quote-icon--right" />
                    
                    {/* Rating */}
                    <div className="testimonials__rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Text */}
                    <p className="testimonials__text">"{testimonial.text}"</p>

                    {/* Client Info */}
                    <div className="testimonials__client">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="testimonials__client-image"
                      />
                      <div className="testimonials__client-info">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="testimonials__card-glow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            className="testimonials__nav testimonials__nav--prev"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button 
            className="testimonials__nav testimonials__nav--next"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials