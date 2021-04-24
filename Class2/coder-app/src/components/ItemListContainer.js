import React from 'react'

export const ItemListContainer = ({ greeting }) =>{
    console.log(greeting);
    return(
        <h2 className="mt-5">
            {greeting}
        </h2>
    )
}