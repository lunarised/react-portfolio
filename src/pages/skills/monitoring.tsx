import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const MonitoringRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Monitoring"
			color="#b30000"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				For server monitoring, I have both used homemade tools, and effective
				tools. I designed some software that would send diagnostics to a
				Raspberry Pi, which would then send me a phone notification, via the
				Browser if something had happened to any of my systems. As this was
				several years ago, and didn't work when I expected it to, I looked into
				other monitoring software, At this time, I was introduced to Nagios in
				my Systems Administration class. I liked the sheer simplicity of Nagios,
				and have been using it since. I also did some configuration management
				as part of my Student Ops role with Nagios.
			</ContentParagraph>
		</CollapsableRow>
	);
};
