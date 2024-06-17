import {
	CardContent,
	ContentParagraph,
	SectionTitle,
	SubHeading,
} from "../components/ContentStylings";
import { PageCard } from "../components/pageCard";

export const ProjectsSection = () => {
	return (
		<PageCard id="Projects">
			<SectionTitle>Projects</SectionTitle>
			<CardContent>
				<ContentParagraph>
					I have worked on several small projects, either to learn a language,
					or just as something to do! I have a few projects currently where I am
					a little stuck, and plenty of projects which I have finished. Some of
					these projects are just running small servers, whereas others are
					programming projects in different languages, or projects designed to
					help me learn an operating system.
				</ContentParagraph>

				<SubHeading>Radio</SubHeading>
				<ContentParagraph>
					A Project I am currently working on is to run a small internet radio
					station, which is something I toyed with a year or so ago (Mid 2019).
					I am currently refactoring the code, building a Vue js frontend and
					redoing the backend so that the audiochannels are encrypted on their
					way to the client. You can find the link to the github repository
					<a href="https://github.com/lunarised/radio">here!</a>
				</ContentParagraph>
				<ContentParagraph>
					You can also find a link to the old version of the radio
					<a href="https://lunarised.com/oldRadio/">here</a>
				</ContentParagraph>
			</CardContent>
		</PageCard>
	);
};
