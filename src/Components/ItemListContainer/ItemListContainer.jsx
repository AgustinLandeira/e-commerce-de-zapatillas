import { useEffect, useState } from "react"
import {Itemlist} from '../ItemList/ItemList'

import {getProducts} from '../../service/productsService'
import { SpinnerLoader } from "../SpinnerLoader/SpinnerLoader"

export const ItemListContainer = ()=>{

    const [products,setProducts] = useState(null)
    const [load,setLoad] = useState(true)
    const [error,setError] = useState(null)


    useEffect(()=>{

        // ACA REEMPLAZO EL FETCH Y USO LA FUNCION GET PRODUCTOS
        getProducts()
        .then(data =>setProducts(data))
        .catch(err =>setError(err))
        .finally(()=>setLoad(false))

    },[])

    if(load){return(
        <SpinnerLoader/>
    )}

    if(error){return <p>Error: {error}</p>}

    return(

        <>
        
            <Itemlist listaProductos={products}></Itemlist>    
        </>
    )



}