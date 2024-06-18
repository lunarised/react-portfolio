import styled from "styled-components";
import {
  CardContent,
  ContentParagraph,
  SectionTitle,
  SubHeading,
} from "../components/ContentStylings";
import { PageCard } from "../components/pageCard";
import operationBlob from "../assets/operations.json";
import { JavaRow } from "./skills/java";
import React from "react";
import { BashRow } from "./skills/bash";
import { CRow } from "./skills/c";
import { CSharpRow } from "./skills/cSharp";
import { CppRow } from "./skills/cpp";
import { PythonRow } from "./skills/python";
import { RubyRow } from "./skills/ruby";
import { RustRow } from "./skills/rust";

type ButtonProperties = {
  name: string;
  text: string;
  backgroundColor: string;
  textColor: string;
};

type ButtonProps = {
  backgroundcolor: string;
  textcolor: string;
};

const OperationsButton = styled.button<ButtonProps>`
  color: ${(props: ButtonProps) => props.textcolor};
  background-color: ${(props: ButtonProps) => props.backgroundcolor};
  margin-top: 14px;
  margin-right: auto;
  margin-left: 10px;
  border: 0;
  height: 3.2em;
  border-radius: 12px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 1em;
  cursor: pointer;
  flex-grow: 1;
`;

const ButtonZone = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  padding-bottom: 2em;
`;

const ProgrammingLanguageList = () => {
  const [open, setOpen] = React.useState("none");
  const reactState = { open: open, setOpen: setOpen };
  return (
    <>
      <JavaRow {...reactState} />
      <CppRow {...reactState} />
      <PythonRow {...reactState} />
      <CRow {...reactState} />
      <CSharpRow {...reactState} />
      <RubyRow {...reactState} />
      <RustRow {...reactState} />
      <BashRow {...reactState} />
    </>
  );
};

export const TechnicalProficiencies = () => {
  const operations: ButtonProperties[] = operationBlob;
  return (
    <PageCard id="TechnicalProficiencies">
      <SectionTitle>Technical Proficiencies</SectionTitle>
      <CardContent>
        <SubHeading>Programming</SubHeading>
        <ContentParagraph>
          I am primarily a Java programmer; having completed most of my personal
          projects in it, however, I am somewhat flexible in my language
          capabilities, having a varying range of experience in other languages,
          including but not limited to
        </ContentParagraph>

        <ProgrammingLanguageList />

        <SubHeading>Operations</SubHeading>
        <ContentParagraph>
          I spent a year in the Otago Polytechnic Student OPs team, and have
          spent a bit of my own time learning about Systems Administration, and
          Operations. I understand and have experience with many technologies
          and systems used in this area. Such as:{" "}
        </ContentParagraph>
        <ButtonZone>
          {operations.map((props) => {
            return (
              <OperationsButton
                textcolor={props.textColor}
                backgroundcolor={props.backgroundColor}
                key={props.name}
              >
                {props.name}
              </OperationsButton>
            );
          })}
        </ButtonZone>
      </CardContent>
    </PageCard>
  );
};
