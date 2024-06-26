import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const RubyRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Ruby"
      color="#701516"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        My experience with Ruby has only been for 2 small projects. The first
        one was for a programming assignment, where we had to create the famous
        Mastermind game in Ruby. It was here where I first discovered how clean
        this language looks. From the english like way that it read, to the
        sample method that retrieved a random element in a list, this language
        had everything a beautiful language could have.
      </ContentParagraph>
      <ContentParagraph>
        The other project I have used ruby to work through, was a bot that
        connected to a fediverse instance, and made posts from a set of files
        pertaining to musicians/bands, and sentences. I still haven't finished
        this project, but it is one i'm quite fond of
      </ContentParagraph>
    </CollapsibleRow>
  );
};
