import React from 'react'

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export function CartContext() {
    return (
        <div>
            
        </div>
    )
}
