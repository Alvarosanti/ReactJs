import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';

const Catalogo = () =>{
    const[data,setData] = useState([]);
    useEffect(()=>{
        const prom = new Promise((resolve,reject)=>{
            const catalogo = [
                {
                    id: 1,
                    tittle: 'Lampara vintage',
                    description: 'Lampara para todo ambiente',
                    price: 30,
                    pictureUrl:'../assets/lamps/lamp1'
                },
                {
                    id: 2,
                    tittle: 'Lampara vintage',
                    description: 'Lampara para todo ambiente',
                    price: 30,
                    pictureUrl:'../assets/lamps/lamp2'
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
        <div>
            {/* {data.length > 0    ? <ItemList productos={data} /> : <img src={catalogo} } */}
            <ItemList productos={data} />
        </div>
    )
}
export default Catalogo;