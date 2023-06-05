import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {Row,Col} from "react-bootstrap";
import EventCard from '../components/EventCard';
import { listEvents, listSearchEvents } from '../actions/eventActions';
import {Button} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message'
import { useLocation } from 'react-router-dom'

const HomeScreen=()=>{
  const [category, setCategory] = useState('');
  // const [events,setEvents]=useState([]);

  const location = useLocation()

  const input = location.search ? location.search.split('=')[1] : "";

  ////dispatch(listSearchEvents(input))
  const dispatch = useDispatch()
  const eventList = useSelector((state) => state.eventList)
  const {loading, error, events} = eventList || {loading: false, error: "", events:[]}

    useEffect(()=>{
      if(input !== ""){
        dispatch(listSearchEvents(input));
      }
      else
      {
        dispatch(listEvents());
      }
    },[dispatch, input])
   
    return(

        <>
          <div className='categories'>
            {/* <h3 className='catHeading'>CheckOut your favourite Categories</h3> */}
            <Button onClick={()=>setCategory('Music')} className='catButton'>Music</Button>
            <Button onClick={()=>setCategory('Sports&Fitness')} className='catButton'>Sports & Fitness</Button>
            <Button onClick={()=>setCategory('Food&Drink')} className='catButton'>Food & Drinks</Button>
            <Button onClick={()=>setCategory('')} className='catButton'>All</Button>
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
          </div>
           
        </>
    )
}

export default HomeScreen


 