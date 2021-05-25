import React from 'react'
import img from '../assets/lamps/lamp1.png'
import ItemCount from '../components/ItemCount'
import '../container/Detail.css'
import { Link } from 'react-router-dom';

const Detail = ({detalle,items,onAdd}) => {
    console.log('datadetailin detail: ', detalle);

    return (
        <div className="details" key={detalle._id}>
            <div className="big-img">
                <img className="card-img-top" src={img} alt="imagenmodel"></img>
            </div>

            <div className="box">
                <span>Categoria: <Link class="text-dark d-inline-block " to={`/category/${detalle.categoryId}`}>{detalle.categoryId}</Link>
                </span>
                    <h2>{detalle.description}</h2>
                    <span>Precio: ${detalle.price}</span>
                    <p>Stock: {detalle.stockQ}</p>
                <ItemCount onAdd = {onAdd} items= {detalle.items} stockQ = {detalle.stockQ}/>
                </div>
            </div>
 
      

    )
}

export default Detail
