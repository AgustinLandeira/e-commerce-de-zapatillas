// EL componente outlet es el hueco a llenar por  el react router, va a llamar a sus rutas que estan empaquetadas
// Posteriormente va agrupar todas las rutas publicas

import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export const PublicLayout = () =>{
    //Outlet es como un children, para renderizar cada Route que envuelva PublicLayout

    const ruta = useLocation() //me dice en que ruta estoy

    const esInicio = ruta.pathname === "/"

    return (
        <>
            {!esInicio && <Header/>}
            <main>
                <Outlet/>
            </main>
            {!esInicio && <Footer/>}
        </>
    )
}