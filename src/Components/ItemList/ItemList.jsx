import { Item } from "../Item/Item"
import './ItemList.css'
export const Itemlist = ({listaProductos})=>{

    if(listaProductos.length < 1){return <p>No hay productos...</p>}

    return(

        <div className="contenedor-productos">

            {
                listaProductos.map(product=>(

                    <Item key={product.id} {...product}>

                    <button className="producto-boton">Ver detalle</button>

                    </Item>

                ))
            }

        </div>

    )

}
