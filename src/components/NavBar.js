import React from 'react';
import './navbar.css';

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
        </div>
    );
}

export default NavBar;