import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const CSharpRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="C#"
      color="#178600"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        My experience with C# was originally as a way to manage Windows forms,
        and was taught as one of the first languages in my Bachelor of IT. While
        I enjoyed programming in C# then, It wasn't until I played around with
        making some functionally designed components for my software testing
        before I truly realised that this language could do so much more than be
        an OO heavy weight like Java. While C# is not my best language, Nor a
        language I will pick over another (Outside of Windows forms), I feel I
        can both develop and review functions written in it
      </ContentParagraph>
    </CollapsibleRow>
  );
};
