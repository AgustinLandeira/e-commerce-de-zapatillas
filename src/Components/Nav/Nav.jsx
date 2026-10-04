import { UsarCarrito } from '../../context/CarritoContexto'
import './Nav.css'
import { Link } from 'react-router-dom' // Es un componente que permite la navegacion sin tener que recargar la pagina, se utiliza para crear enlaces de navegacion

export const Nav = ()=>{

    const {obtenerTotalProductos} = UsarCarrito()
    const totalItems = obtenerTotalProductos()

    return(
        <>
            <nav>

                <ul>
                    <li> <Link className='link' to="/">Inicio</Link></li>
                    <li> <Link className='link' to="/productos">Productos</Link></li>
                    <li> <Link className='link' to="/carrito">Carrito {totalItems}🛒</Link></li>
                </ul>

            </nav>
        </>
    )

}