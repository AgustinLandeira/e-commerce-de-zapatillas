import { UsarCarrito } from "../../context/CarritoContexto"
import { CartItem } from "./CartItem"
import "./Cart.css"

export const CartList = ()=>{

    const {carrito} = UsarCarrito()
    console.log(carrito)

    return(
        <div className="contenedor-productos">
            {carrito.map((item)=>(
                <CartItem key={item.id} item={item}></CartItem>
            ))}
        </div>
    )

}