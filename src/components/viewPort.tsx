import styled from "styled-components";
import displayPicture from "../assets/dp.jpg";
import { HomeSection } from "../pages/home";
import { AboutMeSection } from "../pages/about-me";
import { ExperienceSection } from "../pages/experience";
import { ProjectsSection } from "../pages/projects";
import { StyledButton } from "./ModalButton";
import { Breakpoint } from "react-socks";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";

const SmallViewPortDiv = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
`;

const LargeViewportDiv = styled.div`
  display: flex;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  height: 100%;
  column-gap: 20px;
`;

const StyledDisplayPicture = styled.img`
  display: inline-block;
  max-width: 144px;
  max-height: 144px;
  border: 0.5rem solid rgba(255, 255, 255, 0.2);
  vertical-align: middle;
  border-radius: 5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
`;

const DivBackground = styled.div`
  display: flex;
  align-items: stretch;
  background-color: #6fa587;
  flex: 1;
`;

export const NavBarDiv = styled.nav`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  height: 100vh;
  min-width: 15rem;
  flex-direction: column;
  overflow: hidden;
  position: sticky;
  top: 0px;
`;

export const HorizontalNavBarDiv = styled.nav`
  display: flex;
  text-align: center;
  align-items: left;
  justify-content: center;
  background-color: #6fa587;
  height: 10vh;
  flex-direction: column;
  overflow: hidden;
`;

export const LargeContentWindow = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.a`
  color: #b7d2c3;
  padding: 0.7rem 1rem;
`;

const HorizontalNavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HorizontalNavBarDiv>
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    </HorizontalNavBarDiv>
  );
};

const VerticalNavBar = () => {
  return (
    <NavBarDiv>
      <StyledDisplayPicture src={displayPicture} alt="Hey, Its me!" />
      <StyledLink> Home </StyledLink>
      <StyledLink> Technical Proficiencies </StyledLink>
      <StyledLink> About Me </StyledLink>
      <StyledLink> Experience </StyledLink>
      <StyledLink> Projects </StyledLink>
    </NavBarDiv>
  );
};

export const SmallViewPort = () => {
  return (
    <SmallViewPortDiv>
      <HorizontalNavBar />
      <LargeContentWindow>
        <HomeSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <StyledButton backgroundColor="#FF0000" foregroundColor="#0000FF">
          {" "}
          Hi Grant{" "}
        </StyledButton>
      </LargeContentWindow>
    </SmallViewPortDiv>
  );
};

export const LargeViewPort = () => {
  return (
    <LargeViewportDiv>
      <DivBackground>
        <VerticalNavBar />
      </DivBackground>
      <LargeContentWindow>
        <HomeSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <StyledButton backgroundColor="#00cc00" foregroundColor="#0000FF">
          {" "}
          Hi Grant{" "}
        </StyledButton>
      </LargeContentWindow>
    </LargeViewportDiv>
  );
};
