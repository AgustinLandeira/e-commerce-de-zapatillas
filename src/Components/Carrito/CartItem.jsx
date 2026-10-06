import { UsarCarrito } from "../../context/CarritoContexto"
import { Item } from "../Item/Item"
import "./Cart.css"

export const CartItem = ({item})=>{

    const {eliminarProductoCarrito} = UsarCarrito()

    
    console.log("producto:")
    console.log(item)

    return(
        <Item {...item}>

            <span>Cantidad: {item.cantidad}</span>

            <button onClick={()=>eliminarProductoCarrito(item.id)}>Eliminar producto</button>

        </Item>
    )

}