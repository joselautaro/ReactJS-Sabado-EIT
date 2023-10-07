import { React } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Form } from './components/Form/Form'
import { Poke } from './components/Poke/Poke'
import { Principal } from './components/Principal/Principal'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { CartScreen } from './components/CartScreen/CartScreen'

//Functional component --> Componente funcional
function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Principal />} />
            <Route exact path='/contacto' element={<h3>Contacto</h3>} />
            <Route exact path='/formulario' element={<Form />} />
            <Route exact path='/poke' element={<Poke />} />
            <Route exact path='/cart' element={<CartScreen/>}/>
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
