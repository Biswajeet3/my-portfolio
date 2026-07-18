function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "LuxClic Technology Pvt. Ltd.",
      duration: "2023 - Present",
      description: [
        "Developing responsive websites and web applications using HTML, CSS, and JavaScript.",
        "Collaborating with designers and backend developers.",
        "Building reusable components and UI libraries."
      ]
    },
    {
      id: 2,
      role: "Web Developer Intern",
      company: "LuxClic Technology Pvt. Ltd.",
      duration: "2022 - 2023",
      description: [
        "Assisted in building and maintaining websites.",
        "Worked on UI development and bug fixing.",
        "Learned and implemented new technologies."
      ]
    }
  ]

  return (
    <section style={{
      padding: '100px 20px',
      background: '#0a0a0a',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          fontWeight: '700',
          marginBottom: '15px'
        }}>
          My <span style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Journey</span>
        </h2>
        
        <p style={{
          color: '#aaa',
          maxWidth: '600px',
          margin: '0 auto 50px',
          lineHeight: '1.8',
          fontSize: '1.1rem'
        }}>
          My professional journey and work experience.
        </p>

        {/* Experience Timeline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          textAlign: 'left'
        }}>
          {experiences.map((exp) => (
            <div key={exp.id} style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                marginBottom: '15px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#fff'
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{
                    color: '#667eea',
                    fontWeight: '500',
                    marginTop: '4px'
                  }}>
                    {exp.company}
                  </p>
                </div>
                <span style={{
                  padding: '6px 16px',
                  background: 'rgba(102,126,234,0.15)',
                  borderRadius: '20px',
                  color: '#667eea',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(102,126,234,0.2)'
                }}>
                  {exp.duration}
                </span>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {exp.description.map((item, index) => (
                  <li key={index} style={{
                    color: '#aaa',
                    padding: '6px 0',
                    paddingLeft: '20px',
                    position: 'relative',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: '12px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#667eea'
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a href="/experience" style={{
          display: 'inline-block',
          marginTop: '40px',
          color: '#667eea',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1.1rem',
          borderBottom: '2px solid #667eea',
          paddingBottom: '4px'
        }}>
          View All Experience →
        </a>
      </div>
    </section>
  )
}

export default Experience