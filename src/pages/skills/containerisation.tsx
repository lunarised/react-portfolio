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
        Through my degree, I was responsible for maintaining several docker
        containers as well as packaging some through using docker-compose.
      </ContentParagraph>
    </CollapsableRow>
  );
};
