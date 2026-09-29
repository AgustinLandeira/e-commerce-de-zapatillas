import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import './ItemList.css'
export const Itemlist = ({listaProductos})=>{

    if(listaProductos.length < 1){return <p>No hay productos...</p>}

    return(

        <div className="contenedor-productos">

            {
                listaProductos.map(product=>(

                    <Item key={product.id} {...product}>

                    <Link to={`/productos/${product.id}`}><button className="producto-boton">Ver detalle</button></Link>

                    </Item>

                ))
            }

        </div>

    )

}
