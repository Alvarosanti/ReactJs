import React, {useState,useEffect} from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom';
import { useCartContext} from '../components/CartContext'

const ItemDetailContainer = () => {
    
    const[dataSet,setData] = useState({});
    const {id} = useParams(); 
    const {addItems,items} = useCartContext;
    console.log('id prop idetailcontainer: ',id);
    useEffect(()=>{
        const getItem = () =>{
            return new Promise((resolve,reject)=>{
                const catalogo = [
                    {
                        id: 1,
                        tittle: 'Lampara vintage 1',
                        description: 'Lampara para todo ambiente',
                        price: 59.99,
                        stockQ: 50,
                        pictures:"./assets/lamps/lamp1.png"
                    },
                    {
                        id: 2,
                        tittle: 'Lampara vintage 2',
                        description: 'Lampara para dormitorio',
                        price: 49.99,
                        stockQ: 42,
                        pictures:"./assets/lamps/lamp2.png"
                    },
                    {
                        id: 3,
                        tittle: 'Lampara vintage 3',
                        description: 'Lampara para salon',
                        price: 89.99,
                        stockQ: 26,
                        pictures:"./assets/lamps/lamp2.png"
                    },
                    {
                        id: 4,
                        tittle: 'Lampara vintage 4',
                        description: 'Lampara para terraza',
                        price: 69.99,
                        stockQ: 34,
                        pictures:"./assets/lamps/lamp2.png"
                    },
                    {
                        id: 5,
                        tittle: 'Lampara vintage 5',
                        description: 'Lampara para garage',
                        price: 29.99,
                        stockQ: 47,
                        pictures:"./assets/lamps/lamp2.png"
                    },
                    {
                        id: 6,
                        tittle: 'Lampara vintage 6',
                        description: 'Lampara para comedor',
                        price: 39.99,
                        stockQ: 12,
                        pictures:"./assets/lamps/lamp2.png"
                    },
                    {
                        id: 7,
                        tittle: 'Lampara vintage 7',
                        description: 'Lampara para baño',
                        price: 19.99,
                        stockQ: 29,
                        pictures:"./assets/lamps/lamp2.png"
                    },
                    {
                        id: 8,
                        tittle: 'Lampara vintage 3',
                        description: 'Lampara para dormitorio',
                        price: 39.99,
                        stockQ: 16,
                        pictures:"./assets/lamps/lamp2.png"
                    }
                ];
                setTimeout(()=>{
                    resolve(catalogo);
                },100);
            })
        }
        getItem().then(dato=>{
                const traedata = dato.filter(item => item.id == `${id}`)
                console.log('data filtrada',traedata)
                setData(traedata[0]);
            })
        },[])
        console.log('data IDContainer',dataSet[0]);
        console.log('data IDContainer 2',dataSet );
        const onAdd = (count) => {
            addItems(count,dataSet[0])

        }

    
    return (
        <>
           {
                <div className="col-lg-6 shop-info-grid mt-5">
                    <div className="row">    
                    <Detail detalle = {dataSet} />
                    </div>
                </div>
            }
       </>
    )
}

export default ItemDetailContainer
