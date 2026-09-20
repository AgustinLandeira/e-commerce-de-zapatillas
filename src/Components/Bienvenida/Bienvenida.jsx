import { Link } from 'react-router-dom'
import './Bienvenida.css'

export const Bienvenida = ()=>{

    return(

        <section className="contenedor-bienvenida">

            <div className='bienvenidad-contenido'>

                <h1>Bienvenido a All Shoes</h1>

                <p>Encontrá las zapatillas que van con tu estilo.</p>


                <button><Link className='link' to='/productos'>Explorar productos</Link></button>


            </div>
            
        </section>

    )

}