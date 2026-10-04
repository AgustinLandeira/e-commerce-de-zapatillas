import { createContext, useContext, useState } from "react"

const CarritoContexto = createContext() //creamos el contexto, para compartir informacion del carrito

export const UsarCarrito = ()=>{ //es un hook que nos facilita usar el contexto y proporciona un error claro si se usa fuera del proveedor.

    const contexto = useContext(CarritoContexto)//sirve para obtener el value que proporcionó el Provider.

    if(!contexto){//detecta si un componente no tiene acceso al contexto
        throw new Error("Debe usarso dentro de un Carrito Provider")
    }

    return contexto
}

export const CarritoProvider = ({children})=>{ //nuestro celebro, proporciona informacion del contexto(seria guardar toda la logica del carrito aca)

    const [carrito,setCarrito] = useState([])

    //funciones del carrito

    const existeEnCarrito = (item)=>{

        const existe = carrito.some((elemento)=>elemento.id === item.id)

        return existe

    }

    const agregarItem = (item,cantidad)=>{

        if(existeEnCarrito(item)){

            const carritoActualizado = carrito.map(producto =>{

                if(producto.id === item.id){

                    return {
                        ...item,
                        cantidad: producto.cantidad + cantidad
                    }
                }else{
                    return producto
                }
            });
            

            setCarrito(carritoActualizado)
        }else{

            setCarrito([...carrito,{...item,cantidad:cantidad}])
            
        }

        console.log(carrito)

    }

    const eliminarProductoCarrito = (id)=>{

        const carritoActualizado = carrito.filter((elemento)=>elemento.id != id)

        setCarrito(carritoActualizado)
    }

    const obtenerTotalProductos = ()=>{

        let cantidadProductos = 0

        for(let producto of carrito){

            cantidadProductos += producto.cantidad
        }
        return cantidadProductos
    }

    const limpiarCarrito = ()=>{

        setCarrito([])
    }

    //el value es lo que el Provider les entrega a los componentes que consuman el contexto.

    const values = {
        carrito,
        agregarItem,
        limpiarCarrito,
        eliminarProductoCarrito,
        obtenerTotalProductos
    }

    return(
        <CarritoContexto.Provider value={values}>{children}</CarritoContexto.Provider>
    ) 
}