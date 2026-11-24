import './App.css'
import { ProductFormContainer } from './Components/adminComponents/ProductForm/ProductFormContainer'
import { ProductSuccess } from './Components/adminComponents/ProductSuccess'
import { Bienvenida } from './Components/Bienvenida/Bienvenida'
import { CartView } from './Components/Carrito/CartView'
// import { Footer } from './Components/Footer/Footer'
// import { Header } from './Components/Header/Header'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'

import {Navigate, Route, Routes} from 'react-router-dom'
import { Login } from './Components/login/login'
import { PublicLayout } from './Components/layouts/PublicLayout'
import { ProtectedRoute } from './Components/ProtetedRoute/ProtectedRoute'
import { AdminLayout } from './Components/layouts/AdminLayout'
import { Dashboard } from './Components/adminComponents/Dashboard/Dashboard'
import { ProductListContainer } from './Components/adminComponents/ProductList/ProductListContainer'

function App() {

  // const ruta = useLocation() //me dice en que ruta estoy

  // const esInicio = ruta.pathname === "/"

  // EL componente login va afuera del adminlayout porque el protedted router me pide que este logueado para el login, por eso esta afuera
  
  return(

    <>

      {/* {!esInicio && <Header/>} */}

      {/* routes: para agrupar las rutas de mi app, se asegura que solo una coincide y se renderice */}
      <Routes>

        <Route element={<PublicLayout/>}>

          <Route path='/prueba' element={<h1>La aplicación funciona</h1>}></Route>

          <Route path='/' element={<Bienvenida/>}></Route>
          <Route path='/productos' element={<ItemListContainer/>}></Route>

          {/* Rutas dinamicas */}
          <Route path='/productos/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/carritoVista' element={<CartView/>}></Route>

          {/* Rutas del Admin Publica */}

          <Route path='admin/login' element={<Login/>}></Route>


        </Route>

          <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <AdminLayout/> 
            </ProtectedRoute>
          }>
            {/* // con el indicamos que dicha ruta se tiene que renderiza cuando el usuario ingrese la ruta padre(/admin) sin especificar ninguna ruta hija */}
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='/admin/producto/alta' element={<ProductFormContainer/>}></Route>
            <Route path='/admin/producto/altaExito/:id' element={<ProductSuccess/>}></Route>
            <Route path='/admin/productos' element={<ProductListContainer/>}></Route>
          </Route>

          {/* Rutas del Admin */}

      </Routes>
        
      
      {/* {!esInicio && <Footer/>} */}
    
    </>
    
  )
  
}

export default App
