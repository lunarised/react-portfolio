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
        My knowledge of bash is rather solid and I use bash as my preferred
        shell on my operating systems. While the bash I write isn't technically
        impressive, It does what I need it to do, by automating tedious tasks{" "}
        <a href="https://github.com/lunarised/jmake">
          such as automating Jeckyl metadata
        </a>
      </ContentParagraph>
    </CollapsibleRow>
  );
};
