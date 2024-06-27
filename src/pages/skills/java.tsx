import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const JavaRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Java"
      color="#b07219"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        Most of my education in software development used Java, notably, the
        very old Java 7. I used Java to learn about algorithms and data
        structures, as well as OO design principles
      </ContentParagraph>
      <ContentParagraph>
        While I may look at OO with a bit more of a critical view, I still
        program in Java from time to time, if using OO patterns makes it easier
        to reason about a problem
      </ContentParagraph>
    </CollapsibleRow>
  );
};
