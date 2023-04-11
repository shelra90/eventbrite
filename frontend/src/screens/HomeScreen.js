import React from 'react'
import {Row,Col} from "react-bootstrap";
import EventCard from '../components/EventCard';
import events from '../events';
const HomeScreen=()=>{
    
    
    return(
        <>
            <Row>
              {events.map((eve) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                  <EventCard eve={eve}/>
                </Col>
                ))}
                
            </Row>
        </>
    )
}

export default HomeScreen