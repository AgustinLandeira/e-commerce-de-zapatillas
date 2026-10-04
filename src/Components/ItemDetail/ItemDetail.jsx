import { UsarCarrito } from "../../context/CarritoContexto"
import { Item } from "../Item/Item"
import './ItemDetail.css'

export const ItemDetail = ({item})=>{

    const {agregarItem} = UsarCarrito();

    return(

        <div className="detalle-producto">

            <Item {...item}>
                <button className="btn-agregar" onClick={()=>agregarItem(item,1)}>Agregar al carrito</button>
            </Item>

        </div>
    )

}