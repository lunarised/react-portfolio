import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AboutMeSection } from "./pages/about-me";
import { ExperienceSection } from "./pages/experience";
import { HomeSection } from "./pages/home";
import { ProjectsSection } from "./pages/projects";
import { StyledButton } from "./components/ModalButton";
import { ViewPort } from "./components/viewPort";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ViewPort />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
