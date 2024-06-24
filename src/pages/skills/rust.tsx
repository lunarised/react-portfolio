import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const RustRow = (props: SkillsProps) => {
  return (
    <CollapsableRow
      name="Rust"
      color="#dea584"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        Rust is my project language. When I have spare time, I try to pick up
        some rust and write some code. It is certainly not my best language but
        I am constantly striving to improve my fluency with it
      </ContentParagraph>
    </CollapsableRow>
  );
};
