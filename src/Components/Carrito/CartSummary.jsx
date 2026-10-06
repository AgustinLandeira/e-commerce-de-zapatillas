import { UsarCarrito } from "../../context/CarritoContexto"

import "./Cart.css"

export const CartSummary = ()=>{

    const {calcularTotal} = UsarCarrito()

    const totalAPagar = calcularTotal()

    return(

        <div className="Contenedor-pagar">

            <h3>Total a pagar: {totalAPagar}</h3>

        </div>
    )
}