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
				Most of my education in software development was in Java, notably, the
				very old Java 7. I used Java to learn about algorithms and data
				structures, as well as good OO design principles
			</ContentParagraph>
			<ContentParagraph>
				While I may look at OO with a bit more of a critical view, I still
				program in Java from time to time, if there is something I need to mock
				out where having an OO design makes it easier to reason with
			</ContentParagraph>
		</CollapsableRow>
	);
};
