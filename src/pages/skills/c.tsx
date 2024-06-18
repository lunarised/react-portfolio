import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const CRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="C"
			color="#555555"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				While Rust is my go to systems programming language, I got my love of
				systems programming from using C. I have used C in many projects, from
				CLI games of ECard, to several arduino projects (such as a digital
				theremin, or a collision avoiding robot). I still get a kick out of
				firing up my C environment, and re-figuring out memory management, which
				is a thrill I dont get in any of my other programming languages of
				choice.
			</ContentParagraph>
		</CollapsableRow>
	);
};
