import { useState } from "react"
import { UseAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

import './login.css'

export const Login = () =>{

    const {login} = UseAuth()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({

        email: "",
        password : ""
    })

    const handleChange = (e)=>{

        const {name,value} = e.target;//extraemos dos atributos del input que disparo el evento
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async (e) =>{

        e.preventDefault()//frenamos el comportamiento automatico que trae por defefcto el navegador al enviar un formulario

        try{
            await login(formData.email,formData.password)
            navigate("/admin",{replace:true})
        }catch(error){

            console.error(error);
            alert("Error al iniciar sesión");

        }

    }

    return(
        <form className="login-form" onSubmit={handleSubmit}>

            <h2 className="login-title">Iniciar sesión</h2>

            <div className="login-field">
                <input
                    className="login-input"
                    type="email"
                    name="email"
                    placeholder="Ingrese su mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="login-field">
                <input
                    className="login-input"
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <button className="login-button" type="submit">
                Ingresar
            </button>

        </form>
    )


}