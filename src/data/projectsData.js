import nflImg from "../assets/images/no-fun-league.png";
import ccgcImg from "../assets/images/ccgc.png";
import tabernacleImg from "../assets/images/tabernacle.png";

export const projectsData = [
  {
    title: "Contra Costa Golf Club",
    image: ccgcImg,
    links: {
      github: "https://github.com/MattPereira/ccgc-backend",
      site: "https://ccgc.surge.sh/",
      info: "https://github.com/MattPereira/ccgc-backend#readme",
    },
    languages: ["Javascript, HTML, CSS"],
    technologies: ["React, Express, PostgreSQL, Material-UI, Railway, Surge"],
    description:
      "A full stack, single page web app for a local golf organization featuring a custom built API, full CRUD functionality, user authentication, and a tour points system incorporating handicaps to determine a champion based on all rounds inputted.",
  },
  {
    title: "No Fun League",
    image: nflImg,
    links: {
      github: "https://github.com/MattPereira/no-fun-league",
      site: "https://no-fun-league.up.railway.app/",
      info: "https://github.com/MattPereira/no-fun-league#readme",
    },
    languages: ["Python, HTML, CSS"],
    technologies: ["Flask, PostgreSQL, SQLAlchemy, Jinja, Bootstrap, Railway"],
    description:
      "A full stack web app for my fantasy football league. All of the roster, draft, and player data is sourced from the Sleeper API. The site serves the members of the league by providing them with updated information about their rosters and past league drafts. Additionally, league members can edit their profiles, create blog posts, and vote on proposed rule changes.",
  },
  {
    title: "Tabernacle School",
    image: tabernacleImg,
    links: {
      github: "https://github.com/MattPereira/tabernacle-frontend",
      site: "https://tabernacle.school",
      info: "https://github.com/MattPereira/tabernacle-frontend#readme",
    },
    languages: ["Javascript, HTML, CSS"],
    technologies: ["React, Material-UI, Strapi, Heroku, Surge"],
    description:
      "A single page web application for Tabernacle School. The site advertises to prospective families and provides current families with essential documents and information. Features include forms that allow users to send an email to the school and extensive use of Material UI.",
  },
];
