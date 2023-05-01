import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {Row,Col} from "react-bootstrap";
import EventCard from '../components/EventCard';
import { listEvents } from '../actions/eventActions';
import {Button} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message'

const HomeScreen=()=>{
  const [category, setCategory] = useState('');
  // const [events,setEvents]=useState([]);


  const dispatch = useDispatch()
  const eventList = useSelector((state) => state.eventList)
  const {loading, error, events} = eventList


  useEffect(()=>{
    dispatch(listEvents())

  })
   
    return(

        <>
          <div className='categories'>
            <h3>CheckOut your favourite Categories</h3>
            {loading ? (<Loader />)
               : error? (
                <Message variant='danger'>{error}</Message>
               )
               :( <Row>

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
                  
              </Row>)
            }

            <Button onClick={()=>setCategory('Music')} className='catButton'>Music</Button>
            <Button onClick={()=>setCategory('Sports&Fitness')} className='catButton'>Sports & Fitness</Button>
            <Button onClick={()=>setCategory('Food&Drink')} className='catButton'>Food & Drinks</Button>
            <Button onClick={()=>setCategory('')} className='catButton'>All</Button>
          </div>
           
        </>
    )
}

export default HomeScreen


 