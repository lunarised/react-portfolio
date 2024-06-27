import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const CppRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="C++"
      color="#f34b7d"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I have written C++ in a professional environment on and off in my three
        years working at ADInstruments. I worked primarily with C++ that was
        written with the Microsoft COM framework, which was both challenging and
        rewarding.
      </ContentParagraph>
      <ContentParagraph>
        One of the notable bits of C++ I have written was utilising the Windows
        clipboard and delayed rendering to Copy and Paste GBs worth of data
        within our application while minimising downtime for the end user
      </ContentParagraph>
    </CollapsibleRow>
  );
};
