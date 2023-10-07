import React, { useState } from 'react'
import './Style.css'

export const Counter = () => {

    // Variable inicializadora, funcion que permite cambiar el estado siempre esta funcion empieza con set
    const [contador, setContador] = useState(0)

    const handleAdd = () => {
        setContador(contador + 1)
    }

    const handleRemove = () => {
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    return (
        <>
            
            <div className='btn-counter'>
            <button className="button" onClick={handleAdd}>+</button>
            <span>{contador}</span>
            <button className="button" onClick={handleRemove}>-</button>
            </div>
        </>
    )
}
