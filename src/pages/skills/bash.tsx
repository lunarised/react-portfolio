import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";

export const BashRow = (props: {
  open: string;
  setOpen: (open: string) => void;
}) => {
  return (
    <CollapsableRow
      name="Bash"
      color="#89e051"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        "Bash has always been a funny language for me to program in. On one
        hand, doing batch processing in it is very straight forward as you can
        consider it a sequence of commands, although, once you add conditionals
        and loops, bash gets rather ugly.
      </ContentParagraph>
      <ContentParagraph>
        I ended up writing a tool in bash that helps initialize jekyll pages. I
        made this after one of my friends who blogs, asked me why he spent more
        time writing in metadata for jekyll to process than he did writing his
        posts. So i essentially made a barebones bash script that fills out the
        metadata for me. I will oneday put it in a build package, but since it
        is mainly just being used by some close friends of mine, I will keep it
        as a simple bash script for now." ,
      </ContentParagraph>
    </CollapsableRow>
  );
};
