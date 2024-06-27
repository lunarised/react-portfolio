import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const GitRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Git"
      color="#333333"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I have used Git as my primary version control system in my professional
        environment as well as for my own personal use. I have solved a
        multitude of hairy merge requests, managed multiple remotes, used Git
        tooling to give and receive code reviews.
      </ContentParagraph>
    </CollapsibleRow>
  );
};
