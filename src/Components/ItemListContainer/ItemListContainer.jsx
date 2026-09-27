import { useEffect, useState } from "react"
import { Itemlist } from "../ItemList/ItemList"

import './ItemListContainer.css'

import { RingLoader } from "react-spinners";

export const ItemListContainer = ()=>{

    const [products,setProducts] = useState(null)
    const [load,setLoad] = useState(true)
    const [error,setError] = useState(null)


    useEffect(()=>{

        fetch("/data/productos.json")
        .then((response)=>{

            if(!response.ok){

                throw new Error()
            }
            return response.json()
        })
        .then(data =>setProducts(data))
        .catch(err =>setError(err))
        .finally(()=>setLoad(false))

    },[])

    if(load){return(
        <div className="loader-container">
            

            <RingLoader color="#0d11c6" size={96} />
        </div>
    )}

    if(error){return <p>Error: {error}</p>}

    return(

        <>
        
            <Itemlist listaProductos={products}></Itemlist>    
        </>
    )



}