import React from 'react'

const NavBarComponent= () => {
    return (
        <nav className="menu">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    )
}
export const NavBar= NavBarComponent;