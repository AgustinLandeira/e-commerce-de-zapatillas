import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { SpinnerLoader } from '../SpinnerLoader/SpinnerLoader';

import {getProductByID} from '../../service/productsService'

export const ItemDetailContainer = ()=>{
    const {id} = useParams();

    const [itemDetail,setItemDetail] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading]= useState(true)

    // CAMBIAR ACA POR LA FUNCION EN EL ARCHIVO DE FIREBASE

    useEffect(()=>{

        setLoading(true)
        setError(null)
        setItemDetail(null)

        getProductByID(id)
        .then((data)=> {

            setItemDetail(data)
        }).catch((err)=>setError(err.message))
        .finally(()=>setLoading(false))

    },[id])

    if(loading){return <SpinnerLoader></SpinnerLoader>}

    if(error){return <p>Error: {error}</p>}

    return(

        <section className='producto-container'>

            <ItemDetail item={itemDetail}/>

        </section>
    )
}