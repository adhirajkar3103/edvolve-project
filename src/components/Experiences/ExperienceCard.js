import React from 'react'
import Card from 'react-bootstrap/Card';
import './ExperienceCard.css'
import Button from 'react-bootstrap/Button';


const ExperienceCard = ({title,body,image}) => {
  return (
    <>
    <Card className="m-auto bg-white rounded shadow cardInMed">
      <Card.Img variant="top" src={image} style={{height:'8rem'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ExperienceCard