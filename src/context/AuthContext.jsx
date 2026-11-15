import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from '../firebase/config'

//creamos el contexto
const authContext = createContext()

//creamos el kook para acceder a los datos
export const UseAuth = ()=>{

    const contexto = useContext(authContext)

    if(!contexto){
        throw Error("Debe usarse dentro del Auth Provider")
    }

    return contexto
}

//AuthProvider ->Obtenemos los datos del usuario autenticado, de lo contrario, devuelve null. //nuestro celebro, proporciona informacion del contexto(seria guardar toda la logica de la autenticacion)

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        //observador (listener) de Firebase Authentication que detecta en tiempo real cuando un usuario inicia, cierra sesión o si ya habia una sesion abierta en tu aplicación.
        //unsubscribe función que devuelve onAuthStateChanged y que sirve para "apagar" o cancelar la suscripción al observador de Firebase
        const unsubscribe = onAuthStateChanged(auth,(firebaseUser)=>{

            setUser(firebaseUser)
            setloading(false)

        },[])

        return unsubscribe
    })

    const login = (email,password) =>{

        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = async ()=>{
        
        try{
            await signOut(auth)
        }catch(error){
            console.error("Error al cerrar sesión:", error);

        }

    }

    return <authContext.Provider value={{user,loading,login,logout}}>{children}</authContext.Provider>

}




