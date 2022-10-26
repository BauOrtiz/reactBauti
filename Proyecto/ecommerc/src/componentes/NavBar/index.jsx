import React from "react";
import CartWidget from "../CartWidget/index3";
import './style.css'


const NavBar = ()=> {

    return (
        <ul className="lista-ul">
            <li className="lil">
                <a href="#Inicio" className="a-link">Inicio</a>
            </li>
            <li className="lil">
                <a href="#Productos" className="a-link">Productos</a>
            </li>
            <li className="lil">
                <a href="#Nosotros" className="a-link">Nosotros</a>
            </li>
            <li className="lil">
                <a href="#Fotos" className="a-link">Fotos</a>
            </li>
            <CartWidget/>
        </ul>
    )
}
export default NavBar;