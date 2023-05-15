import axios from 'axios'
import { Button } from 'react-bootstrap/lib/InputGroup'
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_REQUEST,
    ORDER_PAY_FAIL,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_REQUEST,
} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch,
    getState) => {
        try {
            dispatch({
                type: ORDER_CREATE_REQUEST,
            })

            const {
                userLogin: { userInfo },
            } = getState()

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                },
            }

            const { data } = await axios.post(`/api/orders`, order, config)

            dispatch({
                type: ORDER_CREATE_SUCCESS,
                payload: data,
            })
        } catch (error) {
            dispatch({
                type: ORDER_CREATE_FAIL,
                payload: 
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
            })
        }
        }
    
        export const getOrderDetails = (id) => async (dispatch,
        getState) => {
            try {
                dispatch({
                    type: ORDER_DETAILS_REQUEST,
                })

                const{
                    userLogin: { userInfo },
                } = getState()

                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }

                const { data} = await axios.get(`/api/orders/${id}`,
                config)

                dispatch({
                    type: ORDER_DETAILS_SUCCESS,
                    payload: data,
                })
            }catch (error) {
                dispatch({
                    type: ORDER_CREATE_FAIL,
                    payload: 
                        error.response && error.response.data.message 
                        ? error.response.data.message
                        : error.message
                })
            }

            return (
                <>
                <CheckoutSteps step1 step2 step3 step4 />
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Address:</strong>
                                    {cart.shippingAddress.address}, {cart.
                                    shippingAddress.city}{' '}
                                    {cart.shippingAddress.postalCode}, {''}
                                    {cart.shippinAddress.country}
                                    </p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {cart.cartItems.Length === 0 ? (
                                    <Message> 
                                        ) : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <Row>
                                                <Col md={1}>
                                                    <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fluid
                                                    rounded
                                                    />
                                                </Col>
                                                <Col>
                                                    <Link to ={`/event/${item.event}`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                {item.qty} x ${item.price} = ${item.
                                                    qty * item.price}
                                                    </Col>
                                            </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                     </ListGroup.Item>
                     </ListGroup>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <ListGroup.Item variant='flush'>
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Items</Col>
                                        <Col>${cart.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup.Item>
                            <Row>
                                <Col>Total</Col>
                                <Col>${cart.totalPrice}</Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                type='button'
                                className='btn-block'
                                disabled={cart.cartItems === 0}
                                onClick={placeOrderHandler}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                </>
        
     }

    export default PlaceOrderScreen




        