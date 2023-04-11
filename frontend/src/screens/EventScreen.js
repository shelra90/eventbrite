import React from 'react'
import {Row,Col,Image,Card,Button,ListGroup, ListGroupItem} from 'react-bootstrap';
import events from '../events';


const EventScreen = props => {
 console.log(props);
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <Row>
            <Col md={6}>
                <Image src={props.eve.Image} alt={props.eve.EventName} fluid/>
                <h3>{props.eve.EventName}</h3>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h3>{props.eve.EventName}</h3>
                    </ListGroupItem>
                    <ListGroupItem>Price:${props.eve.Price}</ListGroupItem>
                    <ListGroupItem>Description: {props.eve.Description}</ListGroupItem>
                    <ListGroupItem>Location: {props.eve.Location}</ListGroupItem>
                    <ListGroupItem>Date & Time: {props.eve.Date}</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>${props.eve.Price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block' type='button'>Add To Cart</Button>
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