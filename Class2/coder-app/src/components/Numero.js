import React, { useState, useEffect} from 'react'

const Numero = ({Name}) => {
    const [numero,setNumero] = useState(2);

    // algo asincrono
    useEffect(()=>{
        console.log('Muestra 1 sola vez');
        return()=>{
            console.log('Cuando me desmonte');
        }
    },[])

    // sin param final
    useEffect(()=>{
        console.log('En cada renderizado');
    })

    useEffect(()=>{
        console.log('Cuando numero cambie')
    },[Name])

    const handleNumero = () =>{
        setNumero(numero + 1)
    }

    return(
        <React.Fragment>
            <h2>Contador {numero}</h2>
            <button onClick={handleNumero} >Incrementar +1</button>
        </React.Fragment>
    )
}
export default Numero;


