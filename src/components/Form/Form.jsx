import React, { useState } from 'react'

export const Form = (props) => {

    const [inputValue, setInputValue] = useState('')

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [estaRegistrado, setEstaRegistrado] = useState(false)

    // let e = null
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
// if (username && email && password) {
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
                // )}

