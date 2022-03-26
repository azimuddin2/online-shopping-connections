import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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

    const chooseToCartWatch = () => {
        for (const product of cart) {  
            if (parseInt(product.id) === Math.floor(Math.random() * 12)) {
                alert(product.name);
            }
        }
    }

    const handleChooseAgain = () => {
        setCart([])
    }

    return (
        <div>
             <h1 className='shopping-title'>Online Watch Shopping Connection</h1>
             <h2 className='choose-watch'>Choose 4 Watch</h2>
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
                <Cart cart={cart}
                handleChooseAgain={handleChooseAgain}
                chooseToCartWatch={chooseToCartWatch}></Cart>
                
            </div>
        </div>
        </div>
      
    );
};

export default Shop;