import { React } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Counter } from './components/Counter/Counter'
import { Form } from './components/Form/Form'
import { Children } from './components/Children/Children'
import { Principal } from './components/Principal/Principal'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//Functional component --> Componente funcional
function App() {

  return (
    <>
      <Router>
          <NavBar/>
        <Routes>
          <Route exact path='/' element={<Principal/>}/>
          <Route exact path='/contacto' element={<h3>Contacto</h3>}/>
          <Route exact path='/formulario' element={<Form />}/>
          <Route exact path='/hijo' element={<Children/>}/>
          <Route exact path='/contador' element={<Counter/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default App
