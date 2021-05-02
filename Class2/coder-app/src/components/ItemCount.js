import React, {useState} from 'react'

const ItemCount = ({items,stockQ}) => {

    const [item, setItem] = useState(0);
    const [stock, setStock] = useState(0);

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
                    <button className="btn btn-secondary btn-sm rounded-circle" OnClick={restar} disabled = {item === 0}>&nbsp;-&nbsp;</button>
                    <span  type="number"> {item} </span>
                    <button className="btn btn-secondary btn-sm rounded-circle" OnClick={sumar} disabled = {item === stockQ}>+&nbsp;</button>
                </div>
                <small id="passwordHelpBlock" class="form-text text-muted text-center">
                    (Nota, precio x unidad)
                </small>
            </div>
        </div>
    )
}

export default ItemCount;