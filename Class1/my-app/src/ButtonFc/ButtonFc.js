import React from 'react'
import './button.css'

// componente funcional
const ButtonFc = ({text,color}) => {
    // console.log('Props del FC', text.value,color.value)
    return(
        <button className='radius' style ={{background: color}}>
            {text}           
        </button>
    );
}
export default ButtonFc;