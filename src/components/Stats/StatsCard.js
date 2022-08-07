import React from 'react'
import Card from "react-bootstrap/Card";

const StatsCard = () => {
  return (
    <>
        <Card style={{ width: "6rem", backgroundColor:'#F8F0E3' }}>
          <Card.Body>
            <Card.Title>12</Card.Title>
            <Card.Text>Experiences this week</Card.Text>
          </Card.Body>
        </Card>
    </>
  )
}

export default StatsCard