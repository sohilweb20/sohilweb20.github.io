import React, { useState } from 'react'
import logoImage from "../assets/logoImage.png"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };
    return (
        <header class="header">
            <div class="header_content">
                <div class="header_logo-container">
                    <div class="header_logo-img-cont">
                        <img src={logoImage} alt="ram maheshwari logo"
                            class="header_logo-img" />
                    </div>
                    <span class="header_logo-sub">SOHIL KHAN</span>
                </div>
                <div class="header_main">
                    <ul class="header_links">
                        <li class="header_link-wrapper">
                            <a href="#home" class="header_link">home</a>
                        </li>
                        <li class="header_link-wrapper">
                            <a href="#about" class="header_link">about</a>
                        </li>
                        <li class="header_link-wrapper">
                            <a href="#projects" class="header_link">projects</a>
                        </li>
                        <li class="header_link-wrapper">
                            <a href="#contact" class="header_link">contact</a>
                        </li>
                    </ul>
                    <div className="header_main-ham-menu-cont">
                        <img
                            src="https://www.rammaheshwari.com/assets/svg/ham-menu.svg"
                            alt="ham menu"
                            className={`header_main-ham-menu ${menuOpen ? 'd-none' : ''}`}
                            onClick={handleMenuOpen}
                        />
                        <img
                            src="https://www.rammaheshwari.com/assets/svg/ham-menu-close.svg"
                            alt="ham menu close"
                            className={`header_main-ham-menu-close ${menuOpen ? '' : 'd-none'}`}
                            onClick={handleMenuClose}
                        />
                    </div>
                </div>
            </div>
            <div className={`${menuOpen ? 'header__sm-menu--active' : 'header__sm-menu'}`}>
                <div className="header__sm-menu-content">
                    <ul className="header_sm-menu-links">
                        <li className="header_sm-menu-link">
                            <a href="#home">home</a>
                        </li>
                        <li className="header_sm-menu-link">
                            <a href="#about">about</a>
                        </li>
                        <li className="header_sm-menu-link">
                            <a href="#projects">projects</a>
                        </li>
                        <li className="header_sm-menu-link">
                            <a href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
