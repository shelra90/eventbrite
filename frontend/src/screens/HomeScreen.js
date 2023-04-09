import React from 'react'
import {Row,Col} from "react-bootstrap";
import EventCard from '../components/EventCard';
const HomeScreen=()=>{
    const repeat=[1,2,3,4,5,6,7,8,9];
    return(
        <>
            <Row>
              {repeat.map((eve) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <EventCard/>
                </Col>
                ))}
                
            </Row>
        </>
    )
}

export default HomeScreen