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
    url: "mailto:kento@kentokanazawa.com?Subject=Hello",
    backgroundColor: "#fff",
    faIcon: <i className="fas fa-envelope"></i>,
    title: "Contact Me"
  }
];

export const projectDetails = [
  {
    name: "Custom Gatsby Theme",
    description:
      "A custom static website theme built using GatsbyJS, and GraphQL (which ships with Gatsby). This theme can toggle between dark and light mode, is fully responsive, and allows for flexible content management through the use of JSON and Markdown files. GraphQL is used to query only the data needed for each component. After cleaning up the code and writing up the documentation, I plan on releasing this theme on NPM as a Gatsby starter theme.",
    liveUrl: "http://gatsby-coffee.kentokanazawa.com/",
    gitHubUrl: "https://github.com/KentoKana/gatsby-coffee-site",
    learnMoreUrl: "/single-blog?id=1",
    toolsUsed: ["ReactJS", "GatsbyJS", "GraphQL", "Sass"],
    imageSrc: {
      main: "images/projects/gatsby-theme.gif",
      thumbnail: "images/projects/thumbnails/gatsby-theme.png"
    }
  },
  {
    name: "Markdown Blog Platform",
    description:
      "I created a database-less blog system using JSON API served through Express. Markdown files are used to write the blog posts, which are then read by the Express app to serve a JSON API endpoint. There is a back-end pagination system to serve a portion of the blog posts at a time, which is consumed using React and Fetch API. Markdown syntax is converted into HTML using the react-markdown package.",
    liveUrl: "http://portfolio-new.kentokanazawa.com/blog-posts",
    gitHubUrl: "http://google.com",
    learnMoreUrl: "/single-blog?id=0",
    toolsUsed: ["ReactJS", "NodeJS & ExpressJS", "Custom JSON API Endpoint"],
    imageSrc: {
      main: "images/projects/md-blog.gif",
      thumbnail: "images/projects/thumbnails/md-blog.png"
    }
  },
  {
    name: "Enter the Codegeon",
    description:
      "As part of an academic project, I worked with 2 other classmates to build a game aimed to teach kids about logical thinking. I was responsible for the back-end logic, which involved building CRUD features (including form validations) for users with MongoDB, as well as passing necessary information to the game board.",
    liveUrl: "http://enter-the-codegeon.raymondgiang.com/",
    gitHubUrl: "https://github.com/KentoKana/enter-the-codegeon",
    learnMoreUrl: "/single-blog?id=2",
    toolsUsed: ["PHP", "MongoDB"],
    imageSrc: {
      main: "images/projects/enter-the-codegeon.gif",
      thumbnail: "images/projects/thumbnails/enter-the-codegeon.png"
    }
  },
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
    name: "Clinic Template Web Design",
    thumbnailImageSrc: "images/projects/thumbnails/clinic-template-design.png",
    mainImageSrc: "images/projects/clinic-template-design.png"
  },
];
