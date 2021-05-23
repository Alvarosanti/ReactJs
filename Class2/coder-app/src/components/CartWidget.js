import React from 'react';
import {useCartContext} from './CartContext';
import {Link, NavLink} from 'react-router-dom';

export const CartWidget = () =>{
    const {counterCartItem} = useCartContext();
    return(
        <div>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                <NavLink to='/cart'>
                    <a href="#!" class="nav-link navbar-link-2 waves-effect">
                    <i class="fas fa-shopping-cart pl-0">{counterCartItem()}</i>
                    </a>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}