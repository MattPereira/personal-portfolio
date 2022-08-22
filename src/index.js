import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// const i = {};
// i.am = 'a full stack web developer';
// i.usedTo = ['screen print t-shirts', 'conduct economic research', 'teach English in China'];
// i.love = ['yoga', 'meditation', 'snowboarding', 'linux', 'dogs'];
// i.skills = ['JavaScript', 'React', 'Express', 'postgreSQL', 'Python', 'Flask', 'Bootstrap'];
// i.aspire = 'to build worthwhile websites';
