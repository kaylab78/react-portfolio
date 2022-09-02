import React from 'react';

function Navigation() {
    return (
        <header>
            <h2>
                <a href="/">Kayla Backus</a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact Me
                        </a>
                    </li>
                    <li>
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;