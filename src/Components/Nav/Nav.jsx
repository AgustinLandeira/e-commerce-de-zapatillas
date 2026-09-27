import './Nav.css'
import { Link } from 'react-router-dom' // permite la navegacion sin tener que recargar la pagina, se utiliza para crear enlaces de navegacion

export const Nav = ()=>{

    return(
        <>
            <nav>

                <ul>
                    <li> <Link className='link' to="/">Inicio</Link></li>
                    <li> <Link className='link' to="/productos">Productos</Link></li>
                    <li> <Link className='link' to="/carrito">Carrito 🛒</Link></li>
                </ul>

            </nav>
        </>
    )

}