import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const GitRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Git"
			color="#333333"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				I have used git as my primary version control system in my professional
				environment as well as for my own personal use. I have solved a
				multitude of hairy merge requests, managed multiple remotes, used git
				tooling to give and recieve code reviews.
			</ContentParagraph>
		</CollapsableRow>
	);
};
