import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const TypescriptRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Typescript"
			color="#3178c6"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				I have used Typescript in a professional environment for over three
				years, helping to develop LabChart Lightning with ADInstruments. In that
				time, I have written code responsible for data integrity as well as
				refactored existing code to be reused throughout the application
			</ContentParagraph>
			<ContentParagraph>
				Outside of a professional environment, I have used Typescript on a few
				pet projects, one of which being{" "}
				<a href="https://github.com/lunarised/react-portfolio/">
					the site you are currently reading this on
				</a>
			</ContentParagraph>
		</CollapsableRow>
	);
};
