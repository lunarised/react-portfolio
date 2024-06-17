import styled from "styled-components";
import displayPicture from "../assets/dp.jpg";
import { HomeSection } from "../pages/home";
import { AboutMeSection } from "../pages/about-me";
import { ExperienceSection } from "../pages/experience";
import { ProjectsSection } from "../pages/projects";
import { StyledButton } from "./ModalButton";
import { useState } from "react";
import Hamburger from "hamburger-react";

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
	height: ${(props) => (props.$isOpen ? "170px" : "0px")};
	display: flex;
	max-height: 100%;
	flex-direction: column;
	justify-content: flex-start;
	text-align: left;
	transition: height 1s ease;
	transition: all 0.3s ease;
`;

const ExpandedNavigationLink = styled.a`
	padding: 5px;
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

	return (
		<HorizontalNavBarDiv>
			<TitleRow>
				<TitleHeader>James McKenzie</TitleHeader>
				<Hamburger toggle={setOpen} toggled={isOpen} color="#ffffffbf" />
			</TitleRow>

			<ExpandedNavigation $isOpen={isOpen}>
				<StyledLink id="home" className="menu-item" href="/">
					Home
				</StyledLink>
				<StyledLink id="about" className="menu-item" href="/about">
					Technical Proficiencies
				</StyledLink>
				<StyledLink id="contact" className="menu-item" href="/contact">
					About Me
				</StyledLink>
				<StyledLink className="menu-item--small" href="">
					Experience
				</StyledLink>
				<StyledLink className="menu-item--small" href="">
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
