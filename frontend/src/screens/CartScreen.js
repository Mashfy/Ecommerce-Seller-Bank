import React, { useEffect } from 'react';
import {
  Link,
  useParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const [searchParms] = useSearchParams();

  const productID = id;
  const qty = search ? Number(search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty
            <Link style={{ textDecoration: 'none' }} to='/'>
              {' '}
              Go Back
            </Link>
          </Message>
        ) : (
          <ListGroup variant='flush'></ListGroup>
        )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
