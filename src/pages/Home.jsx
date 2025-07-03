import React, { useState, useEffect } from 'react'
import '../components/App.css'
import me2 from '../assets/me2.jpg'
import Education from '../components/Education'
import { FiMoon, FiSun } from 'react-icons/fi'
import Skills from '../components/Skills'
import '../components/Skills.css'
import Projects from '../components/Projects'
import Contact from '../components/Contact.jsx'

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
    } else {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section className="hero-section">
        <div className='nav-bar'>
          <nav className="nav-links">
            <ul>
              <li className='nav-link' style={{cursor: 'pointer'}}  onClick={() => scrollToSection('education')}>Education</li>
              <li className='nav-link' style={{cursor: 'pointer'}}  onClick={() => scrollToSection('skills')}>Skills</li>
              <li className='nav-link' style={{cursor: 'pointer'}} onClick={() => scrollToSection('projects')}>Projects</li>
              <li className='nav-link' style={{cursor: 'pointer'}} onClick={() => scrollToSection('contact')}>Contact</li>
              <li>
                {
                  darkMode
                    ? <FiSun className='toggle-btn' onClick={() => setDarkMode(false)} />
                    : <FiMoon className='toggle-btn' onClick={() => setDarkMode(true)} />
                }
              </li>
            </ul>
          </nav>
        </div>

        <div className="hero-content">
          <img src={me2} alt="Srinidhi" className="hero-img" />
          <div className="intro-text">
            <p className="greeting">Hello, I'm</p>
            <h1 className="name">Srinidhi Soundarrajan</h1>
            <p className='para'>
            I am an aspiring engineer and passionate developer with a strong interest in full-stack development.  <br />
  I'm also actively building my skills in artificial intelligence and machine learning to create smart,  
  innovative solutions for real-world problems.
            </p>
            <button className='para-btn' style={{marginTop: '20px'}}> <a href="/Srinidhi_Soundarrajan_Resume.pdf" download style={{ textDecoration: 'none', color: 'inherit' }}>
    Download CV
  </a></button>
          </div>
        </div>
      </section>
      <section id='education'>
        <Education />
      </section>
      <section id='skills'>
      <Skills />
      </section>
      <section id='projects'>
      <Projects />
      </section>
      <section id='contact'>
        <Contact></Contact>
        </section>
    </div>
  )
}

export default Home
