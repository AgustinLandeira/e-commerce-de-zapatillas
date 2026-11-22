import { Navigate, } from "react-router-dom"
import { UseAuth } from "../../context/AuthContext"
import { SpinnerLoader } from "../SpinnerLoader/SpinnerLoader"

export const ProtectedRoute = ({children}) =>{

    const {user,loading} = UseAuth()

    if(loading){return <SpinnerLoader></SpinnerLoader>} // 🔥 CLAVE: esperamos a saber si hay usuario autenticado antes de redirigir

    if(!user) return <Navigate to={"/admin/login"}  />

    return children
}