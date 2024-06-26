import styled from "styled-components";
import displayPicture from "../assets/dp.jpg";
import { HomeSection } from "../pages/home";
import { AboutMeSection } from "../pages/about-me";
import { ExperienceSection } from "../pages/experience/experience";
import { ProjectsSection } from "../pages/projects";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { TechnicalExpertise } from "../pages/skills/technical-expertise";

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
  padding-top: 20vh;
  text-align: center;
  height: 100vh;
  min-width: 15rem;
  flex-direction: column;
  overflow: hidden;
  position: sticky;
  top: 0px;
`;

export const HorizontalNavBarDiv = styled.nav`
  text-align: center;
  align-items: left;
  background-color: #6fa587;
  flex-direction: column;
  overflow: hidden;
  flex-direction: row;
  top: 0px;
  position: fixed;
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 1;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;
`;

const ExpandedNavigation = styled.div<{ $isOpen?: boolean }>`
  height: ${(props: { $isOpen?: boolean }) =>
    props.$isOpen ? "215px" : "0px"};
  display: flex;
  max-height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  transition: height 1s ease;
  transition: all 0.3s ease;
`;

export const LargeContentWindow = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.a`
  color: #b7d2c3;
  padding: 0.7rem 1rem;
`;
const TitleHeader = styled.h1`
  padding: 5px;
  color: #ffffff;
`;
const HorizontalNavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const setOpenDelayed = () => {
    setTimeout(() => setOpen(false), 100);
  };
  return (
    <HorizontalNavBarDiv>
      <TitleRow>
        <TitleHeader>James McKenzie</TitleHeader>
        <Hamburger toggle={setOpen} toggled={isOpen} color="#ffffffbf" />
      </TitleRow>

      <ExpandedNavigation $isOpen={isOpen}>
        <StyledLink href="#Home" onClick={() => setOpenDelayed()}>
          Home
        </StyledLink>
        <StyledLink href="#AboutMe" onClick={() => setOpenDelayed()}>
          About Me
        </StyledLink>
        <StyledLink href="#TechnicalExpertise" onClick={() => setOpenDelayed()}>
          Technical Expertise
        </StyledLink>
        <StyledLink href="#Experience" onClick={() => setOpenDelayed()}>
          Experience
        </StyledLink>
        <StyledLink href="#Projects" onClick={() => setOpenDelayed()}>
          Projects
        </StyledLink>
      </ExpandedNavigation>
    </HorizontalNavBarDiv>
  );
};

const VerticalNavBar = () => {
  return (
    <NavBarDiv>
      <StyledDisplayPicture src={displayPicture} alt="Hey, Its me!" />
      <StyledLink href="#Home"> Home </StyledLink>
      <StyledLink href="#AboutMe"> About Me </StyledLink>
      <StyledLink href="#TechnicalExpertise"> Technical Expertise </StyledLink>
      <StyledLink href="#Experience"> Experience </StyledLink>
      <StyledLink href="#Projects"> Projects </StyledLink>
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
        <TechnicalExpertise />
        <ExperienceSection />
        <ProjectsSection />
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
        <TechnicalExpertise />
        <ExperienceSection />
        <ProjectsSection />
      </LargeContentWindow>
    </LargeViewportDiv>
  );
};
