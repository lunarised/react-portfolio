import styled from "styled-components";
import {
	CardContent,
	ContentParagraph,
	SectionTitle,
	SubHeading,
} from "../components/ContentStylings";
import { PageCard } from "../components/pageCard";
import languageBlob from "../assets/languages.json";
import operationBlob from "../assets/operations.json";
type ButtonProperties = {
	name: string;
	text: string;
	backgroundColor: string;
	textColor: string;
};

type ButtonProps = {
	backgroundcolor: string;
	textcolor: string;
};
const SkillButton = styled.button<ButtonProps>`
	color: ${(props) => props.textcolor};
	background-color: ${(props) => props.backgroundcolor};
	margin-top: 14px;
	margin-right: auto;
	margin-left: 10px;
	border: 0;
	height: 2em;
	border-radius: 12px;
	padding-left: 25px;
	padding-right: 25px;
	font-size: 1em;
	cursor: pointer;
	flex-grow: 1;
	width: 22%;
`;

const OperationsButton = styled.button<ButtonProps>`
	color: ${(props) => props.textcolor};
	background-color: ${(props) => props.backgroundcolor};
	margin-top: 14px;
	margin-right: auto;
	margin-left: 10px;
	border: 0;
	height: 3.2em;
	border-radius: 12px;
	padding-left: 25px;
	padding-right: 25px;
	font-size: 1em;
	cursor: pointer;
	flex-grow: 1;
`;

const ButtonZone = styled.div`
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	padding-bottom: 2em;
`;

export const TechnicalProficiencies = () => {
	const languages: ButtonProperties[] = languageBlob;
	const operations: ButtonProperties[] = operationBlob;
	return (
		<PageCard id="TechnicalProficiencies">
			<SectionTitle>Technical Proficiencies</SectionTitle>
			<CardContent>
				<SubHeading>Programming</SubHeading>
				<ContentParagraph>
					I am primarily a Java programmer; having completed most of my personal
					projects in it, however, I am somewhat flexible in my language
					capabilities, having a varying range of experience in other languages,
					including but not limited to
				</ContentParagraph>
				<ButtonZone>
					{languages.map((props) => {
						return (
							<SkillButton
								textcolor={props.textColor}
								backgroundcolor={props.backgroundColor}
								key={props.name}
							>
								{props.name}
							</SkillButton>
						);
					})}
				</ButtonZone>

				<SubHeading>Operations</SubHeading>
				<ContentParagraph>
					I spent a year in the Otago Polytechnic Student OPs team, and have
					spent a bit of my own time learning about Systems Administration, and
					Operations. I understand and have experience with many technologies
					and systems used in this area. Such as:{" "}
				</ContentParagraph>
				<ButtonZone>
					{operations.map((props) => {
						return (
							<OperationsButton
								textcolor={props.textColor}
								backgroundcolor={props.backgroundColor}
								key={props.name}
							>
								{props.name}
							</OperationsButton>
						);
					})}
				</ButtonZone>
			</CardContent>
		</PageCard>
	);
};
