import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getProductByID } from "../../service/productsService";
import { SpinnerLoader } from "../SpinnerLoader/SpinnerLoader";

import './ProductSucces.css'

export const ProductSuccess = ()=>{
    
    const {id} = useParams();
    console.log("ID obtenido: ")
    console.log(id)
    const [producto,setProducto] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{

        setLoading(true)
        setError(null)
        setProducto(null)

        getProductByID(id).then((data)=>{
            setProducto(data)
        })
        .catch((err)=>setError(err.message))
        .finally(()=>setLoading(false))
    },[id])

    if(loading){return <SpinnerLoader/>}
    if(error){return <p>Error:{error}</p>}
    return (

        <div className="success-container">

            <section className="success-card">

                <div className="success-icon">
                    ✓
                </div>

                <h1>¡Producto agregado con éxito!</h1>

                <p className="success-message">
                    El nuevo producto ya se encuentra registrado en All Shoes.
                </p>

                <div className="success-product">

                    <div className="success-product-image">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                        />
                    </div>

                    <div className="success-product-info">

                        <span className="success-label">
                            PRODUCTO REGISTRADO
                        </span>

                        <h2>{producto.nombre}</h2>

                        <p className="success-brand">
                            {producto.marca}
                        </p>

                        <p className="success-price">
                            ${Number(producto.precio).toLocaleString("es-AR")}
                        </p>

                        <p className="success-stock">
                            Stock disponible: {producto.stock}
                        </p>

                    </div>

                </div>

                <div className="success-actions">

                    <Link to="/admin/producto/alta" className="success-button primary">Cargar otro producto</Link>

                    <Link to="/productos" className="success-button primary">
                        Ver productos
                    </Link>

                    <Link to="/" className="success-button secondary">
                        Volver al inicio
                    </Link>

                </div>

            </section>

        </div>
    )
}