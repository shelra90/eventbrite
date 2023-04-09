import React from 'react'
import {Card} from 'react-bootstrap';

const EventCard = () => {
  var buttonName="Reserve a spot";
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Card.Img src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F456118749%2F957719493413%2F1%2Foriginal.20230227-184928?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C22%2C1920%2C960&s=2bcbb4f0e1ce53e9a4b5786d64a4e24e' variant='top'></Card.Img>
        <Card.Body>
          <Card.Title as='div'>
            <strong>DDD Seattle w/ TRUTH, Bukez Finezt, Wraz, Woven Thorns</strong>
          </Card.Title>
          <Card.Text as='div' className='timings'>
            <div className='my-3'>
            Starts on Friday, April 28 · 9pm PDT.
            </div>
          </Card.Text>
          <Card.Text as='div' className='venue'>
            <div className='my-3'>
            Substation Seattle 645 Northwest 45th Street Seattle, WA 98107.
            </div>
          </Card.Text>
          <Card.Text as='div' className='price'>
            Starts from $20
          </Card.Text>
          <div class="button">
            <a href="#" class="btn btn-primary">{buttonName}</a>
          </div>
          
        </Card.Body>
      </Card>
    </>

  )
}

export default EventCard