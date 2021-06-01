import React,{ useState, useContext } from 'react'
import {useCartContext} from '../components/CartContext'
import Login from './Login'

const ProcceedCheckoutContainer = () => {
    const {items, precioTotal} = useCartContext();
    const [usuarioCompra, setUsuarioCompra] = useState({nombres:'',apellidos,email,contrasena,dni});

    function dataUser(e){
        let u ;
        setUsuarioCompra({
            ...usuarioCompra,
            u = e.target.value
        });
        console.log('usuusususususu',u);
        console.log('data user in proceed checkout',dataUser)
    console.log('usuario compra in proceed checkout',usuarioCompra)
    console.log('setUsuarioCompra in proceed checkout',setUsuarioCompra)
    }
    
    return (
        <div>
            <Login dataUser={dataUser} />
            {/* va a la vista login o create account */}
        </div>
    )
}

export default ProcceedCheckoutContainer
