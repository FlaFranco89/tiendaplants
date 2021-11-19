import React from 'react';
import './navbar.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div>
            <header>
                <h1 className="brand">Vags.</h1>
                <nav className="nav">
                    <ul>
                        <li><a>INICIO</a></li>
                        <li><a>NOSOTROS</a></li>
                        <li><a>TIENDA</a></li>
                        <li><a>CONTACTO</a></li>
                    </ul>
                </nav>
            </header>
            <CartWidget />
        </div>
    );
}

export default NavBar;