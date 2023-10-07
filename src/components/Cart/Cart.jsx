import React, { useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import {FiShoppingCart} from 'react-icons/fi';

export const Cart = () => {

  const {calcularCantidad} = useContext(CartContex)
  return (
    <>
      <FiShoppingCart/>
      <span>{calcularCantidad()}</span>
    </>
  )
}
