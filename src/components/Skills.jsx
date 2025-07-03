import React from 'react'
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiFileCppFill } from "react-icons/pi";
const Skills = () => {
  return (
    <div>
        <div className='skill-me'>
          <h1>Skills</h1>
          <div className='skill-outer-container'>
          <div className="skills-grid">
  <div className="skill-card">
    <FaPython className='logo' />
    <p>Python</p>
  </div>
  <div className="skill-card">
  <GiArtificialIntelligence className='logo' />
    <p>AI / ML</p>
  </div>
  <div className="skill-card">
  <SiHtml5 className='logo' />
    <p>HTML5</p>
  </div>
  <div className="skill-card">
  <FaCss3Alt className='logo' />
    <p>CSS</p>
  </div>
  <div className="skill-card">
  <SiJavascript className='logo' />
    <p>JavaScript</p>
  </div>
  <div className="skill-card">
  <FaReact className='logo' />
    <p>React JS</p>
  </div>
  <div className="skill-card">
  <FaNodeJs className='logo' />
    <p>Node Js</p>
  </div>
  <div className="skill-card">
  <SiMongodb className='logo' />
    <p>MongoDB</p>
  </div>
  <div className="skill-card">
  <TbBrandMysql className='logo' />
    <p>MySQL</p>
  </div>
  <div className="skill-card">
  <PiFileCppFill  className='logo' />
    <p>C++</p>
  </div>
  <div className="skill-card">
  <SiExpress className='logo' />
    <p>Express JS</p>
  </div>
  <div className="skill-card">
  <FaGithub className='logo' />
    <p>GitHub</p>
  </div>
</div>
          </div>
        </div>
    </div>
  )
}

export default Skills
