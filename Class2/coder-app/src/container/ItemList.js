import React from 'react';
import Item from './Item';


const ItemList = ({productos}) =>{
    console.log('products in item list js',productos)
    return(
        <>
         <div className="container text-center mt-5"> 
            <h1>Catalogo</h1>
         </div>
            {
                productos.map((data)=>
                    <div key = {data.id} className="col-lg-3 shop-info-grid mt-5">
                        <Item id={data.id} tittle = {data.tittle} description = {data.description} price = {data.price} stockQ = {data.stockQ}/>
                    </div>
            )}
        </>
    )
}

export default ItemList;