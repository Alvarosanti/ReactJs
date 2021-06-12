import React,{useState,useEffect,useContext }from 'react'
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export function CartContext1({children}) {
    const [items, setItems] = useState(localStorage.getItem('items')
                                        ? JSON.parse(localStorage.getItem('items'))
                                        :[]);
    const [vacio, setVacio]= useState(false);
    const [orderId,setOrderId] = useState('');
    const [ dataUsr ,setDataUsr] = useState({name:'',lastname:'',email:'',dni:''});
    const totalAPagar = precioTotal();
    useEffect(() => {
        localStorage.setItem('items',JSON.stringify(items));
        console.log('items en localstorage',items)
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

    const removeAllItems = () =>{
      setItems([])
    }

    function counterCartItem(){
      const unid = items.reduce((a,b)=>(a + b.cant),0)
      return unid;
    }

    function onChangeDato(e){
      e.preventDefault();
      setDataUsr({
          ...dataUsr,
          [e.target.name]:e.target.value
      });
  }
    const onSubmit = ()=> {
      handleCompra()
   
  console.log('data usuario in onsubmit');
  
}
  async function handleCompra(){
      const db = getFirestore();
      const orders = db.collection("orders");
      console.log('in handle compra checkoutcontainer')
  const order = {
    buyer:[dataUsr],
    items,
    totalAPagar,
    date: firebase.firestore.Timestamp.fromDate(new Date())
  }
      // items.length && setOrder(order);
    orders.add(order)
    .then((order)=>{setOrderId(order.id)})
    
  }
    return (
        <div>
          {
            <CartContext.Provider value={{items , addItems,vacio,precioTotal,removeItem,counterCartItem,onSubmit,onChangeDato,dataUsr,orderId,removeAllItems}}>
                {children}
            </CartContext.Provider>
          }
        </div>
    )
}
