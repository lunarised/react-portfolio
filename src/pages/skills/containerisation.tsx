import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const ContainerisationRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Containerisation"
      color="#00B4AB"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        Through my degree, I was responsible for maintaining several Docker
        containers as well as packaging with docker-compose.
      </ContentParagraph>
    </CollapsibleRow>
  );
};
