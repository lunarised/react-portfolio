import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const VirtualisationRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Virtualisation"
			color="#DA5B0B"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				As a member of the Student Ops group, I utilised VMWare to provide
				virtual machines to the other project groups. I have also used
				virtualization in my own time, such as using dyanamic malware analysis
				tools such as Cuckoo, which require a very specific virtual machine
				setup
			</ContentParagraph>
		</CollapsableRow>
	);
};
