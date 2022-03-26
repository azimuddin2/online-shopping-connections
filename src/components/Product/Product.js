
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {img, name, price} = product;
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>Name: {name}</h3>
                <h4 className='product-price'>Price:${price}</h4>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='button-cart'>
                <p className='cart-text'>Add to Cart</p>
            </button>
        </div>

    );
};

export default Product;