import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
             <h1 className='shopping-title'>Online Watch Shopping Connection</h1>
             <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='order-container'>
                <h1 className='Order-title'>Selected Watch</h1>
                <p className='selected-item'>Selected Items: {cart.length}</p>
            </div>
        </div>
        </div>
      
    );
};

export default Shop;