import React from 'react';
import Select from '../Select/Select';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    const chooseToCartWatch = () => {
        // const chooseValue = Math.floor(Math.random() * 9);
        for (const product of cart) {


            console.log(product.id);
            if (parseInt(product.id) === Math.floor(Math.random() * 12)) {
                alert(product.name);
            }
        }
    }

    return (
        <div className='cart'>
            <h1 className='selected-title'>Selected Watch</h1>
            {
                cart.map(cart => <Select  cart={cart}></Select>)
            }
            <button onClick={chooseToCartWatch} className='choose-one'>
            Choose One For Me
            </button>
            <button className='choose-again'>Choose Again</button>
        </div>
    );
};

export default Cart;



