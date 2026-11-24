import { Link } from "react-router-dom"
import { Item } from "../../Item/Item"

import './ProductList.css'

export const ProductList = ({listaProductos,eliminarProducto})=>{

    if(listaProductos.length < 1){return <p>No hay productos...</p>}

    return(

        <>
        
            <div className="product-list-header">
                <Link className="product-list-back" to={"/admin/dashboard"}> 
                    ←  Volver al panel
                </Link>
                
            </div>
        
            <div className="contenedor-productos">


                {
                    listaProductos.map(product=>(
                        <Item key={product.id} {...product} > 

                            <button onClick={()=>eliminarProducto(product.id)}>Eliminar Producto</button>

                        </Item> 
                    ))
                }

            </div>
        
        
        </>

    )


}