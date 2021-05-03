import React from 'react'
import img from '../assets/lamps/lamp1.png'

const Detail = ({detalle}) => {
    console.log('datadetailin detail: ', detalle.id);

    return (
            <div >
                <h1>{detalle.tittle}</h1>
                <img className="card-img-top" src={img} alt="imagenmodel"></img>
                <p>{detalle.description}</p>
                <p>Precio: {detalle.price} USD</p>
                <p>Stock: {detalle.stockQ} unidades</p>
            </div>
    )
}

export default Detail
