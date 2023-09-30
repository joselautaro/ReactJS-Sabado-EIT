import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';



export const Principal = () => {

  const [loading, setLoading] = useState(false)

  const [items, setItems] = useState([])

  useEffect(() => {

    setLoading(true)
    pedirProductos()
      .then((res) => {
        setItems(res)
      })
      .catch((error) => {
        console.log("Tiene un error ", error)
      })
      .finally(() => {
        setLoading(false)
      })
  },[])



  return (
    <div>

      {
        loading
          ?
          (
            <p>Cargando...</p>
          )
          :
          (
            <div className='card'>
              {items.map((item) => (
                <div key={item.id}>
                  <img src={item.photo} alt={item.photo} />
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                </div>
              ))}
            </div>
          )
      }
    </div>
  )
}

//  <div>

//       {
//           loading
//               ?
//               (
//                   <p>Cargando...</p>
//               )
//               :
//               (
//                   <div className='card'>
//                       {items.map((item) => (
//                           <h4 key={item.id}>
//                               <img src={item.photo} alt={item.photo} />
//                               <p>{item.name}</p>
//                               <p>{item.description}</p>
//                           </h4>
//                       ))}
//                   </div>
//               )
//       }
//   </div>