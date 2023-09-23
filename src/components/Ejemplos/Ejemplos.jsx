import React from 'react'

// import { Children } from './components/Children/Children'

export const Ejemplos = () => {


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
            <div>Ejemplo</div>

            {/* Ejemplos Children */}
            {/* // Utilizamos el export para que nuestro componente siempre esté disponible a ser consumido

// Creamos el arrow funtion y retornamos un JSX

// Por medio de objetos, desestructuramos las props */}


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
        {/* Form ejemplos */}

        {/* // if (username && email && password) {
//     setEstaRegistrado(true)
// } else {
//     alert('Por favor, complete los datos')
// }
                // { estaRegistrado ? (
                //     <p>¡Registro exitoso para {username}!</p>
                // ) : (
                // <form onSubmit={handleSubmit}>
                //     <div>
                //         <label htmlFor="username">Nombre de usuario:</label>
                //         <input 
                //         type="text" 
                //         id='username' 
                //         value={username}
                //         onChange={(e) => setUsername(e.target.value)} 
                //         />
                //     </div>
                //     <div>
                //         <label htmlFor="email">Email:</label>
                //         <input 
                //         type="text" 
                //         id='email' 
                //         value={email} 
                //         onChange={(e) => setEmail(e.target.value)}
                //         />
                //     </div>
                //     <div>
                //         <label htmlFor="password">Contraseña:</label>
                //         <input 
                //         type="password" 
                //         id='password' 
                //         value={password} 
                //         onChange={(e) => setPassword(e.target.value)}
                //         />
                //     </div>
                //     <button type='submit'>Registrarse</button>
                // </form>
                // )} */}


        </>
    )
}
