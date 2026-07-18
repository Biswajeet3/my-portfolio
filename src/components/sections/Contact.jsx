import { useState, useRef, useEffect } from 'react'
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, 
  FaLinkedin, FaTwitter, FaYoutube, FaPaperPlane, 
  FaCheckCircle, FaInstagram, FaProjectDiagram, FaDollarSign, FaClock 
} from 'react-icons/fa'
import '../../styles/sections/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'India' },
    { icon: <FaEnvelope />, label: 'Email', value: 'biswajeetswain131@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 9556108489' }
  ]

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'website', label: '🌐 Website Development' },
    { value: 'ecommerce', label: '🛒 E-commerce Store' },
    { value: 'webapp', label: '📱 Web Application' },
    { value: 'portfolio', label: '🎨 Portfolio Website' },
    { value: 'landing', label: '📄 Landing Page' },
    { value: 'dashboard', label: '📊 Dashboard / Admin Panel' },
    { value: 'wordpress', label: '🔷 WordPress Development' },
    { value: 'redesign', label: '🔄 Website Redesign' },
    { value: 'maintenance', label: '🔧 Website Maintenance' },
    { value: 'other', label: '📌 Other' }
  ]

  const budgetRanges = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000+', label: '$10,000+' },
    { value: 'negotiable', label: '🤝 Negotiable' }
  ]

  const timelines = [
    { value: '', label: 'Select Timeline' },
    { value: 'urgent', label: '⚡ Urgent (Within 1 week)' },
    { value: 'short', label: '📅 Short-term (2-4 weeks)' },
    { value: 'medium', label: '📆 Medium-term (1-3 months)' },
    { value: 'long', label: '🗓️ Long-term (3+ months)' },
    { value: 'flexible', label: '🔄 Flexible / Not Sure' }
  ]

  return (
    <section ref={sectionRef} className="contact" id="contact">
      {/* Background Particles */}
      <div className="contact__particles">
        <span className="contact__particle p1"></span>
        <span className="contact__particle p2"></span>
        <span className="contact__particle p3"></span>
        <span className="contact__particle p4"></span>
        <span className="contact__particle p5"></span>
        <span className="contact__particle p6"></span>
      </div>

      <div className="contact__container">
        {/* Header */}
        <div 
          className={`contact__header ${isVisible ? 'animate-in' : ''}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p 
            className="contact__tag"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            📬 GET IN TOUCH
          </p>
          <h2 
            className="contact__title"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Let's Work <span>Together</span>
          </h2>
          <div 
            className="contact__line"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="600"
          >
            <span className="contact__line-left"></span>
            <span className="contact__line-diamond">◆</span>
            <span className="contact__line-right"></span>
          </div>
          <p 
            className="contact__subtitle"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Have a project in mind? Let's discuss your ideas and build something amazing together.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact__grid">
          {/* Left: Contact Info */}
          <div 
            className="contact__info"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me anytime. I'm always open to new opportunities and collaborations.</p>

            <div className="contact__info-items">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="contact__info-item"
                  data-aos="fade-right"
                  data-aos-delay={index * 100 + 500}
                  data-aos-duration="500"
                >
                  <div className="contact__info-icon">{item.icon}</div>
                  <div className="contact__info-details">
                    <span>{item.label}</span>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response Note */}
            <div className="contact__response-note">
              <p>📌 I usually respond within <strong>24 hours</strong></p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div 
            className="contact__form-wrapper"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="contact__form-container">
              {isSubmitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">
                    <FaCheckCircle />
                  </div>
                  <h3>Message Sent! 🎉</h3>
                  <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact__form">
                  {/* Name & Email */}
                  <div className="contact__form-group">
                    <div className="contact__form-field">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder=" "
                      />
                      <label htmlFor="name">
                        <FaUser className="contact__field-icon" />
                        Your Name *
                      </label>
                      <span className="contact__field-border"></span>
                    </div>

                    <div className="contact__form-field">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=" "
                      />
                      <label htmlFor="email">
                        <FaEnvelope className="contact__field-icon" />
                        Email Address *
                      </label>
                      <span className="contact__field-border"></span>
                    </div>
                  </div>

                  {/* Phone & Project Type */}
                  <div className="contact__form-group">
                    <div className="contact__form-field">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                      />
                      <label htmlFor="phone">
                        <FaPhone className="contact__field-icon" />
                        Phone Number
                      </label>
                      <span className="contact__field-border"></span>
                    </div>

                    <div className="contact__form-field contact__form-field--select">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >
                        {projectTypes.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="projectType">
                        <FaProjectDiagram className="contact__field-icon" />
                        Project Type *
                      </label>
                      <span className="contact__field-border"></span>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="contact__form-group">
                    <div className="contact__form-field contact__form-field--select">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                      >
                        {budgetRanges.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="budget">
                        <FaDollarSign className="contact__field-icon" />
                        Budget Range *
                      </label>
                      <span className="contact__field-border"></span>
                    </div>

                    <div className="contact__form-field contact__form-field--select">
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                      >
                        {timelines.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="timeline">
                        <FaClock className="contact__field-icon" />
                        Timeline *
                      </label>
                      <span className="contact__field-border"></span>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="contact__form-field contact__form-field--full">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="subject">
                      <FaPaperPlane className="contact__field-icon" />
                      Subject *
                    </label>
                    <span className="contact__field-border"></span>
                  </div>

                  {/* Message */}
                  <div className="contact__form-field contact__form-field--full">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder=" "
                    />
                    <label htmlFor="message">
                      <FaPaperPlane className="contact__field-icon" />
                      Project Details / Message *
                    </label>
                    <span className="contact__field-border"></span>
                  </div>

                  <button 
                    type="submit" 
                    className="contact__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="contact__spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact