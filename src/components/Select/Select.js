import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Select.css'

const Select = (props) => {
    const {name, img} = props.cart;
    return (
        <div>
            <div className='select-product'>
            <img src={img} alt="" />
            <h1 className='select-name'>Name: {name}</h1>
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
        </div>
        </div>
    );
};

export default Select;