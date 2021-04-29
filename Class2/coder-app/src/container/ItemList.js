import React from 'react';
import Item from './Item'


const ItemList = ({productos}) =>{
    return(
        <>
         <div className="container text-center"> 
            <h1>Catalogo</h1>
         </div>
            {
                productos.map((data)=>
                            <div id = {data.id} className="col-lg-3 shop-info-grid mt-4">
                                <Item  tittle = {data.tittle} description = {data.description} price = {data.price} picture={data.pictures}/>
                            </div>
            )}
        </>
    )
}

export default ItemList;