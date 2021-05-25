import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';
import {getFirebase, getFirestore} from '../firebase'
import { useParams } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const Catalogo = () =>{
    const[data,setData] = useState([]);
    const {id} = useParams();
    const [loading,setLoading] = useState(false);
    // estilo loading material ui
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
      }));
      const classes = useStyles();

    useEffect(()=>{
        setLoading(true);
            const db = getFirestore();
            const itemsCollection = db.collection("items");
            const itemsFiltered = id ? itemsCollection.where('categoryId','==',id) : itemsCollection;
            itemsFiltered.get()
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
            data.length && setLoading(false);
        },[data]);

    return(
        <>
            <div className="container">
                <div className="row">    
                {
                loading ? <Backdrop className={classes.backdrop} open ><CircularProgress color="inherit" /> Cargando...</Backdrop>
                        : <ItemList productos = {data}/>
                }
              </div>
          </div>
        </>
    )
}

export default Catalogo;