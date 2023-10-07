// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// export const Detail = ({ id, name, description, price, photo, stock }) => {

//     const navigate = useNavigate()

//     const volverHaciaAtras = () => {
//         navigate(-1)
//     }

//     const sumarAlCarrito = () =>{
//         const newItem = {
//             id,
//             name,
//             description,
//             photo,
//             price
//         }
//     }

//     return (
//         <>
//         <div className='list-card'>
//             {productos.map((item) => (
//                 <div className='card' key={item.id}>
//                     <img src={item.photo} alt={item.photo} />
//                     <h5>{item.name}</h5>
//                     <p>{item.description}</p>
//                     <p>${item.price}</p>
//                     <Counter />
//                 </div>
//             ))}
//             <div>
//                 <button onClick={sumarAlCarrito}>Agregar al carrito</button>
//             </div>
//             <div>
//                 <button onClick={volverHaciaAtras}>Volver hacia atras</button>
//             </div>
//         </div>
//         </>
//     )
// }
