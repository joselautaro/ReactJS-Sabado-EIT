import React, { useState } from 'react'

export const Form = (props) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) =>{
        e.preventDefault()
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        props.onSubmit(inputValue)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

