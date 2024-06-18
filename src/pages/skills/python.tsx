import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const PythonRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Python"
			color="#3572A5"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				Python was the language I used most commonly in my last year of my
				education at Otago Polytechnic, as it was used in both the Algorithms
				class, and the AI class.
			</ContentParagraph>
			<ContentParagraph>
				I have experience in many areas of python3 development, such
				data-science and AI (using tools such as tensor flow and numpy),
				designing and testing algorithms, OO Principles, and my favorite of all,
				funtional programming!
			</ContentParagraph>
		</CollapsableRow>
	);
};
