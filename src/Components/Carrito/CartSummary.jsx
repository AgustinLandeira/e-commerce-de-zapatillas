import { UsarCarrito } from "../../context/CarritoContexto"

import "./Cart.css"
import { CartBuy } from "./CartBuy"

export const CartSummary = ()=>{

    const {calcularTotal} = UsarCarrito()

    const totalAPagar = calcularTotal()

    return(

        <div className="Contenedor-pagar">

            <h3>Total a pagar: {totalAPagar}</h3>

            <CartBuy monto={totalAPagar}  />

        </div>
    )
}