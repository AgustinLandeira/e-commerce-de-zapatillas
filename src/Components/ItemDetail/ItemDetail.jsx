import { Item } from "../Item/Item"
import './ItemDetail.css'

export const ItemDetail = ({item})=>{

    return(

        <div className="detalle-producto">

            <Item {...item}>
                <button className="btn-agregar">Agregar al carrito</button>
            </Item>

        </div>
    )

}