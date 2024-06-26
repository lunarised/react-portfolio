import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const ReactRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="React"
      color="#f1e05a"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        Most of the UI in LabChart Lightning was written using React with
        styled-components. One of the more frequent tasks I undertook at
        ADInstruments was creating clean and functional React code, following
        the guidance of an in house designer.
      </ContentParagraph>
      <ContentParagraph>
        A notable project I undertook was to update all of our old popover
        components with Floating UI which required a messing around with coding
        conventions of React and modernising them so they can be worked on more
        easily in the future (and clean up some bugs while I'm at it!)
      </ContentParagraph>
    </CollapsibleRow>
  );
};
