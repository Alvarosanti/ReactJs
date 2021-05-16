import React from 'react'
import img from '../assets/lamps/lamp1.png'
import ItemCount from '../components/ItemCount'
const Detail = ({detalle,items}) => {
    console.log('datadetailin detail: ', detalle.id);

    return (
        <div className="">
            <h1>{detalle.tittle}</h1>
            <img className="card-img-top" src={img} alt="imagenmodel"></img>
            <p>{detalle.description}</p>
            <p>Stock: {detalle.stockQ} unidades</p>
            <p>Precio: {detalle.price} USD</p>
            <ItemCount items= {detalle.items} stockQ = {detalle.stockQ}/>
            <button className="btn btn-outline-warning rounded-pill">Agregar al carrito</button>
        </div>
    )
}

export default Detail
