import Select from '../Select/Select';
import './Cart.css'

const Cart = (props) => {
    const {cart, handleChooseAgain, chooseToCartWatch} = props;
    
    return (
        <div className='cart'>
            <h1 className='selected-title'>Selected Watch</h1>
            {
                cart.map(cart => <Select cart={cart}
                key={cart.id}></Select>)
            }

            <button onClick={ () => chooseToCartWatch()} className='choose-one'>
            Choose One For Me</button>
            
            <button onClick={ () => handleChooseAgain()}  className='choose-again'>Choose Again</button>
        </div>
    );
};

export default Cart;



