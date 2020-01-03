import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import Media from 'react-media';

function Navigation(props) {

    let offset = 110;
    let [menuVisible, toggleMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        !menuVisible ? toggleMobileMenu(true) : toggleMobileMenu(false);
    }

    const navLinks = [
        {
            onSamePage: true,
            label: 'Development',
            url: '#development',
        },
        {
            onSamePage: true,
            label: 'Design',
            url: '#designs',
        },
        {
            onSamePage: true,
            label: 'Blog',
            url: '#blog',
        },
        {
            onSamePage: true,
            label: 'About',
            url: '#about',
        },

    ]
    let socialMediaLinks = [
        {
            url: 'http://github.com/kentokana',
            backgroundColor: '#fff',
            faIcon: <i className="fab fa-github"></i>,
            title: 'GitHub',
        },
        {
            url: 'https://www.linkedin.com/in/kento-kanazawa-7147b266/',
            backgroundColor: '#fff',
            faIcon: <i className="fab fa-linkedin-in"></i>,
            title: 'LinkedIn',
        },
        {
            url: 'https://www.behance.net/tokendesigner/',
            backgroundColor: '#fff',
            faIcon: <i className="fab fa-behance"></i>,
            title: 'Behance',
        },
        {
            url: 'http://google.com',
            backgroundColor: '#fff',
            faIcon: <i className="fas fa-envelope"></i>,
            title: 'Contact Me',
        }
    ]

    const NavigationItems = () => {
        if (props.isRoot && window.location.pathname === "/") {
            return (
                navLinks.map((nl, key) => {
                    return (
                        <li key={key}>
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
                })
            );
        } else {
            return (
                <li>
                    <Link to="/" onClick={handleMobileMenu}>
                        <i className="fas fa-home"></i> Back To Home
                    </Link>
                </li>
            )
        }
    }

    const MobileMenuIcon = () => {
        if (menuVisible) {
            return (<i className="fas fa-times"></i>);
        } else {
            return (<i className="fas fa-bars"></i>);
        }
    }

    return (
        <header className="navigation">
            <nav>
                <div className="container">
                    <Link to="/" >
                        <img className="navigation__logo" src="images/logo.png" alt="Web Developer Logo" />
                    </Link>
                    <button onClick={handleMobileMenu} className="navigation__hamburger-menu button-primary">
                        <MobileMenuIcon />
                    </button>
                    <ul className={`navigation__links ${menuVisible ? 'showMobile' : ''}`}>
                        <NavigationItems />
                        <Media query="(max-width: 578px)" render={() =>
                            (
                                <li>
                                    <ul className="mobile-social-link">
                                        {socialMediaLinks.map((sml, key) =>
                                            <li>
                                                <a
                                                    href={sml.url}
                                                    title={sml.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key={key}
                                                >
                                                    {sml.faIcon}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            )}
                        />
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
