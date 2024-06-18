import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";

export const CppRow = (props: {
  open: string;
  setOpen: (open: string) => void;
}) => {
  return (
    <CollapsableRow
      name="C++"
      color="#f34b7d"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        C++ is the language where I first started building big projects. I build
        a roguelike game in C++ for my Programming 4 paper. While most of the
        project was done in the .NET framework, with little native C++ being
        written, I did write some C++ for the more difficult parts of the
        project (such as using native vectors for the room generation algorithm,
        which was utilizing a poisson distribution). I enjoy writing C++, and It
        is probably one of my best languages, beside Java and Python
      </ContentParagraph>
    </CollapsableRow>
  );
};
