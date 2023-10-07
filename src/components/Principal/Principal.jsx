import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { Counter } from '../Counter/Counter';
import './style.css';



export const Principal = () => {

  const [loading, setLoading] = useState(false)

  const [items, setItems] = useState([])

  // useEffect(() => {

  //   setLoading(true)
  //   pedirProductos()
  //   fetch('https://fakestoreapi.com/products')
        // .then(res => res.json())
  //     .then((res) => {
  //       setItems(res)
  //     })
  //     .catch((error) => {
  //       console.log("Tiene un error ", error)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // },[])
  useEffect(() => {
    pedirProductos()
      .then(res => {
        setItems(res)
      })
      .catch((error) => {
        console.log("Tiene un error ", error)
      })
      .finally(() => {
        setLoading(false)
      })

  })


  return (
    <div>

      {
        loading
          ?
          (
            <p className='cargando'>Cargando...</p>
          )
          :
          (
            <div className='list-card'>
              {items.map((item) => (
                <div className='card' key={item.id}>
                  <img src={item.photo} alt={item.photo} />
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <Counter />
                </div>
              ))}
            </div>
          )
      }
    </div>
  )
}