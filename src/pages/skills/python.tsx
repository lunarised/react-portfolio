import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";

export const PythonRow = (props: {
  open: string;
  setOpen: (open: string) => void;
}) => {
  return (
    <CollapsableRow
      name="Python"
      color="#3572A5"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        Python2 was the first programming language I tried that wasn't connected
        to some kind of microcontroller. I didn't really enjoy python2 that much
        until I tried out python3 and decided that it was the language I like to
        toy with.
      </ContentParagraph>
      <ContentParagraph>
        I have experience in many areas of python3 development, such
        data-science and AI (using tools such as tensor flow and numpy),
        designing and testing algoriths, OO Principles, and my favorite of all,
        funtional programming. While python is almost never my first choice as a
        language for a project, It's a language that I don't get tired of too
        quickly
      </ContentParagraph>
    </CollapsableRow>
  );
};
