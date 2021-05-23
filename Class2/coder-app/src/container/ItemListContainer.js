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
            })
            .catch((err) => console.log("error",err))
            .finally(() => console.log("finally"));
        },[id]);

        useEffect(()=>{
            data.length && console.log('',data)
        },[data]);

    // useEffect(()=>{
    //     const prom = new Promise((resolve,reject)=>{
    //         const catalogo = [
    //             {
    //                 id: 1,
    //                 tittle: 'Lampara vintage 1',
    //                 description: 'Lampara para todo ambiente',
    //                 price: 59.99,
    //                 stockQ: 50,
    //                 pictures:"./assets/lamps/lamp1.png"
    //             },
    //             {
    //                 id: 2,
    //                 tittle: 'Lampara vintage 2',
    //                 description: 'Lampara para dormitorio',
    //                 price: 49.99,
    //                 stockQ: 42,
    //                 pictures:"./assets/lamps/lamp2.png"
    //             },
    //             {
    //                 id: 3,
    //                 tittle: 'Lampara vintage 3',
    //                 description: 'Lampara para salon',
    //                 price: 89.99,
    //                 stockQ: 26,
    //                 pictures:"./assets/lamps/lamp2.png"
    //             },
    //             {
    //                 id: 4,
    //                 tittle: 'Lampara vintage 4',
    //                 description: 'Lampara para terraza',
    //                 price: 69.99,
    //                 stockQ: 34,
    //                 pictures:"./assets/lamps/lamp2.png"
    //             },
    //             {
    //                 id: 5,
    //                 tittle: 'Lampara vintage 5',
    //                 description: 'Lampara para garage',
    //                 price: 29.99,
    //                 stockQ: 47,
    //                 pictures:"./assets/lamps/lamp2.png"
    //             },
    //             {
    //                 id: 6,
    //                 tittle: 'Lampara vintage 6',
    //                 description: 'Lampara para comedor',
    //                 price: 39.99,
    //                 stockQ: 12,
    //                 pictures:"./assets/lamps/lamp2.png"
    //             },
    //             {
    //                 id: 7,
    //                 tittle: 'Lampara vintage 7',
    //                 description: 'Lampara para baño',
    //                 price: 19.99,
    //                 stockQ: 29,
    //                 pictures:"./assets/lamps/lamp2.png"
    //             },
    //             {
    //                 id: 8,
    //                 tittle: 'Lampara vintage 3',
    //                 description: 'Lampara para dormitorio',
    //                 price: 39.99,
    //                 stockQ: 16,
    //                 pictures:"./assets/lamps/lamp2.png"
    //             }
    //         ];
    //         setTimeout(()=>{
    //             resolve(catalogo);
    //         },1000);
    //     })
    //     prom.then((data)=>{
    //         setData(data);
    //     })
    //     .catch(()=>{
    //         console.log('catch');
    //     })
    //     .finally(()=>{
    //         console.log('Finally')
    //     })
    // },[])
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