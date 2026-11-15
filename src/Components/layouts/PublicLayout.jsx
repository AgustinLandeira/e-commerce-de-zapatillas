// EL componente outlet es el hueco a llenar por  el react router, va a llamar a sus rutas que estan empaquetadas
// Posteriormente va agrupar todas las rutas publicas

import { Outlet } from "react-router-dom"
// import { Header } from "../Header/Header"
// import { Footer } from "../Footer/Footer"

export const PublicLayout = () =>{
    //Outlet es como un children, para renderizar cada Route que envuelva PublicLayout

    return (
        <>
            <main>
                <Outlet/>
            </main>
        </>
    )
}