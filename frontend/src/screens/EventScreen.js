import React from 'react'
import {Row,Col,Image,Card,Button,ListGroup, ListGroupItem} from 'react-bootstrap';


const EventScreen = props => {
 console.log(props);
 const priceLabel=props.eve.Price!==undefined? "Price:": "Starts from ";
 const price = props.eve.Price!==undefined? props.eve.Price : props.eve.StartingPrice
  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <Row>
            <Col md={5}>
                <Image src={props.eve.Image} alt={props.eve.EventName} fluid/>
                <p className='description'><span className='popupheadings'>Description:</span> {props.eve.Description}</p>
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h3>{props.eve.EventName}</h3>
                    </ListGroupItem>
                    <ListGroupItem className='popup'><span className='popupheadings'> {priceLabel} </span><strong>${price}</strong></ListGroupItem>
                    <ListGroupItem className='popup'><span className='popupheadings'>Location:</span> {props.eve.Location}</ListGroupItem>
                    <ListGroupItem className='popup'><span className='popupheadings'>Date&Time:</span> {props.eve.Date}</ListGroupItem>
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
                                {props.eve.Price!==undefined? <Col className='priceinAddtoCart'>${price}</Col>:<Col>
                                    <select name='price' className='drop'>
                                    <option>${price}</option>
                                    <option>${props.eve.EndingPrice}</option>
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