// Aca van las rutas privadas

import { Outlet } from "react-router-dom";

export const AdminLayout = ()=>{

    return (
        <main>
            <Outlet/>
        </main>
    )
}