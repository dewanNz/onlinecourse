import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;   
    const totalPrice = cart.reduce((sum, course) => sum + course.price  , 0)
    
    return (
        <div style={{position:'fixed', textAlign: "center"}}> 
            <h2>Order Details</h2>
            <h5>Course Enrolled: {props.cart.length}</h5>
            <p>Total Price: $ {totalPrice}</p>
            <Button variant="warning" block >Place Order</Button>
        </div>
    );
};

export default Cart;