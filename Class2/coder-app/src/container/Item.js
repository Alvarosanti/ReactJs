import React from 'react';
import img from '../assets/lamps/lamp1.png'

const Item = ({pictures,tittle,description,price}) =>{
    return(
        // <div className="row row-cols-1 row-cols-md-2">
        //     <div className="col mb-4">
        //         <div className="card">
        //         <img src= {pictures} className="card-img-top" alt="lamps"/>
        //             <div class="card-body">
        //                 <h5  className="card-title">{tittle}</h5>
        //                 <p className="card-text">{description}</p>
        //                 <p  className="card-text">{price}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    
            <div className="card"> 
                <div className="card-body">
                    <h4 className="card-tittle">{tittle}</h4>
                    <img className="card-img-top" src={img}></img>
                    <p className="card-text text-secondary">{description}</p>
                    <p className="card-text">{price}</p>
                </div>
            </div>
     
            
    )
}
export default  Item;