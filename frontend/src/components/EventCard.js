import React, { useState } from 'react'
import {Card} from 'react-bootstrap';
import EventScreen from '../screens/EventScreen';

const EventCard = ({eve}) => {
  var buttonName="Reserve a spot";
  
  const priceTag=eve.Price!==undefined? "Price: $"+ eve.Price: "Starts from $"+ eve.StartingPrice;
  
  const [isOpen, setIsOpen] = useState(false);
  
  const togglePopup = () => {
      setIsOpen(!isOpen);
  }
  
  return (
    
    <>
    <div>
    <Card className='my-3 p-3 rounded' onClick={togglePopup}>
        <Card.Img src={eve.Image} variant='top'></Card.Img>
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
             {priceTag}
          </Card.Text>
          <div className="button">
            <a href="#" className="btn btn-primary">{buttonName}</a>
          </div>
          
        </Card.Body>
      </Card>
      {isOpen && <EventScreen
      id={eve._id}
      handleClose={togglePopup}
      priceTag={priceTag}
    />}
    </div>
      
    </>

  )
}

export default EventCard