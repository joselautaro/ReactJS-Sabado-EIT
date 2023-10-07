import { useState } from "react";
import { createContext } from "react";



export const CartContex = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addToCart = (item) =>{
        setCarrito([...carrito, item])
    }
    const calcularCantidad = () =>{
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }


    return (
        <>
            <CartContex.Provider value={{
                addToCart,
                calcularCantidad,
                precioTotal,
                vaciarCarrito
            }}>
             {children}
            </CartContex.Provider>
        </>
    )
}