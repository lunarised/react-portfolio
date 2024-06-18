import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const LinuxRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Linux"
			color="#0088cc"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				I have used linux literally every day for the past 5 years. This was
				originally because I wanted to improve my skills with linux servers,
				however, I quickly fell inlove with Linux as it rarely broke on me, and
				I could configure my environments easier than on Windows. I currently
				use a mix of Arch Linux, and Debian for my projects however, I am
				comfortable with Ubuntu also as I have spent years adding foreign ppa's
				for various things.
			</ContentParagraph>
		</CollapsableRow>
	);
};
