import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
    return (
        <header class="header" id="header">
            <nav class="nav container">
                <Link to="/" className="nav__logo">
                    <span class="nav__logo-circle">J</span>
                    <span class="nav__logo-name">João Vitor</span>
                </Link>

                <div class="nav__menu" id="nav-menu">
                    <span class="nav__title">Menu</span>
                    <h3 class="nav__name">João</h3>
                    <ul class="nav__list">
                        <li class="nav__item">
                            <Link to="/" class="nav__link">Home</Link>
                        </li>

                        <li class="nav__item">
                            <Link to="/about" class="nav__link">Sobre Mim</Link>
                        </li>
                        <li class="nav__item">
                            <Link to="/projects" class="nav__link">Projetos</Link>
                        </li>
                        <li class="nav__item">
                            <Link to="/contact" class="nav__link nav__link-button">Contact Me</Link>
                        </li>
                    </ul>


                    <div class="nav__close" id="nav-close">
                        <i class="ri-close-line"></i>
                    </div>
                </div>

                <div class="nav__buttons">

                    <i class="ri-moon-line change-theme" id="theme-button"></i>

                    <div class="nav__toggle" id="nav-toggle">
                        <i class="ri-menu-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header