import React from "react";

export const homeNavLinks = [
  {
    label: "Top",
    url: "#top"
  },
  {
    label: "Development",
    url: "#development"
  },
  {
    label: "Design",
    url: "#designs"
  },
  {
    label: "Blog",
    url: "#blog",
    child: {
      label: "View All Blog Posts",
      url: "/blog-posts"
    }
  },
  {
    label: "About",
    url: "#about"
  }
];

export const navLinks = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "Blog",
    url: "/blog-posts?p=1"
  }
];

export const socialMediaLinks = [
  {
    url: "http://github.com/kentokana",
    backgroundColor: "#fff",
    faIcon: <i className="fab fa-github"></i>,
    title: "GitHub"
  },
  {
    url: "https://www.linkedin.com/in/kento-kanazawa-7147b266/",
    backgroundColor: "#fff",
    faIcon: <i className="fab fa-linkedin-in"></i>,
    title: "LinkedIn"
  },
  {
    url: "https://www.behance.net/tokendesigner/",
    backgroundColor: "#fff",
    faIcon: <i className="fab fa-behance"></i>,
    title: "Behance"
  },
  {
    url: "http://google.com",
    backgroundColor: "#fff",
    faIcon: <i className="fas fa-envelope"></i>,
    title: "Contact Me"
  }
];

export const projectDetails = [
  {
    name: "Guess The Location",
    description:
      "This my take on the popular game, GeoGuessr. This project uses Nominatim GeoCoder, Country.io, and Google APIs, and is consumed using React and Axios. The app randomly selects a street-view available latitude and longitude coordinate, and asks the player to guess the target location by searching for clues in the street-view.",
    liveUrl: "http://guess-the-location.kentokanazawa.com",
    gitHubUrl: "http://google.com",
    learnMoreUrl: "http://google.com",
    toolsUsed: [
      "ReactJS",
      "Google Maps API",
      "Nominatim Geocoder API",
      "Country.io API"
    ],
    imageSrc: {
      main: "images/projects/guess-the-location.gif",
      thumbnail: "images/projects/thumbnails/guess-the-location.png"
    }
  },
  {
    name: "XML Chat Application",
    description:
      "A chat application powered by XML, jQuery and PHP. Chat is information is stored as XML. I implemented a basic login system, with the login credentials stored in a separate xml file as well. The login credentials are hashed, and basic validation is also implemented at the time of login.",
    liveUrl: "http://google.com",
    gitHubUrl: "http://google.com",
    learnMoreUrl: "http://google.com",
    toolsUsed: ["XML", "AJAX", "jQuery", "PHP"],
    imageSrc: {
      main: "images/projects/xml-chat-app.gif",
      thumbnail: "images/projects/thumbnails/xml-chat-app.png"
    }
  }
];

export const designDetails = [
  {
    name: "Helen B. Physiotherapist Portfolio Web Design",
    thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
    mainImageSrc: "images/projects/helen-portfolio.png"
  },
  {
    name: "Assistive Technology Web Design",
    thumbnailImageSrc:
      "images/projects/thumbnails/assistive-tech-company-design.png",
    mainImageSrc: "images/projects/assistive-tech-company-design.png"
  },
  {
    name: "Helen B. Physiotherapist Portfolio",
    thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
    mainImageSrc: "images/projects/helen-portfolio.png"
  },
  {
    name: "Helen B. Physiotherapist Portfolio",
    thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
    mainImageSrc: "images/projects/helen-portfolio.png"
  },
  {
    name: "Helen B. Physiotherapist Portfolio",
    thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
    mainImageSrc: "images/projects/helen-portfolio.png"
  },
  {
    name: "Helen B. Physiotherapist Portfolio",
    thumbnailImageSrc: "images/projects/thumbnails/helen-portfolio.png",
    mainImageSrc: "images/projects/helen-portfolio.png"
  }
];
