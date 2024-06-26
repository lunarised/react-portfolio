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
        Most of the UI in LabChart Lightning was written using react with
        StyledComponents. One of the more frequent tasks I undertook at
        ADInstruments was creating clean and functional react code, following
        the guidance of an inhouse designer
      </ContentParagraph>
      <ContentParagraph>
        A notable project I undertook was to update all of our old popover
        components with Floating-UI which required a bunch of messing around
        with older styles of react and modernising them so they can be worked on
        more easily in the future (and clean up some bugs while we are at it!)
      </ContentParagraph>
    </CollapsibleRow>
  );
};
