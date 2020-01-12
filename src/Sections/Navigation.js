import React, { useState } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";
import { navLinks, socialMediaLinks } from "../Helpers/Data";

function Navigation(props) {
  let [menuVisible, toggleMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    !menuVisible ? toggleMobileMenu(true) : toggleMobileMenu(false);
  };

  const NavigationItems = () => {
    return navLinks.map((nl, key) => {
      return (
        <li key={key}>
          <Link to={nl.url} onClick={handleMobileMenu}>
            {nl.label}
          </Link>
        </li>
      );
    });
  };

  const MobileMenuIcon = () => {
    if (menuVisible) {
      return <i className="fas fa-times"></i>;
    } else {
      return <i className="fas fa-bars"></i>;
    }
  };

  return (
    <header className="navigation">
      <nav>
        <div className="container">
          <Link to="/">
            <img
              className="navigation__logo"
              src="images/logo.png"
              alt="Web Developer Logo"
            />
          </Link>
          <button
            onClick={handleMobileMenu}
            className="navigation__hamburger-menu button-primary"
          >
            <MobileMenuIcon />
          </button>
          <ul
            className={`navigation__links ${menuVisible ? "showMobile" : ""}`}
          >
            <NavigationItems />
            <Media
              query="(max-width: 578px)"
              render={() => (
                <li>  
                  <ul className="mobile-social-link">
                    {socialMediaLinks.map((sml, key) => (
                      <li key={key}>
                        <a
                          href={sml.url}
                          title={sml.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {sml.faIcon}
                        </a>
                      </li>
                    ))}
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
