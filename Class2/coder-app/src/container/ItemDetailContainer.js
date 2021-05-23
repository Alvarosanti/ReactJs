import React, {useState,useEffect,useContext} from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom';
import { useCartContext} from '../components/CartContext'
import {Link} from 'react-router-dom';
import {getFirebase, getFirestore} from '../firebase'

const ItemDetailContainer = () => {
    
    const[dataSet,setData] = useState({});
    const {id} = useParams(); 
    const {addItems,items} = useCartContext()
    
    console.log('id prop idetailcontainer: ',id);
    
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        itemsCollection.get()
            .then((querySnapshot)=>{
                querySnapshot.size == 0 ? console.log("no hay items") : console.log(`hay ${querySnapshot.size} items`);
                const documentos = querySnapshot.docs.map((doc)=>doc.data());
                console.log('docs',documentos);
                setData(documentos);
            })
            .catch((err) => console.log("error",err))
            .finally(() => console.log("finally"));
        },[id]);
       
        const onAdd = (count) => {
            addItems(count,dataSet)
        }
        console.log('Dataset i detail container to addItems: ',dataSet);

    return (
        <>
           {
                <div className="col-lg-6 shop-info-grid mt-5">
                    <div className="row">    
                    <Detail onAdd={onAdd} detalle = {dataSet} />
                    {/* <Link to={"/cart"}>
                        <button>Terminar Agregar al carrito</button>
                    </Link> */}
                    </div>
                </div>
            }
       </>
    )
}

export default ItemDetailContainer;
