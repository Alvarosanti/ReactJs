import React from 'react';
import {useCartContext} from './CartContext';
import {Link, NavLink} from 'react-router-dom';
import CartEmpty from './CartEmpty';
import { NavBar } from './NavBar';

export const CartWidget = () =>{
    const {items, counterCartItem} = useCartContext();
    console.log('counter in cart widget',counterCartItem.length)
    console.log(items.length)
    return(
        <div>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    {items.length > 0?
                        <NavLink to='/cart'>
                            <a class="nav-link navbar-link-2 waves-effect"><i class="fas fa-shopping-cart pl-0">{counterCartItem()}</i></a>
                        </NavLink>
                    :
                    
                        <NavLink to='/cartEmpty'>
                            <a class="nav-link navbar-link-2 waves-effect"><i class="fas fa-shopping-cart pl-0">{counterCartItem()}</i></a>
                        </NavLink>
                    }
                </li>
            </ul>
        </div>
    )
}