import { PageCard } from "../components/pageCard";
import {
  CardContent,
  ContentParagraph,
  SectionTitle,
} from "../components/ContentStylings";

export const AboutMeSection = () => {
  return (
    <PageCard id="AboutMe">
      <SectionTitle>About Me</SectionTitle>
      <CardContent>
        <ContentParagraph>
          I first started programming upon taking a highschool robotics course,
          where we had to design a multiplayer game utilizing a Picaxe 02m2
          microcontroller, programmed in basic. After writing a small guitar
          hero clone, I tried my hand at making paper scissors rock, which was
          unexplainably, much harder to do! It was solving these problems that I
          developed an interest in programming
        </ContentParagraph>

        <ContentParagraph>
          After highschool, I attended University to study computer science. I
          found out that I was very interested in both programming, and in
          linux. I swapped to using Arch Linux on a thinkpad as my daily driver,
          and learnt the operating system until I could install it in 20 mins. I
          also dabbled a litle more in Embedded Systems; playing around with
          Raspberry Pi's and Arduinos. I ended up creating a Raspberry Pi radio
          configuration which ran off MPD. I had to abandon this project however
          due to some inconsistencies on how the Pi handles UTF characters.
        </ContentParagraph>
        <ContentParagraph>
          I enjoy exploring new and old programming languages and seeing the
          simularities in them, and what makes them different. Whilst I am most
          proficient in Typescript, I often program in Rust, C and Java when
          trying to solve a problem. I have also in the past enjoyed spending
          some evenings studying other, lesser used languages such as Racket,
          OCAML, D and most recently, Gleam
        </ContentParagraph>
        <ContentParagraph>
          Outside of computers, I really enjoy writing, listening to, and
          performing a wide variety of music, from Rock, to Latin Jazz and many
          things inbetween. I have a youtube channel where I upload covers of
          songs I enjoy playing
        </ContentParagraph>
      </CardContent>
    </PageCard>
  );
};
