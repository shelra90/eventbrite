import React from 'react'
import {Row,Col} from "react-bootstrap";
import EventCard from '../components/EventCard';
const HomeScreen=()=>{
    return(
        <>
            <h1>Latest Products</h1>
            <Row>
              
                <Col sm={12} md={6} lg={4} xl={3}>
                    <EventCard/>
                </Col>
               
            </Row>
        </>
    )
}