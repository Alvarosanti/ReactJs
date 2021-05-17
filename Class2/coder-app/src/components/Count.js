import React, {useState} from 'react'
import { Link,Route } from 'react-router-dom';
const ItemCount = ({items,stockQ,onAdd,userPickCount}) => {

    console.log('user pick count', userPickCount);
    return (
        <div>
            {/* <div>
                <div class="def-number-input number-input safari_only mb-0 w-100">
                    <button className="btn btn-secondary btn-sm rounded-circle" onClick={restar} disabled = {item === 0}>&nbsp;-&nbsp;</button>
                    <span  type="number"> {item} </span>
                    <button className="btn btn-secondary btn-sm rounded-circle" onClick={sumar} disabled = {item === stockQ}>+&nbsp;</button>
                </div>
                <small id="passwordHelpBlock" className="form-text text-muted text-left">
                    (Nota, precio x unidad)
                </small>
            </div> */}
            <Link to='/checkout'> 
                <button className="btn btn-outline-warning rounded-pill">¡Comprar ahora!</button>
            </Link>
            {/* <button onClick={()=> onAdd(userPickCount)} className="btn btn-outline-warning rounded-pill">Agregar al carrito</button> */}

            <Link to={'/cart'}> 
                <button onClick={()=> onAdd(userPickCount)} className="btn btn-outline-warning rounded-pill">Agregar al carrito</button>
            </Link>
        </div>
    )
}

export default ItemCount;