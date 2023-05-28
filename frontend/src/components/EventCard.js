import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const EventCard = ({eve}) => {
  var buttonName="Reserve a spot";
  
  return (
    
    <>
    <div>
    <Card className='my-3 p-3 rounded'>
      <Link to={`/event/${eve._id}`}>
        <Card.Img src={eve.Image} variant='top'></Card.Img>
        </Link>
        <Card.Body>
          <Card.Title as='div'>
            <strong>{eve.EventName}</strong>
          </Card.Title>
          <Card.Text as='div' className='timings'>
            <div className='my-3'>
            {eve.Date}
            </div>
          </Card.Text>
          <Card.Text as='div' className='venue'>
            <div className='my-3'>
            {eve.Location}
            </div>
          </Card.Text>
          <Card.Text as='div' className='price'>
             Price: ${eve.Price}
          </Card.Text>
          <div className="button">
          <Link to={`/event/${eve._id}`}>
            <button className="btn btn-primary">{buttonName}</button>
            </Link>
          </div>
          
        </Card.Body>
      </Card>
      
    </div>
      
    </>

  )
}

export default EventCard