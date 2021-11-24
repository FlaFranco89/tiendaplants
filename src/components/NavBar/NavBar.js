import React from 'react';
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div>
            <h1 className="brand">Vags.</h1>
            <nav className="nav">
                <ul>
                    <li><a>INICIO</a></li>
                    <li><a>NOSOTROS</a></li>
                    <li><a>TIENDA</a></li>
                    <li><a>CONTACTO</a></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    );
}

export default NavBar;