import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { ProductFormUI } from "./ProductFormUI"

export const ProductFormContainer = ()=>{

    const navigate = useNavigate() // me lleva a ua ruta despues de un evento

    const [loading,setLoading] = useState(false)
    const [errors,setErrors] = useState({})
    const [file,setFile] = useState(null)

    // - --------------------- REVISAR LOS CAMPOS ---------------------------------------
    const [product,setProduct] = useState({
        nombre:"",
        precio:"",
        categoria:"",
        descripcion: ""
    })

    const handleChange = (e)=>{

        const {name,value} = e.target;
        setProduct({...product,[name]:value})
    }

    const handleFileChange = (e)=>{
        
        const file = e.target.files[0] || null
        setFile(file)
    }

    const handleSubmit = (e)=>{

        e.preventDefault(); //para prevenir el comportamiento por defecto

        setErrors({})
        setLoading(true)

        //validamos inpus

        //subir imagenes

        //armar estructura del producto

        //alta

        //baciar el formular

        //navegar a la pagina de exito
        
    }

    return (
        <ProductFormUI product={product} errors={errors} loading={loading} onChange={handleChange} onFileChange={handleFileChange} onSubmit={handleSubmit}/>
    )
}