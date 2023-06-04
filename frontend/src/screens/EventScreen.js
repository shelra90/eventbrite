
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {Row,Col,Image,Card,Button,ListGroup, ListGroupItem, Form} from 'react-bootstrap';
import { listEventDetails } from '../actions/eventActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const EventScreen = () => {
  const [qty, setQty] = useState(1)
  const params = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const eventDetails = useSelector((state) => state.eventDetails)
  const {loading, error, event} = eventDetails

  useEffect(() => {
    dispatch(listEventDetails(params.id))
  }, [dispatch, params])
  
  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (<Loader />)
        : error? (
          <Message variant='danger'>{error}</Message>
        )
        : (<Row>
        <Col md={4}>
          <Image className='eventScreenImg' src={event.Image} alt={event.EventName} fluid />
        </Col> 
        <Col md={5}>
          <ListGroup className='eventScreendetails' variant='flush'>
            <ListGroupItem>
              <h3>{event.EventName}</h3>
            </ListGroupItem>
            <ListGroupItem><span className='EveScrnHeadings'>Price:</span> ${event.Price}</ListGroupItem>
            <ListGroupItem ><span className='EveScrnHeadings'>Location:</span> {event.Location}</ListGroupItem>
            <ListGroupItem ><span className='EveScrnHeadings'>Date&Time:</span> {event.Date}</ListGroupItem>
            <ListGroupItem><span className='EveScrnHeadings'>Description:</span> {event.Description}</ListGroupItem>
          </ListGroup>
        </Col>  
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>${event.Price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {event.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              {event.countInStock > 0 && (

                <ListGroupItem>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={e => setQty(e.target.value)}  
                      >
                          {
                            [...Array(event.countInStock).keys()].map(x => (
                              <option key={x+1} value={x+1}>
                                {x+1}
                              </option>
                            ))
                          }

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}

              <ListGroupItem className='addtocart'>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={event.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>                     
      </Row>)
      }  
        
    </>
  )
}

export default EventScreen


// import React,{useState,useEffect} from 'react'
// import { useDispatch, useSelector} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import {Row,Col,Image,Card,Button,ListGroup, ListGroupItem, Form} from 'react-bootstrap';

// import { listEventDetails } from '../actions/eventActions'
// import Loader from '../components/Loader'
// import Message from '../components/Message'


// const EventScreen = props => {

// //  const priceLabel=props.eve.Price!==undefined? "Price:": "Starts from ";
// //  const price = props.eve.Price!==undefined? props.eve.Price : props.eve.StartingPrice;
  
//   const [qty, setQty] =useState(1)
//   const [selectedPrice, setSelectedPrice] =useState(props.priceTag)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
  

//   const eventDetails = useSelector((state) => state.eventDetails) 
//   const {loading, error, event} = eventDetails

//   useEffect(()=>{
//     dispatch(listEventDetails(props.id))
//   }, [dispatch, props])

 
// //   const priceLabel=event.Price!==undefined? "Price:": "Starts from ";
// //   const price = event.Price!==undefined? event.Price : event.StartingPrice;

//   const addToCartHandler = () => {
//     navigate(`/cart/${props.id}?qty=${qty}&price=${props.priceTag}`)
//   }
  
//   return (
//     <div >
     
//       <Link className='btn btn-light my-3' to='/'>
//         Go Back
//       </Link>
        
//         {loading ? (<Loader />)
//         : error? (
//           <Message variant='danger'>{error}</Message>
//         )
//         :(
//         <Row>
//             <Col md={5}>
//                 <Image src={event.Image} alt={event.EventName} fluid/>
//                 <p className='description'><span className='popupheadings'>Description:</span> {event.Description}</p>
//             </Col>
//             <Col md={4}>
//                 <ListGroup variant='flush'>
//                     <ListGroupItem>
//                         <h3>{event.EventName}</h3>
//                     </ListGroupItem>
//                     <ListGroupItem className='popup'><span className='popupheadings'> {event.Price!==undefined? "Price:": "Starts from "} </span><strong> ${event.Price!==undefined? event.Price : event.StartingPrice}</strong></ListGroupItem>
//                     <ListGroupItem className='popup'><span className='popupheadings'>Location:</span> {event.Location}</ListGroupItem>
//                     <ListGroupItem className='popup'><span className='popupheadings'>Date&Time:</span> {event.Date}</ListGroupItem>
//                 </ListGroup>
//             </Col>
//             <Col md={3}>
//                 <Card>
//                     <ListGroup variant='flush'>
//                         <ListGroupItem>
//                             <Row>
//                                 <Col>
//                                     <strong>price:</strong>
//                                 </Col>
//                                 {
//                                 event.Price!==undefined? <Col className='priceinAddtoCart'>${event.Price!==undefined? event.Price : event.StartingPrice}</Col>:<Col>
//                                     <select name='price' className='drop' onChange={e => setSelectedPrice(e.target.value)}>
//                                     <option>${event.Price!==undefined? event.Price : event.StartingPrice}</option>
//                                     <option>${event.EndingPrice}</option>
//                                     </select>
//                                 </Col>}
                                
//                             </Row>
//                         </ListGroupItem>
//                         <ListGroup.Item>
//                         <Row>
//                             <Col>Status:</Col>
//                             <Col>
//                                 {event.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
//                             </Col>
//                         </Row>
//                         </ListGroup.Item>
//                             {event.countInStock > 0 && (

//                                 <ListGroup.Item>
//                                     <Row>
//                                         <Col>Qty</Col>
//                                         <Col>
//                                         <Form.Control
//                                         as='select'
//                                         value={qty}
//                                         onChange={e => setQty(e.target.value)}
//                                         >
//                                         {
//                                             [...Array(event.countInStock).
//                                             keys()].map(x => (
//                                                 <option key={x+1} value={x+1}>
//                                                     {x+1}
//                                                 </option>
//                                             ))
//                                         }
                                        
//                                         </Form.Control>
//                                         </Col>

//                                     </Row>
//                                 </ListGroup.Item>
//                             )}

//                         <ListGroupItem>
//                             <Button 
//                             className='btn-block addtocart' 
//                             type='button'
//                             disabled={event.countInStock === 0}
//                             onClick={addToCartHandler}
//                             >
//                             Add To Cart</Button>
//                         </ListGroupItem>
//                     </ListGroup>
//                 </Card>
//             </Col>
//         </Row>)
//         }       
        
      
//     </div>
//   )
// }

// export default EventScreen







