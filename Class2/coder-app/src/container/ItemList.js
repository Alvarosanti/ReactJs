import React from 'react'
import Item from './Item'

const ItemList = (productos) =>{
    return(
        <>
            <div>Catalogo</div>
            {productos.map = ((data)=>
                <div id = {data.id}>
                    <Item tittle = {data.tittle} description = {data.description} price = {data.price} picture = {data.picture}/>
                </div>
            )}
        </>
    )
}
export default ItemList;