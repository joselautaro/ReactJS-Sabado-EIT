import { React } from 'react'
// import { Counter } from './components/Counter/Counter'
// import { Login } from './components/Login/Login'
import { Form } from './components/Form/Form'
import './App.css'

//Functional component --> Componente funcional
function App() {

  const handleFormSubmit = (value) =>{
    console.log("Valor enviado desde el hijo", value)
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit}/>
      {/* <Counter />
      <Login /> */}
    </>
  )
}

export default App
