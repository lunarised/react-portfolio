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
				I have used a large amount of git, from using it as a developer by
				utilizing CI/CD and pull requests to make my development more agile, to
				maintaining it for all IT students at Otago Polytechnic. While the user
				side of git is mostly the same regardless of what provider you are
				using, I have worked with the greater git ecosystems in Github, Gitlab,
				and Gitea. I'm constantly looking for new and interesting ways to
				utilize git to help me with my projects.
			</ContentParagraph>
		</CollapsableRow>
	);
};
