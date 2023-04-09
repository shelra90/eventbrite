import React from 'react'
import {Card} from 'react-bootstrap';

const EventCard = () => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Card.Img src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F456118749%2F957719493413%2F1%2Foriginal.20230227-184928?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C22%2C1920%2C960&s=2bcbb4f0e1ce53e9a4b5786d64a4e24e' variant='top'></Card.Img>
        <Card.Body>
          <Card.Title as='div'>
            <strong>DDD Seattle w/ TRUTH, Bukez Finezt, Wraz, Woven Thorns</strong>
          </Card.Title>
          <Card.Text as='div'>
            <div className='my-3'>
              4 from 10 reviews
            </div>
          </Card.Text>
          <Card.Text as='h3'>
            $20
          </Card.Text>
        </Card.Body>
      </Card>
    </>

  )
}

export default EventCard