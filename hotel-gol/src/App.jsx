import Home from './Components/pages/Home'
import Informacion from './Components/pages/Informacion'
import Contacto from './Components/pages/Contacto'
import Habitaciones from './Components/pages/Habitaciones'
import Reservas from './Components/pages/Reservas'

import { Route,Routes,BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Informacion' element={<Informacion/>} />
          <Route path='/Habitaciones' element={<Habitaciones/>} />
          <Route path='/Contacto' element={<Contacto/>} />
          <Route path='/Reserva' element={<Reservas/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
