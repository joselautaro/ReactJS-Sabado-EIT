import React from 'react'
import { Cart } from '../Cart/Cart'
import { Link } from 'react-router-dom'
import './Nav.css'

export const NavBar = () =>{
    return(
        <>
            <nav>
                <Link className='link' to="/">Principal</Link>
                <Link className='link' to="/contacto">Contacto</Link>
                <Link className='link' to="/formulario">Formulario</Link>
                <Link className='link' to="/poke">Poke</Link>
                <Link className='link' to="/contador">Contador</Link>
                <Link className='link' to="/cart"><Cart/></Link>
            </nav>
        </>
    )
}
// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Cart } from '../Cart/Cart';
// import { Link } from 'react-router-dom';
// // import './Nav.css'


// export const NavBar = () => {
//     return (
//         <>
//             <Navbar bg="dark" data-bs-theme="dark">
//                 <Container>
//                     <Navbar.Brand to="/">Logo</Navbar.Brand>
//                     <Nav className="me-auto">
                        
//                             <Nav.Link className='link' to="/">Principal</Nav.Link>
//                             <Nav.Link href="/contacto">Contacto</Nav.Link>
//                             <Nav.Link to="/formulario">Formulario</Nav.Link>
//                             <Nav.Link to="/hijo">Children</Nav.Link>
//                             <Nav.Link to="/contador">Contador</Nav.Link>
//                             <Nav.Link to="/cart"><Cart /></Nav.Link>
                    
//                     </Nav>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }