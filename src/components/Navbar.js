import React from 'react'

const Navbar = () => {
    return (
        <header class="header">
            <div class="header_content">
                <div class="header_logo-container">
                    <div class="header_logo-img-cont">
                        <img src="https://avatars.githubusercontent.com/u/107618711?v=4" alt="ram maheshwari logo"
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
                    <div class="header_main-ham-menu-cont">
                        <img src="../Rammaheshwari/ham-menu.svg" alt="ham menu"
                            class="header_main-ham-menu" />
                        <img src="../Rammaheshwari/ham-menu-close.svg" alt="ham menu close"
                            class="header_main-ham-menu-close d-none" />
                    </div>
                </div>
            </div>
            <div class="header_sm-menu">
                <div class="header_sm-menu-content">
                    <ul class="header_sm-menu-links">
                        <li class="header_sm-menu-link">
                            <a href="">home</a>
                        </li>
                        <li class="header_sm-menu-link">
                            <a href="">about</a>
                        </li>
                        <li class="header_sm-menu-link">
                            <a href="">projects</a>
                        </li>
                        <li class="header_sm-menu-link">
                            <a href="">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
