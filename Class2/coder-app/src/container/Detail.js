import React from 'react'
import img from '../assets/lamps/lamp1.png'
import ItemCount from '../components/ItemCount'
const Detail = ({detalle,items,onAdd}) => {
    console.log('datadetailin detail: ', detalle.id);

    return (
        <div className="">
            <h1>{detalle.tittle}</h1>
            <img className="card-img-top" src={img} alt="imagenmodel"></img>
            <p>{detalle.description}</p>
            <p>Precio: {detalle.price} USD</p>
            <p>Stock: {detalle.stockQ} unidades</p>
            <ItemCount onAdd = {onAdd} items= {detalle.items} stockQ = {detalle.stockQ}/>
            {/* <link to='/cart'> 
                <button onAdd={onAdd} className="btn btn-outline-warning rounded-pill">Comprar</button>
            </link> */}
        </div>
    )
}

export default Detail
