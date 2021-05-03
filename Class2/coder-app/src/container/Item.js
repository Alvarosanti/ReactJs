import React from 'react';
import img from '../assets/lamps/lamp1.png'
import ItemCount from '../components/ItemCount'
import { Link } from 'react-router-dom';

const Item = ({id,tittle,description,price,stockQ,items}) =>{
    
    return(
            <div className="card"> 
                <div className="card-body">
                    <h4 className="card-tittle">{tittle}</h4>
                    <img className="card-img-top" src={img}></img>
                    <p className="card-text text-bg-primary">{description}</p>
                    <p className="card-text text-secondary">Stock: {stockQ} unidades</p>
                    <p className="card-text">Precio: {price} USD</p>
                    <ItemCount items= {items} stockQ = {stockQ}/>
                    <button className="btn btn-outline-warning rounded-pill">Agregar al carrito</button>
                        <Link  to={`/item/${id}`}>
                            <button className="btn btn-outline-alert-info">Detalles</button>
                        </Link>
                </div>
            </div>
    )
}
export default  Item;

