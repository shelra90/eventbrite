import React,{useState,useEffect} from 'react'
import {Row,Col,Image,Card,Button,ListGroup, ListGroupItem} from 'react-bootstrap';
import axios from 'axios';

const EventScreen = props => {

//  const priceLabel=props.eve.Price!==undefined? "Price:": "Starts from ";
//  const price = props.eve.Price!==undefined? props.eve.Price : props.eve.StartingPrice;
  const [event,setEvent]=useState({})
  useEffect(()=>{
    const fetchEvent=async()=>{
        const {data}=await axios.get(`/api/events/${props.id}`)
        
        setEvent(data);
    }
    fetchEvent();
  })
  console.log(props);
  console.log('event'+event);
  const priceLabel=event.Price!==undefined? "Price:": "Starts from ";
  const price = event.Price!==undefined? event.Price : event.StartingPrice;
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <Row>
            <Col md={5}>
                <Image src={event.Image} alt={event.EventName} fluid/>
                <p className='description'><span className='popupheadings'>Description:</span> {event.Description}</p>
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h3>{event.EventName}</h3>
                    </ListGroupItem>
                    <ListGroupItem className='popup'><span className='popupheadings'> {priceLabel} </span><strong> ${price}</strong></ListGroupItem>
                    <ListGroupItem className='popup'><span className='popupheadings'>Location:</span> {event.Location}</ListGroupItem>
                    <ListGroupItem className='popup'><span className='popupheadings'>Date&Time:</span> {event.Date}</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    <strong>price:</strong>
                                </Col>
                                {event.Price!==undefined? <Col className='priceinAddtoCart'>${price}</Col>:<Col>
                                    <select name='price' className='drop'>
                                    <option>${price}</option>
                                    <option>${event.EndingPrice}</option>
                                    </select>
                                </Col>}
                                
                            </Row>
                           
                            
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block addtocart' type='button'>Add To Cart</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default EventScreen