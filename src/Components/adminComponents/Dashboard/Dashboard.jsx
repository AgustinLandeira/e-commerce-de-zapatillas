import { Link } from "react-router-dom"
import { UseAuth } from "../../../context/AuthContext"

import './Dashboard.css'

export const Dashboard = ()=>{

    const {logout} = UseAuth()

    return (
        <div className="dashboard-container">

            <header className="dashboard-header">

                <h2 className="dashboard-title">
                    Bienvenido al panel de administración
                </h2>

                <div className="dashboard-header-actions">

                    <Link className="dashboard-store-link" to="/">
                        Volver a la tienda
                    </Link>

                    <button
                        className="dashboard-logout-button"
                        onClick={logout}
                    >
                        Cerrar sesión
                    </button>

                </div>

            </header>

            <div className="dashboard-content">

                <h3 className="dashboard-subtitle">
                    Acciones rápidas
                </h3>

                <div className="dashboard-actions">

                    <Link
                        className="dashboard-action dashboard-action-primary"
                        to="/admin/producto/alta"
                    >
                        <span className="dashboard-action-icon">➕</span>
                        <span>Agregar producto</span>
                    </Link>

                    <button
                        className="dashboard-action dashboard-action-disabled"
                        disabled
                    >
                        <span className="dashboard-action-icon">✏️</span>
                        <span>Modificar producto</span>
                    </button>

                    <button
                        className="dashboard-action dashboard-action-disabled"
                        disabled
                    >
                        <span className="dashboard-action-icon">🗑️</span>
                        <span>Eliminar producto</span>
                    </button>

                </div>

            </div>

        </div>
    )
    
}