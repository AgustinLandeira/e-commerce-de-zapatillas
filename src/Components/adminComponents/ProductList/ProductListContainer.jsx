import { useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../../../service/productsService"
import { SpinnerLoader } from "../../SpinnerLoader/SpinnerLoader"
import { ProductList } from "./ProductList"

export const ProductListContainer = ()=>{

    const [products,setProducts] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{

        getProducts().then(data =>setProducts(data))
        .catch(error => setError(error))
        .finally(()=>setLoading(false))

    },[])

    const eliminarProducto = async(id) =>{

        try{

            await deleteProduct(id)

            setProducts(products.filter(product => product.id != id))

        }catch(error){
            console.log("error al eliminar producto",error)
            throw error
        }

    }

    if(loading){
        return <SpinnerLoader/>
    }

    if(error){return <p>Error: {error}</p>}

    return(
        <>
        
        <ProductList listaProductos={products} eliminarProducto={eliminarProducto}/>
        
        </>
    )

}