import { UsarCarrito } from '../../context/CarritoContexto'
import './Cart.css'
import { CartList } from './CartList'
import { CartNoItems } from './CartNoItems'
import { CartSummary } from './CartSummary'
export const CartView = ()=>{

    const {carrito} = UsarCarrito()

    return(
        <div className="contenedor-carrito">

            <h1>Carrito de compras</h1>

            {carrito.length > 0 ? (
                <>
                    <CartList/>
                    <CartSummary/>
                </>
                
            ):(
                <>
                    <CartNoItems/>
                </>
            )}

        </div>
    )
}