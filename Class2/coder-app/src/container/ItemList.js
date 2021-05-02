import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList = ({productos}) =>{
    return(
        <>
         <div className="container text-center mt-5"> 
            <h1>Catalogo</h1>
         </div>
            {
                productos.map((data,idx)=>
                    <div id = {data.id} className="col-lg-3 shop-info-grid mt-5">
                        <Link key={idx} to={`catalogo/${idx}`}>
                            <Item  tittle = {data.tittle} description = {data.description} price = {data.price} stockQ = {data.stockQ}/>
                        </Link>
                    </div>
            )}
        </>
    )
}

export default ItemList;