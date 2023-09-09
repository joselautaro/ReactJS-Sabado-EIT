import { React } from 'react'
// import { Children } from './components/Children/Children'
import {Counter} from './components/Counter/Counter'
import './App.css'

//Functional component --> Componente funcional
function App() {
  

  // Las props o properties o propiedades, son características que manejan los componentes para hacer comunicación entre los componentes, especialmente, de padres a hijos

  // Ejemplo 1
  // const mensaje = "Hola desde el padre!"

  // Ejemplo 2
  // const numero = 15;

  // Ejemplo 3
  // const persona = {
  //   nombre: "Lautaro",
  //   edad: 30,
  //   padre: "En camino"
  // }

  // Ejemplo 4
  // const mostrarContenido = true

  // Ejemplo 5
  // const listaDeItems = ["Manzana", "Banana", "Naranja"]

  // Ejemplo 6
  // const imageUrl = "https://picsum.photos/200/300"

  // Ejemplo 7
  // const colorFondo = "orange"

  // Ejemplo 8
  // const fechaNacimiento = new Date()


  return (
    <>
      {/* <Children texto={mensaje}/> */}
      {/* <Children numero={numero}/> */}
      {/* <Children persona={persona}/> */}
      {/* <Children mostrar={mostrarContenido}/> */}
      {/* <Children items={listaDeItems}/> */}
    {/* <Children imagen={imageUrl}/> */}
    {/* <Children estilo={{backgroundColor: colorFondo}}/> */}
    {/* <Children fechaNacimiento={fechaNacimiento}/> */}
    <Counter/>
    </>
  )
}

export default App
