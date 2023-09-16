// import React, { useState } from "react";

// export const Login = () => {

//     // Hook de estado

//     const [tareas, setTareas] = useState([])

//     const agregarTarea = (tarea) =>{
//         setTareas([...tareas, tarea])
//     }
    
//     return (
//         <>
//             <div>
//                 <h2>Lista de tareas</h2>
//                 {
//                     tareas.length === 0 ?(
//                         <p>No hay tareas pendientes</p>
//                     ) : (
//                         <ul>
//                             {
//                                 tareas.map((tarea, index) =>(
//                                 <li key={index}>{tarea}</li>
//                             ))}
//                         </ul>
//                     )
//                 }
//                 <button onClick={() => agregarTarea('Nueva tarea')}>Agregar Tarea</button>
//             </div>
//         </>
//         )
// }

 // Ejemplo 3
 // <>
 //         <p>Tipo de usuario: {userType}</p>
 //         {message}
 // </>

 // const [userType, setUserType] = useState('user')
    
 // let message = null
    
 // if( userType === 'guest' ){
 //     message = <p>Por favor inicie sesión para mas contenido</p>
 // }else if(userType === 'user'){
 //     message = <p>Bienvenido usuario</p>
 // }else if(userType === 'admin' ){
//     message = <p>¡Hola Admin, tenés acceso completo!</p>
// }

// Ejemplo 2
// const [ esVisible, setEsVisible] = useState(true)

// const botonDeVisibilidad = () =>{
//     setEsVisible(!esVisible)
// }

// let content = null

// if( esVisible ){
//     content = <p>Este párrafo es visible</p>
// }else{
//     content = <p>Este párrafo está oculto</p>
// }
// <div>
//     <button onClick={botonDeVisibilidad}>Alternar visibilidad</button>
//     {content}
// </div>


// Ejemplo 1
// const [ logueado, setLogueado ] = useState(true)

// <div>
//     {
//         logueado ? (
//             <p>¡Bienvenido usuario! Has iniciado sesión</p>
//         ) : (
//             <p>Iniciá sesión para acceder a tu cuenta</p>
//         )
//     }
// </div>