import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navigation(props) {

    let offset = 110;
    let [menuVisible, toggleMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        !menuVisible ? toggleMobileMenu(true) : toggleMobileMenu(false);
    }

    const navLinks = [
        {
            onSamePage: true,
            label: 'Development Work',
            url: '#development',
        },
        {
            onSamePage: true,
            label: 'Design Work',
            url: '#designs',
        },
        {
            onSamePage: false,
            label: 'Google',
            url: 'http://google.com',
        }
    ]

    const renderMobileMenuIcon = () => {
        if (menuVisible) {
            return (<i class="fas fa-times"></i>);
        } else {
            return (<i className="fas fa-bars"></i>);
        }
    }

    return (
        <header className="navigation">
            <nav>
                <div className="container">
                    <a href="http://kentokanazawa.com">
                        <img className="navigation__logo" src="images/logo.png" alt="Web Developer Logo" />
                    </a>
                    <button onClick={handleMobileMenu} className="navigation__hamburger-menu button-primary">
                        {renderMobileMenuIcon()}
                    </button>
                    <ul className={`navigation__links ${menuVisible ? 'showMobile' : ''}`}>
                        {
                            navLinks.map((nl) => {
                                if (nl.onSamePage) {
                                    return (
                                        <li>
                                            <AnchorLink
                                                className=''
                                                href={nl.url}
                                                offset={offset}
                                                onClick={handleMobileMenu}
                                            >
                                                {nl.label}
                                            </AnchorLink>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li>
                                            <a href={nl.url}>{nl.label}</a>
                                        </li>
                                    )
                                }

                            })
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
