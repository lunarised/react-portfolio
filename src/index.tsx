import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AboutMeSection } from "./pages/about-me";
import { ExperienceSection } from "./pages/experience";
import { HomeSection } from "./pages/home";
import { ProjectsSection } from "./pages/projects";
import { StyledButton } from "./components/ModalButton";
import { LargeViewPort, SmallViewPort } from "./components/viewPort";
import ReactDOM from "react-dom";
import { Breakpoint, BreakpointProvider } from "react-socks";


ReactDOM.render(
  <BreakpointProvider>
    <React.StrictMode>
      <Breakpoint medium up>
        <LargeViewPort />
      </Breakpoint>
      <Breakpoint small down>
        <SmallViewPort />
      </Breakpoint>
    </React.StrictMode>
  </BreakpointProvider>,

  document.getElementById("root") as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);