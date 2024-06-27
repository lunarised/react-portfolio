import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const BashRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Bash"
      color="#89e051"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I have a lot of experience with using Bash, as I use it as my preferred
        shell on my operating systems. While the Bash I write isn't technically
        impressive, it does what I need it to do, by automating tedious tasks{" "}
        <a href="https://github.com/lunarised/jmake">
          such as automating Jeckyl metadata.
        </a>
      </ContentParagraph>
    </CollapsibleRow>
  );
};
