import {
  CardContent,
  ContentParagraph,
  SectionTitle,
  SubHeading,
} from "../components/ContentStylings";
import { ContentLink } from "../components/SharedComponents";
import { PageCard } from "../components/pageCard";

export const ProjectsSection = () => {
  return (
    <PageCard id="Projects">
      <SectionTitle>Projects</SectionTitle>
      <CardContent>
        <ContentParagraph>
          Below are a collection of projects I have worked on. Some are small,
          pet hobbyist projects, and some are more serious prototypes. But
          they're all silly little programs to me :).
        </ContentParagraph>

        <SubHeading>Delayed Rendering Prototype</SubHeading>
        <ContentParagraph>
          I built a prototype as a proof of concept to get delayed rendering
          working with Objective C using the Foundation clipboard APIs. The
          basic concept of delayed rendering is to copy data to the clipboard,
          without knowing the format it will be rendered in ahead of time. This
          allows you to copy some data, and then render it differently depending
          on the application that orders the paste. It also means any heavy
          lifting needing to be done by a render function is held off until the
          data is actually being used, potentially preventing unneeded
          computation for unused renders. You can find the GitHub repository for
          this project{" "}
          <ContentLink href="https://github.com/lunarised/DelayedRenderingPrototype">
            here!
          </ContentLink>
        </ContentParagraph>
      </CardContent>
    </PageCard>
  );
};
