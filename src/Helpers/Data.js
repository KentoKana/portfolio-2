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
    liveUrl: "http://kentokanazawa.com/blog-posts",
    gitHubUrl: "https://github.com/KentoKana/portfolio-2/tree/master/server",
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
      "Username: TokenTestUser<br> Password: test <br> As part of an academic project, I worked with 2 other classmates to build a game aimed to get kids to practice logical thinking. I was responsible for building/planning out most of the back-end logic, which involved building CRUD features (including form validations) for users with MongoDB, as well as passing necessary information to the game board.",
    liveUrl: "http://enter-the-codegeon.raymondgiang.com/",
    gitHubUrl: "https://github.com/KentoKana/enter-the-codegeon",
    learnMoreUrl: "",
    toolsUsed: ["PHP", "MongoDB"],
    imageSrc: {
      main: "images/projects/enter-the-codegeon.gif",
      thumbnail: "images/projects/thumbnails/enter-the-codegeon.png"
    }
  },
  {
    name: "Portfolio Version 1",
    description:
      "This is my very first portfolio website built with ReactJS while I was studying web development at Humber College in Toronto. The layout was built using the React Bootstrap NPM package. The portfolio focused on ease of use, as practicing my ability to work with React effectively.",
    liveUrl: "http://portfolio-ver-1.kentokanazawa.com",
    gitHubUrl: "https://github.com/KentoKana/portfolio",
    learnMoreUrl: "",
    toolsUsed: ["ReactJS", "React Bootstrap"],
    imageSrc: {
      main: "images/projects/portfolio-version1.gif",
      thumbnail: "images/projects/thumbnails/portfolio-version1.png"
    }
  },
  {
    name: "Guess The Location",
    description:
      "This my take on the popular game, GeoGuessr. This project uses Nominatim GeoCoder, Country.io, and Google APIs, and is consumed using React and Axios. The app randomly selects a street-view available latitude and longitude coordinate, and asks the player to guess the target location by searching for clues in the street-view. UPDATE: There is a bug with where the app sometimes retrieves the wrong coordinates as the correct answer. Working on a fix.",
    liveUrl: "http://guess-the-location.kentokanazawa.com",
    gitHubUrl: "https://github.com/KentoKana/guess-the-location-game",
    learnMoreUrl: "",
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
      "Username: Kento <br> Password: kento<br> A chat application powered by XML, jQuery and PHP. Chat is information is stored as XML. I implemented a basic login system, with the login credentials stored within a `Users` XML file. The login credentials are hashed, and basic validation is also implemented at the time of login. JQuery Ajax is used to asynchronously update the chat information, both in posting and retrieving message information.",
    liveUrl: "http://xml-chat-app.kentokanazawa.com/",
    gitHubUrl: "https://github.com/KentoKana/xml-chat-application",
    learnMoreUrl: "",
    toolsUsed: ["XML", "AJAX", "jQuery", "PHP", "PHP Sessions"],
    imageSrc: {
      main: "images/projects/xml-chat-app.gif",
      thumbnail: "images/projects/thumbnails/xml-chat-app.png"
    }
  },
  {
    name: "Humbie Helper",
    description:
      "Username: TokenTestUser <br> Password: test <br> This academic group project was built with the intention of allowing web development students at Humber to manage their projects. I specifically worked on the User Management system (Registration, Profile View, User Information Edit, and User Deletion). Other involvements include creation of timesheet/time, upcoming deadlines feature, and general back-end planning for the entire web application.",
    liveUrl: "https://humbiehelper.skriptkaiju.com/",
    gitHubUrl: "https://github.com/KentoKana/humbie-helper",
    learnMoreUrl: "",
    toolsUsed: ["Bootstrap 4", "PHP", "MySQL"],
    imageSrc: {
      main: "images/projects/humbie-helper.gif",
      thumbnail: "images/projects/thumbnails/humbie-helper.png"
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
  {
    name: "Portfolio Version 2",
    thumbnailImageSrc:
      "images/projects/thumbnails/portfolio-version2-design.png",
    mainImageSrc: "images/projects/portfolio-version2-design.png"
  }
];
