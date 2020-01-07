import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { homeNavLinks } from "../Helpers/Data";

const HomeNav = () => {
  let offset = 110;

  return (
    <nav className="homeNav">
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
