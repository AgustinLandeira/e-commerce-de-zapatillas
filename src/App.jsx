import './App.css'
import { Bienvenida } from './Components/Bienvenida/Bienvenida'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'

import {Route, Routes,useLocation} from 'react-router-dom'

function App() {

  const ruta = useLocation() //me dice en que ruta estoy

  const esInicio = ruta.pathname === "/"
  
  return(

    <>

      {!esInicio && <Header/>}

      <main>

        {/* routes: para agrupar las rutas de mi app, se asegura que solo una coincide y se renderice */}
        <Routes>

            <Route path='/' element={<Bienvenida/>}></Route>
            <Route path='/productos' element={<ItemListContainer/>}></Route>

            {/* Rutas dinamicas */}
            <Route path='/productos/:id' element={<ItemDetailContainer/>}></Route>

        </Routes>
        
        
      </main>
      {!esInicio && <Footer/>}
    
    </>
    
  )
  
}

export default App
