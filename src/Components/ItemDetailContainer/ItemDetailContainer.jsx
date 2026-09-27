import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';

import { BeatLoader } from "react-spinners";

export const ItemDetailContainer = ()=>{
    const {id} = useParams();

    const [itemDetail,setItemDetail] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading]= useState(true)

    useEffect(()=>{

        setLoading(true)
        setError(null)
        setItemDetail(null)

        fetch("/data/productos.json")
        .then((res)=>{

            if(!res.ok){
                throw new Error()
            }

            return res.json()
        }).then((data)=> {

            const producto = data.find((product)=> String(product.id )===id)
            console.log(producto)
            setItemDetail(producto)
        }).catch((err)=>setError(err.message))
        .finally(()=>setLoading(false))

    },[id])

    if(loading){return(
        
        <BeatLoader color="#1015f4" speedMultiplier={0.8} />
    )}

    if(error){return <p>Error: {error}</p>}

    return(

        <section className='producto-container'>

            <ItemDetail item={itemDetail}/>

        </section>
    )
}