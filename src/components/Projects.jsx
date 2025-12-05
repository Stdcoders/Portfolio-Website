import React from 'react'
import '../components/Projects.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sleep from '../assets/sleep.jpeg'
import dash from '../assets/dash.png'
import hospital from '../assets/hospital.jpg'

const Projects = () => {
 
  return (
    <div className='project-me'>
          <h1>Projects</h1>
          <div className='project-container'>
          <Card className='card'style={{ width: '400px'}}>
      <Card.Img variant="top" src={dash}  className='card-img'/>
      <Card.Body>
        <Card.Title className='car-title'>ContextAI</Card.Title>
        <Card.Text className='car-desc'>
                          A Chat Based Data Analyst AI Agent!<br></br>
                          <p className='car-tech'>Tech Stack - Langchain, Scikit-Learn, Pandas, Numpy, Matplotlib, Plotly</p>
        </Card.Text>
            <Button variant="primary" className='git-btn'><a href="https://github.com/Stdcoders/AI-DL-Project-Sem5">Github</a></Button>
      </Card.Body>
              </Card>
              <Card className='card' style={{ width: '400px'}}>
              <Card.Img variant="top" src={sleep}  className='card-img'/>
      <Card.Body>
        <Card.Title className='car-title'>SomnoGuide - AI Based Sleep Disorder Diagnosis</Card.Title>
        <Card.Text className='car-desc'>
                          ML Based sleep disorder classification<br></br>
                          <p className='car-tech'>Tech Stack - Python, Random Forest, SMOTE, SHAP, XGBoost</p>
        </Card.Text>
            <Button variant="primary" className='git-btn'><a href="https://github.com/Stdcoders/ML_Project_Sem4">Github</a></Button>
      </Card.Body>
              </Card>
              <Card className='card' style={{ width: '400px'}}>
              <Card.Img variant="top" src={hospital}  className='card-img'/>
      <Card.Body>
        <Card.Title className='car-title'>Connect Care</Card.Title>
        <Card.Text className='car-desc'>
              A full stack healthcare platform for easy doctor-patient interactions!<br />
              <p className='car-tech'>Tech Stack - React JS, Node JS, Express JS, MongoDB, Python</p>
        </Card.Text>
            <Button variant="primary" className='git-btn'> <a href="https://github.com/Stdcoders/Connect-Care">Github</a></Button>
      </Card.Body>
              </Card>
              
          </div>
    </div>
  )
}

export default Projects
