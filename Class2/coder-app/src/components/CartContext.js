import React,{useState,useEffect,useContext }from 'react'

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export function CartContext1({children}) {
    const [items, setItems] = useState([]);
    const [vacio, setVacio]= useState(false);

    useEffect(() => {

    }, [items])

    const addItems = (count, dataSet) => {
        if(isInCart(dataSet.id)){
          getQuantity(dataSet,count)
          console.log(dataSet)
        }
        else{
          if(items.length < dataSet.stockQ){
            setItems([...items, {...dataSet, cant: count}]);
          }
        }
        setVacio(true)
        console.log('dataset in cart context:',dataSet)
        console.log('cart items: raa',items);
        console.log()
    };

    // si esta en el carrito es true
    const isInCart = (id) =>{
      const enElCart = items.some(x=>x.id === id);
      console.log('isInCart',enElCart);
      return enElCart;
    } 
    
    const getQuantity=(dataSet,count)=>{
      const filtro = [...items];
        filtro.forEach(i => {
          if(i.id === dataSet.id){
            if((i.cant += count) >= dataSet.stockQ){
              i.cant = dataSet.stockQ; 
            }
          }  
      })
      setItems(filtro);
    }

    return (
        <div>
            <CartContext.Provider value={{items , addItems,vacio}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}
