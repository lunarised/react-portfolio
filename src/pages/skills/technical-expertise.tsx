import styled from "styled-components";
import {
  CardContent,
  ContentParagraph,
  SectionTitle,
  SubHeading,
} from "../../components/ContentStylings";
import { PageCard } from "../../components/pageCard";
import { JavaRow } from "./java";
import React from "react";
import { BashRow } from "./bash";
import { CRow } from "./c";
import { CppRow } from "./cpp";
import { PythonRow } from "./python";
import { RustRow } from "./rust";
import { ConfigRow } from "./configuration";
import { ContainerisationRow } from "./containerisation";
import { GitRow } from "./git";
import { LinuxRow } from "./linux";
import { MonitoringRow } from "./monitoring";
import { VirtualisationRow } from "./virtualisation";
import { TypescriptRow } from "./typescript";
import { ReactRow } from "./react";
import { ObjCRow } from "./objectiveC";
import { AgileRow } from "./agile";
import { TestingRow } from "./testing";
import { PMRow } from "./project-management";

const StyledDropdownList = styled.div`
  padding-bottom: 1em;
`;

const ProgrammingLanguageList = () => {
  const [open, setOpen] = React.useState("none");
  const reactState = { open: open, setOpen: setOpen };
  return (
    <StyledDropdownList>
      <TypescriptRow {...reactState} />
      <CppRow {...reactState} />
      <ReactRow {...reactState} />
      <JavaRow {...reactState} />
      <PythonRow {...reactState} />
      <CRow {...reactState} />
      <ObjCRow {...reactState} />
      <RustRow {...reactState} />
      <BashRow {...reactState} />
    </StyledDropdownList>
  );
};

const OtherSkillsList = () => {
  const [open, setOpen] = React.useState("none");
  const reactState = { open: open, setOpen: setOpen };
  return (
    <StyledDropdownList>
      <AgileRow {...reactState} />
      <TestingRow {...reactState} />
      <PMRow {...reactState} />
    </StyledDropdownList>
  );
};

const OperationsSkillsList = () => {
  const [open, setOpen] = React.useState("none");
  const reactState = { open: open, setOpen: setOpen };
  return (
    <StyledDropdownList>
      <LinuxRow {...reactState} />
      <GitRow {...reactState} />
      <MonitoringRow {...reactState} />
      <VirtualisationRow {...reactState} />
      <ContainerisationRow {...reactState} />
      <ConfigRow {...reactState} />
    </StyledDropdownList>
  );
};

export const TechnicalExpertise = () => {
  return (
    <PageCard id="TechnicalExpertise">
      <SectionTitle>Technical Expertise</SectionTitle>
      <CardContent>
        <SubHeading>Programming</SubHeading>
        <ContentParagraph>
          I am primary a Typescript programmer, with a background in functional
          and procedural programming, however I have some experience in OO based
          languages too. The programming languages / frameworks I have
          experience with include, but are not limited to:
        </ContentParagraph>

        <ProgrammingLanguageList />

        <SubHeading>Operations</SubHeading>
        <ContentParagraph>
          I maintain several servers for personal use, ranging from cloud
          storage and Git, to monitoring services and a Jellyfin instance. I
          also studied Systems Administration extensively throughout my degree
          and have experience in many technologies and processes, such as:
        </ContentParagraph>
        <OperationsSkillsList />

        <SubHeading> Other Engineering Skills </SubHeading>
        <ContentParagraph>
          I developed a wide array of skills over the course of my career
          relating to the software development lifecycle. While these skills are
          often not something that is of primary concern, I believe them to be
          very valuable skills which I exercise whenever I can
        </ContentParagraph>
        <OtherSkillsList />
      </CardContent>
    </PageCard>
  );
};
