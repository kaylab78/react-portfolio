import React from 'react';

function Navigation() {
    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    Kayla Backus
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a data-testid="portfolio" href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a data-testid="contact" href="#contact">
                            Contact Me
                        </a>
                    </li>
                    <li>
                        <a data-testid="resume" href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;