import React, {useState} from 'react'
import { Link,Route } from 'react-router-dom';

const ItemCount = ({items,stockQ,onAdd,userPickCount}) => {

    console.log('user pick count', userPickCount);
    return (
        <div className="buttonDetail">
            <Link to='/checkout'> 
                <button className="btn btn-dark rounded-p2 py-2">¡Comprar ahora!</button>
            </Link>
            &nbsp;
            <Link to={'/cart'}> 
                <button onClick={()=> onAdd(userPickCount)} className="btn btn-dark rounded-p2 py-2">Agregar al carrito</button>
            </Link>
        </div>
    )
}

export default ItemCount;