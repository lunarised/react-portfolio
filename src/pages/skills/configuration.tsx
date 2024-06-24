import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const ConfigRow = (props: SkillsProps) => {
  return (
    <CollapsableRow
      name="Configuration Management"
      color="#CCCC00"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I have used configuration management tools to manage my servers, both in
        my degree and in my personal projects. My go to is Puppet, however I am
        considering swapping to Nix, or even NixOS as an operating system as I
        improve my skillset
      </ContentParagraph>
    </CollapsableRow>
  );
};
