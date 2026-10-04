import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = ()=>{

    return(

        <footer className="footer">

            <div className="footer-contenedor">

                <div className="footer-marca">

                    <h2>All Shoes</h2>

                    <p>
                        Encontrá las zapatillas que mejor se adaptan
                        a tu estilo.
                    </p>

                </div>


                <div className="footer-seccion">

                    <h3>Comprar</h3>

                    <ul>
                        <li><Link className='link' to="/">Inicio</Link></li>
                        <li><Link className='link' to="/productos">Productos</Link></li>
                    </ul>

                </div>


                <div className="footer-seccion">

                    <h3>Ayuda</h3>

                    <ul>
                        <li>Preguntas frecuentes</li>
                        <li>Envíos</li>
                        <li>Cambios y devoluciones</li>
                        <li>Medios de pago</li>
                    </ul>

                </div>


                <div className="footer-seccion">

                    <h3>Contacto</h3>

                    <ul>
                        <li>📍 Buenos Aires, Argentina</li>
                        <li>📧 contacto@allshoes.com</li>
                        <li>📱 +54 11 1234-5678</li>
                    </ul>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 All Shoes. Todos los derechos reservados.
                </p>

                <div className="footer-redes">
                    <span>Instagram</span>
                    <span>Facebook</span>
                    <span>TikTok</span>
                </div>

            </div>

        </footer>
        
    )
}