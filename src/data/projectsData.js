import nfl_logo from "../assets/images/no_fun_league.png";
import ccgc_logo from "../assets/images/ccgc_logo.png";
import ts_logo from "../assets/images/ts_logo.png";

import ccgc1 from "../assets/images/ccgc/screenshot1.png";
import ccgc2 from "../assets/images/ccgc/screenshot2.png";
import nfl1 from "../assets/images/nfl/screenshot1.png";
import nfl2 from "../assets/images/nfl/screenshot2.png";
import ts1 from "../assets/images/ts/screenshot1.png";
import ts2 from "../assets/images/ts/screenshot2.png";

export const projectsData = [
  {
    title: "Contra Costa Golf Club",
    logo: ccgc_logo,
    links: {
      github: "https://github.com/MattPereira/ccgc-backend",
      live: "https://ccgc.surge.sh/",
    },
    languages: ["Javascript, HTML, CSS"],
    technologies: ["React, Express, PostgreSQL, Material-UI, Railway, Surge"],
    screenshots: [ccgc1, ccgc2],
    description:
      "A full stack, single page web app for a local golf organization featuring a custom built API, full CRUD functionality, user authentication, and a tour points system incorporating handicaps to determine a champion based on all rounds inputted.",
  },
  {
    title: "No Fun League",
    logo: nfl_logo,
    links: {
      github: "https://no-fun-league.up.railway.app/",
      live: "https://github.com/MattPereira/no-fun-league",
    },
    languages: ["Python, HTML, CSS"],
    technologies: ["Flask, PostgreSQL, SQLAlchemy, Jinja, Bootstrap, Railway"],
    screenshots: [nfl1, nfl2],
    description:
      "A full stack web app for my fantasy football league. All of the roster, draft, and player data is sourced from the Sleeper API. The site serves the members of the league by providing them with updated information about their rosters and past league drafts. Additionally, league members can edit their profiles, create blog posts, and vote on proposed rule changes.",
  },
  {
    title: "Tabernacle School",
    logo: ts_logo,
    links: {
      github: "https://tabernacle.school",
      live: "https://github.com/MattPereira/tabernacle-frontend",
    },
    languages: ["Javascript, HTML, CSS"],
    technologies: ["React, Material-UI, Strapi, Heroku, Surge"],
    screenshots: [ts1, ts2],
    description:
      "A single page web application for Tabernacle School. The site advertises to prospective families and provides current families with essential documents and information. Features include forms that allow users to send an email to the school and extensive use of Material UI.",
  },
];
