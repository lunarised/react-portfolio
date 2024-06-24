import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const BashRow = (props: SkillsProps) => {
  return (
    <CollapsableRow
      name="Bash"
      color="#89e051"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        My knowledge of bash is rather solid and I use bash as my prefered shell
        on my operating systems. While the bash I write isn't technically
        impressive, It does what I need it to do, by automating tedious tasks
        <a href="https://github.com/lunarised/jmake">
          such as Automating Jeckyll metadata
        </a>
      </ContentParagraph>
    </CollapsableRow>
  );
};
