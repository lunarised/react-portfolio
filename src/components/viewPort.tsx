import styled from "styled-components";
import displayPicture from "../assets/dp.jpg";
import { HomeSection } from "../pages/home";
import { AboutMeSection } from "../pages/about-me";
import { ExperienceSection } from "../pages/experience";
import { ProjectsSection } from "../pages/projects";
import { StyledButton } from "./ModalButton";
const ViewPortDiv = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;

  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
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

export const NavBarDiv = styled.nav`
  background-color: red;
  width: 100px;
  height: 100px;

  @media only screen and (min-width: 992px) {
    display: flex;
    text-align: center;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    background-color: #6fa587;
    height: 100vh;
    min-width: 17rem;
    flex-direction: column;
    overflow: auto;
  }
`;

export const ContentWindow = styled.div`
  display: flex;
  @media only screen and (min-width: 992px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

const StyledLink = styled.a`
  color: #b7d2c3;
  padding: 0.7rem 1rem;
`;

const NavBar = () => {
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

export const ViewPort = () => {
  return (
    <ViewPortDiv>
      <NavBar />
      <ContentWindow>
        <HomeSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <StyledButton backgroundColor="#00cc00" foregroundColor="#0000FF">
          {" "}
          Hi Grant{" "}
        </StyledButton>
      </ContentWindow>
    </ViewPortDiv>
  );
};
