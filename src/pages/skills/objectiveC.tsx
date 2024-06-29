import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow, ContentLink } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const ObjCRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Objective C"
      color="#438eff"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I have used Objective C as part of a Delayed Rendering project in
        LabChart Lightning. Rather than utilise the handles Electron provided,
        Objective C was used with the Foundation framework to access the system
        clipboard.
      </ContentParagraph>
      <ContentParagraph>
        A system of delayed rendering was implemented so that data on the
        clipboard could remain format agnostic until a paste operation was
        performed. I found the process of writing Objective C to be pleasant,
        although finding accurate and relevant documentation was at times
        challenging.
      </ContentParagraph>
      <ContentParagraph>
        You can find the link to a{" "}
        <ContentLink href="https://github.com/lunarised/DelayedRenderingPrototype">
          prototype delayed rendering application here.
        </ContentLink>
      </ContentParagraph>
    </CollapsibleRow>
  );
};
