// Importamos toda la libreria de react
import React from 'react'

// Utilizamos el export para que nuestro componente siempre esté disponible a ser consumido

// Creamos el arrow funtion y retornamos un JSX

// Por medio de objetos, desestructuramos las props
export const Children = (props) => {
  return (
    <>
      <div>Children</div>
      {/* Ejemplo 1 */}
      {/* Vieja y mala práctica manera */}
      {/* <p>{props.texto}</p>
      <p>{props.numero}</p> */}

      {/* Ejemplo2 */}
      {/* Nueva y buena práctica */}
      {/* Pasamos las props por parámetros */}
      {/* <p>{mensaje}</p> */}
      {/* <p>{numero}</p> */}

      {/* Ejemplo 3 */}
      {/* <p>{persona.nombre}</p>
      <p>{persona.edad}</p>
      <p>{persona.padre}</p> */}

      {/* Ejemplo 4 */}
      {/* {props.mostrar ? <p>Contenido visible</p> : <p>Contenido oculto</p>} */}

      {/* Ejemplo 5 */}
      {/* <ul>
        {
          props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul> */}

      {/* Ejemplo 6 */}
      {/* <img src={props.imagen} alt={props.imagen} /> */}

      {/* Ejemplo 7 */}
      {/* <div style={props.estilo}>Div con estilo</div> */}

      {/* Ejemplo 8 */}
      {/* <p>Fecha de nacimiento: {props.fechaNacimiento.toDateString()}</p> */}
    </>
  )
}
