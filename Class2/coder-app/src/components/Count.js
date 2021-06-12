import React, {useState} from 'react'
import { Link,Route } from 'react-router-dom';
import { useCartContext } from '../components/CartContext';

const ItemCount = ({onAdd,userPickCount}) => {
    const { items } = useCartContext();
   
    console.log('user pick count', userPickCount);
    return (
        <>
        <div>
            <div id="staticBackdrop" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Se agrego al carrito</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Se ha anadido un nuevo articulo a tu Carrito de compras. Ahora tienes {items.length} articulos en tu Carrito.</p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Seguir comprando</button>
                        <a href="/cart"  type="button" class="btn btn-dark rounded-p2 py-2">Ir al carrito de compras</a>
                        <div data-dismiss="modal"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="buttonDetail">
            <Link to='/checkout'> 
                <button onClick={()=> onAdd(userPickCount)} className="btn btn-dark rounded-p2 py-2">¡Comprar ahora!</button>
            </Link>
            &nbsp;
                <button onClick={()=> onAdd(userPickCount)} data-toggle="modal" data-target="#staticBackdrop" className="btn btn-dark rounded-p2 py-2">Agregar al carrito</button>
          
        </div>
        </>
    )
}

export default ItemCount;