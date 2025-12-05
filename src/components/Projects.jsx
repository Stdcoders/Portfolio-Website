import React from 'react'
import '../components/Projects.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sleep from '../assets/sleep.jpeg'
import gifts from '../assets/gifts.jpg'
import ins from '../assets/insurance.jpg'

const Projects = () => {
 
  return (
    <div className='project-me'>
          <h1>Projects</h1>
          <div className='project-container'>
          <Card className='card'style={{ width: '400px'}}>
      <Card.Img variant="top" src={sleep}  className='card-img'/>
      <Card.Body>
        <Card.Title className='car-title'>ContextAI</Card.Title>
        <Card.Text className='car-desc'>
                          A Chat Based Data Analyst AI Agent!<br></br>
                          <p className='car-tech'>Tech Stack - Langchain, Scikit-Learn, Pandas, Numpy, Matplotlib, Plotly</p>
        </Card.Text>
            <Button variant="primary" className='git-btn'><a href="https://github.com/Stdcoders/ML_Project_Sem4">Github</a></Button>
      </Card.Body>
              </Card>
              <Card className='card' style={{ width: '400px'}}>
              <Card.Img variant="top" src={gifts}  className='card-img'/>
      <Card.Body>
        <Card.Title className='car-title'>Giftify</Card.Title>
        <Card.Text className='car-desc'>
                          A Personalized Gifting Platform with multiple options for users!<br></br>
                          <p className='car-tech'>Tech Stack - MongoDB, NodeJS, ReactJS, ExpressJS</p>
        </Card.Text>
            <Button variant="primary" className='git-btn'><a href="https://github.com/Stdcoders/Giftify">Github</a></Button>
      </Card.Body>
              </Card>
              <Card className='card' style={{ width: '400px'}}>
              <Card.Img variant="top" src={ins}  className='card-img'/>
      <Card.Body>
        <Card.Title className='car-title'>Connect Care</Card.Title>
        <Card.Text className='car-desc'>
              A full stack healthcare platform for easy doctor-patient interactions!<br />
              <p className='car-tech'>Tech Stack - Python, Sklearn, Matplotlib</p>
        </Card.Text>
            <Button variant="primary" className='git-btn'> <a href="https://github.com/Stdcoders/Medical-Insurance-Cost-Prediction">Github</a></Button>
      </Card.Body>
              </Card>
              
          </div>
    </div>
  )
}

export default Projects
