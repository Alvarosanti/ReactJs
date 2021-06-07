import React from 'react'
import CheckOut from '../container/Checkout';
import { useCartContext } from '../components/CartContext';
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';

const CheckoutContainer = () => {
    const { items, precioTotal } = useCartContext();
    const [ dataUsr ,setDataUsr] = useState({name:'',lastname:'',email:'',dni:''});
	const totalAPagar = precioTotal();
	

    function onChangeDato(e){
        e.preventDefault();
        setDataUsr({
            ...dataUsr,
            [e.target.name]:e.target.value
        });
    }
    console.log('data usr in checkoutcontainer: ',...dataUsr);
    console.log('data usr in checkoutcontainer ee: ',e);

	// const onSubmit = ()=> {
    //     handleCompra()
	// 	console.log('data usuario in onsubmit');
		
	// }
    // async function handleCompra(){
    //     const db = getFirestore();
    //     const orders = db.collection("orders");
    //     console.log('in handle compra checkoutcontainer')
	// 	let order = {
	// 		buyer:[dataUsr],
	// 		items,
	// 		totalAPagar,
	// 		date: firebase.firestore.Timestamp.fromDate(new Date())
	// 	}
    //     items.length && setOrder(order);
	// 		orders.add(order)
	// 		.then((order)=>{console.log('id order en then,',order.id)})
    // }
    
	// useEffect(() =>{
	// 	if(order.items){
	// 		orders.add(order)
	// 		.then((order)=>{console.log('id order en then,',order.id)})
	// 		.catch((err)=>{console.log('err: ',err)})
	// 	}
	// },[]);

    return (
            <CheckOut onChangeDato={onChangeDato} onSubmit={onSubmit}/>
    )
}

export default CheckoutContainer
