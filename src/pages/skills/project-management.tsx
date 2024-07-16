import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const PMRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Project Management"
      color="#d32443"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        In my role as Software Engineer at ADI, I had experience managing a
        project, where multiple separate parts of a feature needed to come
        together in a timely manner, most of which being completely green fields
        development
      </ContentParagraph>
      <ContentParagraph>
        I had to manage keeping stake holders upto date on the current state of
        the project, as well as managing other developers to ensure work was
        being done as it was needed, and to ensure deadlines were hit, and to
        hold retrospective meetings to understand what worked and what didn't
      </ContentParagraph>
    </CollapsibleRow>
  );
};
