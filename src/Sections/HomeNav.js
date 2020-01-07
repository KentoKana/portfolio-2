import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { homeNavLinks } from "../Helpers/Data";

const HomeNav = () => {
  const offset = 110;
  const [homeNavClassName, setHomeNavClassName] = useState("homeNav");

  useEffect(() => {
    window.addEventListener("scroll", e => {
      setHomeNavClassName("homeNav isScrolling");
    });
  }, []);

  if (homeNavClassName === "homeNav isScrolling") {
    setTimeout(() => {
      setHomeNavClassName("homeNav");
    }, 2000);
  }

  return (
    <nav className={homeNavClassName}>
      <div className="container">
        <ul>
          {homeNavLinks.map((nl, key) => {
            console.log(homeNavLinks.length);
            let isLastItem;
            if (homeNavLinks.length - 1 === key) {
              isLastItem = true;
            }
            return (
              <li key={key}>
                <AnchorLink className="" href={nl.url} offset={offset}>
                  {nl.label}
                  {!isLastItem ? " / " : ""}
                </AnchorLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default HomeNav;
