import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const ContainerisationRow = (props: SkillsProps) => {
	return (
		<CollapsableRow
			name="Containerisation"
			color="#00B4AB"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				While I have dabbled in docker a fair bit in my degree, Maintaining
				containers, fixing errors for other people and even creating some
				containers myself, There is still much for me to learn in regard to
				Docker, Such as Docker-Compose, Docker Swarm and Kubernetes. I intend to
				improve my skills with Docker over the coming months as I really enjoy
				the idea of containerization
			</ContentParagraph>
		</CollapsableRow>
	);
};
