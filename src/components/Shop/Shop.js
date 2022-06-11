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
             <h2 className='choose-watch'>Choose 6 Watch</h2>
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
            <div className='question'>
            <div className='question-one'>
                <h1>Difference between props and state..?</h1>
                <h3>Props:</h3>
                <p>The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only.</p>
                
                <h3>State:</h3>
                <p>The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component (Before 16.0). State is both read and write.</p>
            </div>
            <div className='question-two'>
                <h1>How usestate works..?</h1>
                <p>As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.So when should you use the useState Hook? It’s especially useful for local component state, but larger projects might require additional state management solutions.</p>
            </div>
            </div>
        </div>
        </div>
      
    );
};

export default Shop;