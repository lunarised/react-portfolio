import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const JavaRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Java"
			color="#b07219"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				Most of my prototype programming is done in Java, as it was the first
				language which I learnt to a degree of proficiency. The fact that it is
				very clean for crossplatform development is ideal for me as a Windows x
				Linux Based Programmer.
			</ContentParagraph>
			<ContentParagraph>
				In Java, I have explored many problems, from implementing data
				structures and building GUI's to creating more complex applications with
				data-graphing, and even doing some (now understandably) silly systems
				programming. Java is definitely one of my go-to languages for any sort
				of software development or mock up
			</ContentParagraph>
		</CollapsableRow>
	);
};
