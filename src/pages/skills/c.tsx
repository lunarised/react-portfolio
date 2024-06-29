import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow, ContentLink } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const CRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="C"
      color="#555555"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I have limited experience developing in C, but I try to pick it up from
        time to time to increase my knowledge of lower level systems
        programming. I have implemented red-black trees, graph searching and
        other algorithms and data structures in C from my University programming
        course, however a more recent C project has been to catalogue a
        multitude of searches I have come across on the internet{" "}
        <ContentLink href="https://github.com/lunarised/Programming/tree/master/C/Sorts">
          which you can find and laugh at here!
        </ContentLink>
      </ContentParagraph>
    </CollapsibleRow>
  );
};
