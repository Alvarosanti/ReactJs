import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';

const Catalogo = () =>{
    const[data,setData] = useState([]);

    useEffect(()=>{
        const prom = new Promise((resolve,reject)=>{
            const catalogo = [
                {
                    id: 1,
                    tittle: 'Lampara vintage 1',
                    description: 'Lampara para todo ambiente',
                    price: 30,
                    stockQ:10,
                    pictures:"./assets/lamps/lamp1.png"
                },
                {
                    id: 2,
                    tittle: 'Lampara vintage 2',
                    description: 'Lampara para dormitorio',
                    price: 30,
                    stockQ:10,
                    pictures:"./assets/lamps/lamp2.png"
                },
                {
                    id: 3,
                    tittle: 'Lampara vintage 3',
                    description: 'Lampara para dormitorio',
                    price: 30,
                    stockQ:10,
                    pictures:"./assets/lamps/lamp2.png"
                },
                {
                    id: 4,
                    tittle: 'Lampara vintage 3',
                    description: 'Lampara para dormitorio',
                    price: 30,
                    stockQ:10,
                    pictures:"./assets/lamps/lamp2.png"
                },
                {
                    id: 5,
                    tittle: 'Lampara vintage 3',
                    description: 'Lampara para dormitorio',
                    price: 30,
                    stockQ:10,
                    pictures:"./assets/lamps/lamp2.png"
                },
                {
                    id: 6,
                    tittle: 'Lampara vintage 3',
                    description: 'Lampara para dormitorio',
                    price: 30,
                    stockQ:10,
                    pictures:"./assets/lamps/lamp2.png"
                },
                {
                    id: 7,
                    tittle: 'Lampara vintage 3',
                    description: 'Lampara para dormitorio',
                    price: 30,
                    stockQ:10,
                    pictures:"./assets/lamps/lamp2.png"
                },
                {
                    id: 8,
                    tittle: 'Lampara vintage 3',
                    description: 'Lampara para dormitorio',
                    price: 30,
                    stockQ:10,
                    pictures:"./assets/lamps/lamp2.png"
                }
            ];
            setTimeout(()=>{
                resolve(catalogo);
            },2000);
        })
        prom.then((ewa)=>{
            setData(ewa);
        })
        .catch(()=>{
            console.log('catch');
        })
        .finally(()=>{
            console.log('Finally')
        })
    },[])
    return(
        <>
            <div className="container">
                <div className="row">    
                <ItemList productos={data}/>
              </div>
          </div>
        </>
    )
}

export default Catalogo;