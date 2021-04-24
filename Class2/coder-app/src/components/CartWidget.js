import React from 'react';
import cart from '../assets/shopping-cart-solid.svg';

export const CartWidget = () =>{
    return(
        <div>
            <img src={ cart } alt="carrito"/>
        </div>
    )
}