import React, { useState } from 'react';
import {Row,Col} from "react-bootstrap";
import EventCard from '../components/EventCard';
import events from '../events';
import {Button} from 'react-bootstrap';

const HomeScreen=()=>{
  const [category, setCategory] = useState('');
    console.log(category);
    return(

        <>
          <div className='categories'>
            <h3>CheckOut your favourite Categories</h3>

            <Button onClick={()=>setCategory('Music')} className='catButton'>Music</Button>
            <Button onClick={()=>setCategory('Sports&Fitness')} className='catButton'>Sports & Fitness</Button>
            <Button onClick={()=>setCategory('Food&Drink')} className='catButton'>Food & Drinks</Button>
            <Button onClick={()=>setCategory('')} className='catButton'>All</Button>
          </div>
            <Row>
              {category===''? events.map((eve) => (
                <Col key={eve.Id} sm={12} md={6} lg={4} xl={3}>
                  <EventCard  eve={eve}/>
                </Col>
                )): events.filter(event=> event.CategoryName===category).map((eve)=>(
                  <Col key={eve.Id} sm={12} md={6} lg={4} xl={3}>
                  <EventCard eve={eve}/>
                </Col>
                ))
                }
              
                
            </Row>
        </>
    )
}

export default HomeScreen


 