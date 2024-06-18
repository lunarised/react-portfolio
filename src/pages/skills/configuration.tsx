import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const ConfigRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Configuration Management"
			color="#CCCC00"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				I have in the past, used some configuration management tools, and used
				them to have multiple machines running the same version of specific
				software. For this task, I used both Chef and Puppet, although I
				preferred puppet as it made far more sense to me in regards of its
				grouping scheme. I have also dabbled a little into Nix, which is a
				functional programming based tool that deals with configuation
				management, and is the core technology behind a linux distribution
				called NixOS
			</ContentParagraph>
		</CollapsableRow>
	);
};
