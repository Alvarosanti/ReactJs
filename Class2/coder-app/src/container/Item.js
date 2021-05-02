import React from 'react';
import img from '../assets/lamps/lamp1.png'
import ItemCount from '../components/ItemCount'

const Item = ({tittle,description,price,stockQ,items}) =>{
    return(
            <div className="card"> 
                <div className="card-body">
                    <h4 className="card-tittle">{tittle}</h4>
                    <img className="card-img-top" src={img}></img>
                    <p className="card-text text-bg-primary">{description}</p>
                    <p className="card-text text-secondary">Stock: {stockQ} unidades</p>
                    <p className="card-text">Precio: {price} USD</p>
                    <ItemCount items= {items} stockQ = {stockQ}/>
                        <button class="btn btn-outline-warning rounded-pill">Agregar al carrito  </button>
                    </div>
            </div>
    )
}
export default  Item;

