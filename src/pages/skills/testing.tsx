import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow, ContentLink } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const TestingRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Agile"
      color="#8B634B"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I strive to write code with testing in mind. I have experience in both
        writing testable code, but also in testing said code, both through
        manual and automated testing.
      </ContentParagraph>
      <ContentParagraph>
        I have used technologies such as Jest, Spectron, Playwrite and Selenium
        to test code and have utilized Test Driven Development to write specific
        functions where appropriate
      </ContentParagraph>
    </CollapsibleRow>
  );
};
