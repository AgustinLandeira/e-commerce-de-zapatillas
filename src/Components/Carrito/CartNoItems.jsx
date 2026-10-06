import { Link } from "react-router-dom"
import "./Cart.css"
export const CartNoItems = () =>{

    return(
        <>
        
            <p>No hay productos para mostrar.</p>

            <button><Link to={"/productos"}>Volver</Link></button>        
        </>
    )
}