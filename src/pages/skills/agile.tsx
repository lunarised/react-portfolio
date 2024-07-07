import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow, ContentLink } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const AgileRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Agile"
      color="#8B634B"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        Throughout my professional career, I have worked in Agile teams, and
        followed the principles of Agile to deliver high quality software that
        aligns with the needs of end users. I have also run many retrospectives,
        each with actionable outcomes to help continuously improve team
        productivity, lower overheads and help with alignment on projects.
      </ContentParagraph>
    </CollapsibleRow>
  );
};
