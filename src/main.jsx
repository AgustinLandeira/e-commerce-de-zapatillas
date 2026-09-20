import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    // El brouserRouter nos habilita el enrutamiento en toda nuestra App, permite usar rutas dentro de la app
  
    <BrowserRouter> 
    
      <App />
    
    </BrowserRouter>

   
  
)
