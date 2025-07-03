import React from 'react'
import '../components/Contact.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className='contact-me'>
    <div className='contact-title'>Contact Me</div>
  
    <div className='contact-form'>
      <form>
        <label htmlFor="email">Email: srinidhi762005@gmail.com</label>
        <label htmlFor="message">Phone No: 7219688335 </label>
      </form>
    </div>
  
    <div className='contact-icons'>
  <a href='https://www.linkedin.com/in/srinidhi-soundarrajan-239b14290/' target='_blank' rel='noopener noreferrer'>
    <FaLinkedin className='icon' />
  </a>
  <a href='https://github.com/Stdcoders' target='_blank' rel='noopener noreferrer'>
    <FaGithub className='icon' />
  </a>
  <a href='https://www.instagram.com/__srinidhi765__' target='_blank' rel='noopener noreferrer'>
    <FaInstagram className='icon' />
  </a>
      </div>
      </div>
  )
}

export default Contact
