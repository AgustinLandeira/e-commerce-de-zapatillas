import { useState } from "react"
import { useNavigate } from "react-router-dom"

import './ProductFormContainer.css'
import { ProductFormUI } from "./ProductFormUI"
import { validateProducts } from "../../../utils/validateProducts"
import { uploadImage } from "../../../service/uploadImage"
import { createProduct } from "../../../service/productsService"

export const ProductFormContainer = ()=>{

    const navigate = useNavigate()  //me lleva a ua ruta despues de un evento

    const [loading,setLoading] = useState(false)
    const [errors,setErrors] = useState({})
    const [file,setFile] = useState(null)

    // - --------------------- REVISAR LOS CAMPOS ---------------------------------------
    const [product,setProduct] = useState({
        nombre:"",
        precio:"",
        marca:"",
        stock:""
    })

    const handleChange = (e)=>{

        const {name,value} = e.target;
        setProduct({...product,[name]:value})
    }

    const handleFileChange = (e)=>{
        
        const file = e.target.files[0] || null
        console.log("Guarde algo en file")
        console.log(file)
        setFile(file)
    }

    const handleSubmit = async (e)=>{

        e.preventDefault(); //para prevenir el comportamiento por defecto

        setErrors({})
        setLoading(true)

        //validamos inpus

        const newErrors = validateProducts({...product,imagen:file})

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            setLoading(false)
            return;
        }

        try{
            //subir imagenes
            const urlImg = await uploadImage(file)

            //armar estructura del producto
            const productoNuevo = {
                ...product,
                precio: Number(product.precio)
                ,imagen:urlImg
            }

            //alta
            const productoID = await createProduct(productoNuevo)
            console.log(productoID)

            //Vaciar el formulario
            setProduct({
                nombre:"",
                precio:"",
                categoria:"",
                descripcion: ""
            })

            setFile(null)
            navigate(`/admin/producto/altaExito/${productoID}`,{replace:true})
        }catch(error){
            setErrors({ general: error.message });           
        }finally{
            setLoading(false)
        }
        
        //navegar a la pagina de exito
        
    }

    return (
        <ProductFormUI product={product} errors={errors} loading={loading} onChange={handleChange} onFileChange={handleFileChange} onSubmit={handleSubmit}/>
    )
}