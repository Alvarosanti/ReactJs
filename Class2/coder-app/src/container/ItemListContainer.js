import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';
import {getFirebase, getFirestore} from '../firebase'
import { useParams } from 'react-router-dom';

const Catalogo = () =>{
    const[data,setData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        // const itemsFiltered = itemsCollection.where('price','>',30);
        itemsCollection.get()
            .then((querySnapshot)=>{
                querySnapshot.size == 0 ? console.log("no hay items") : console.log(`hay ${querySnapshot.size} items`);
                const documentos = querySnapshot.docs.map((doc)=>{
                    console.log('docs',doc);
                    // guarda el estado local con el id random
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                setData(documentos);
                console.log('documentos',documentos);
            })
            .catch((err) => console.log("error",err))
            .finally(() => console.log("finally"));
        },[id]);

        useEffect(()=>{
            data.length && console.log('data',data)
        },[data]);

    return(
        <>
            <div className="container">
                <div className="row">    
                <ItemList productos = {data}/>
              </div>
          </div>
        </>
    )
}

export default Catalogo;