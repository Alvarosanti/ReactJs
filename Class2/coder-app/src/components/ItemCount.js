import React, {useState} from 'react'
import Count from './Count'

const ItemCount = ({items,stockQ,onAdd}) => {

    const [item, setItem] = useState(0);

    function sumar(){
        setItem(item+1);
    }
    function restar(){
        setItem(item-1);
    }

    return (
        <div>
            <div>
                <div class="def-number-input number-input safari_only mb-0 w-100">
                    <button className="btn btn-secondary btn-sm rounded-circle" onClick={restar} disabled = {item === 0}>&nbsp;-&nbsp;</button>
                    <span  type="number"> {item} </span>
                    <button className="btn btn-secondary btn-sm rounded-circle" onClick={sumar} disabled = {item === stockQ}>+&nbsp;</button>
                </div>
                <small id="passwordHelpBlock" className="form-text text-muted text-left">
                    (Nota, precio x unidad)
                </small>
            </div>
            {/* <link to='/cart'> 
                <button onAdd={onAdd} className="btn btn-outline-warning rounded-pill">Comprar</button>
            </link> */}
            <Count item = {item} stockQ = {stockQ} onAdd={onAdd}/>
        </div>
    )
}

export default ItemCount;