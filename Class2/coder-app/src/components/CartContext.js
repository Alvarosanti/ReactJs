import React,{useState,useEffect,useContext }from 'react'

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export function CartContext1({children}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    
}, [items]);
    return (
        <div>
            <CartContext.Provider value={{items}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}
