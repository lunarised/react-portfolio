import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const RustRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Rust"
			color="#dea584"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				"Rust is a language that I always strive to get better at. Currently, it
				is nowhere near one of my most proficient languages, However, I am
				always excited for whenever I get the time to go through and write/learn
				a little bit of rust. It really is one of my passions in IT, and I hope
				to see rust grow into a popular language in the coming years.
			</ContentParagraph>
			<ContentParagraph>
				The features I enjoy the most about rust are the Data Ownership Model
				and the provable thread safety. The cargo dependancy manager is pretty
				cool too. While I wouldn't be able to code myself out of a box with
				rust, I'd certainly have a fun time while I am in there.",
			</ContentParagraph>
		</CollapsableRow>
	);
};
