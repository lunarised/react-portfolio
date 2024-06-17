import { Breakpoint } from "react-socks";
import { PageCard } from "../components/pageCard";
import styled from "styled-components";
import { CardContent, ContentParagraph } from "../components/ContentStylings";
import { randomInt } from "crypto";
import linkedInIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
const PageTitle = styled.h1`
	font-size: 4em;
	padding-bottom: 1em;
`;
const SubTitle = styled.h2`
	font-size: 3em;
	color: #000000aa;
	padding-bottom: 1.3em;
	width: 70%;

	&:target {
		opacity: 1;
	}
`;

const randomSaying = () => {
	const randomIndex = Math.random() * 5;
	const headings = ["Dog Person", "Cat Person", "Human Person", "Yo", "Wo"];
	return headings[Math.floor(randomIndex)];
};

export const HomeSection = () => {
	return (
		<PageCard style={{ paddingTop: "12%" }} id="Home">
			<Breakpoint medium up>
				<PageTitle>James McKenzie</PageTitle>
			</Breakpoint>
			<br />
			<SubTitle>Programmer, Sys Admin, {randomSaying()}</SubTitle>
			<CardContent>
				<ContentParagraph>
					I am a BIT graduate from Otago Polytechnic with experience in
					operations, systems programming, machine learning, and infrastructure
					management.
				</ContentParagraph>
				<ContentParagraph>
					At the Otago Polytechnic, I was a key member in the student OP's team,
					and had various experiences maintaining systems. Such experiences were
					managing SSL certificates, diagnosing hardware faults, and general
					maintenance of several systems used by the other students for their
					projects.
				</ContentParagraph>
			</CardContent>
			<a href="https://github.com/lunarised">
				<img
					src={githubIcon}
					alt="Find me on Github!"
					height="64px"
					width="64px"
				/>
			</a>{" "}
			<a href="https://linkedin.com/in/lunarised">
				<img
					src={linkedInIcon}
					alt="Connect with me on LinkedIn"
					height="64px"
					width="64px"
				/>
			</a>
		</PageCard>
	);
};
