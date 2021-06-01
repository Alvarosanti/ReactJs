import React, {useState,useEffect,useContext} from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom';
import { useCartContext} from '../components/CartContext'
import {Link} from 'react-router-dom';
import {getFirebase, getFirestore} from '../firebase'

const ItemDetailContainer = () => {
    // salva y setea data
    const[dataSet,setData] = useState({});
    // devuelve un array de la variable id
    const {id} = useParams(); 
    // trae data del cartcontext
    const {addItems,items} = useCartContext()
    
    console.log('id prop idetailcontainer: ',id);
    console.log('dataset in item detail container js',dataSet,'----------------')
   
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        const itemDetail = itemsCollection.doc(id);
        // const itemsFiltered = itemsCollection.where('price','>',30);
        console.log('item detail container id', itemDetail);
        itemDetail.get()
            .then((querySnapshot)=>{
                querySnapshot.size == 0 ? console.log("no hay items") : console.log(`hay ${querySnapshot.size} items`);
                const documentos = {
                    id: querySnapshot.id,
                    ...querySnapshot.data()
                }
                setData(documentos);
                console.log('documentos',documentos);
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
