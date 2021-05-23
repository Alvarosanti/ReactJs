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
          if(items.length < 10){
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
      console.log('filtro cart context',filtro);
    }

    function precioTotal(){
      const ptotal = items.reduce((a,b) => (a+(b.price * b.cant)),0)
      return ptotal;
    }

    const removeItem = (item) =>{
      const itemInCart = items.filter(x => x.id !== item);
      setItems(itemInCart);

    }

    function counterCartItem(){
      const unid = items.reduce((a,b)=>(a + b.cant),0)
      return unid;
    }

    return (
        <div>
            <CartContext.Provider value={{items , addItems,vacio,precioTotal,removeItem,counterCartItem}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}
