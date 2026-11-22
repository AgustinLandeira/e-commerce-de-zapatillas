import { UsarCarrito } from '../../context/CarritoContexto'

import "./Cart.css"

import Swal from 'sweetalert2'
export const CartBuy = ({monto}) => {

    const {limpiarCarrito} = UsarCarrito()

    function mostrarAlert(){

        Swal.fire({
            title: "¿ Queres confirmar la compra ?",
            text: `Estas por comprar los productos de tu carrito por un monto de $ ${monto}`,
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar compra",
            cancelButtonText: "Cancelar compra"
        }).then((result)=>{

            if(result.isConfirmed){
                limpiarCarrito()

                Swal.fire({
                    title: "Compra confirmada",
                    text: `Acabas de comprar todos los productos de tu carrito`,
                    icon:"success"
                })
            }

        })

    }

    return(
        <div className="comprar">

            <button onClick={mostrarAlert}>Comprar</button>

        </div>
    )

}
