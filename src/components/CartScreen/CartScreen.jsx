import React from 'react'
// import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartScreen = () => {

    // const {carrito} = useContext(CartContext)

  return (

    <div className='container my-5'>

        {/* {
            carrito.lenght === 0
            ? <>
                <h3>Carrito Vacio</h3>
                <hr />
                <Link to='/' className='btn btn-danger'>Volver a comprar</Link>
            </>
            :
        } */}
            <>
                <h3>Resumen de compra</h3>
            </>

    </div>

    )
}
