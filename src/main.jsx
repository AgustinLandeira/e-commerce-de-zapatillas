import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContexto.jsx'

createRoot(document.getElementById('root')).render(

    // El brouserRouter nos habilita el enrutamiento en toda nuestra App, permite usar rutas dentro de la app
  
    <BrowserRouter>
    
    <CarritoProvider>
      <App />
    </CarritoProvider>

    </BrowserRouter>

   
  
)
