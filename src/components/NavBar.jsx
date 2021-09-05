import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "../styles/menu.css";

export default function NavBar() {
    return <Menu>
        <a className="menu-item" href="#landing">Elejére</a>
        <a className="menu-item" href="#feladataim">Feladataim</a>
        <a className="menu-item" href="#galeria">Galéria</a>
        <a className="menu-item" href="#velemenyek">Vélemények</a>
        <a className="menu-item" href="#magamrol">Magamról</a>
        <a className="menu-item" href="#kapcsolat">Kapcsolat</a>
        <a className="menu-item" href="#tanaraim">Tanáraim</a>
    </Menu>;
}