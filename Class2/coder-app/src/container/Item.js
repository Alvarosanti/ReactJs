import React from 'react';

const Item = ({tittle,description,price,picture}) =>{
    return(
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
            <div class="card">
            <img src={picture} class="card-img-top" alt="picture-product"/>
                <div class="card-body">
                    <h5 class="card-title">{tittle}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text">{price}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default  Item;