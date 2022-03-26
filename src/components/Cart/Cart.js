import React from 'react';
import Select from '../Select/Select';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    return (
        <div className='cart'>
            <h1 className='selected-title'>Selected Watch</h1>
            {
                cart.map(cart => <Select  cart={cart}></Select>)
            }
            <button className='choose-one'>Choose One For Me</button>
            <button className='choose-again'>Choose Again</button>
        </div>
    );
};

export default Cart;



