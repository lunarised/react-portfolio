import styled from "styled-components";
import {
  CardContent,
  ContentParagraph,
  SectionTitle,
  SubHeading,
} from "../../components/ContentStylings";
import { PageCard } from "../../components/pageCard";
import { DelayedRenderingRow } from "./DelayedRendering";
import React from "react";
import { SchedulerRow } from "./Scheduler";

const JobInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1.2em;
`;

const JobText = styled.h4`
  font-size: 1em;
`;

const StyledDropdownList = styled.div`
  padding-bottom: 1em;
`;

export type ExperienceProps = {
  open: string;
  setOpen: (open: string) => void;
};

const ADIProjectsList = () => {
  const [open, setOpen] = React.useState("none");
  const reactState = { open: open, setOpen: setOpen };
  return (
    <StyledDropdownList>
      <DelayedRenderingRow {...reactState} />
      <SchedulerRow {...reactState} />
    </StyledDropdownList>
  );
};

export const ExperienceSection = () => {
  return (
    <PageCard id="Experience">
      <SectionTitle>Experience</SectionTitle>
      <CardContent>
        <SubHeading>ADInstruments</SubHeading>
        <JobInformation>
          <JobText>
            <i> Software Engineer </i>
          </JobText>
          <JobText>April 2021 - Current</JobText>
        </JobInformation>

        <ContentParagraph>
          I am currently a Software Engineer at ADInstruments. I work on a
          project called LabChart Lightning, which is an Electron app, written
          with a TS/React/MobX frontend, and a C++/COM backend. The product
          provides the ability to sample data from hardware, and perform
          analysis on that data.
        </ContentParagraph>
        <ContentParagraph>
          In this role I am responsible for the entire development life cycle,
          from meeting with product owners to learn more about customer needs,
          to assisting customers with tech support in our product. I also help
          manage the build-systems and write automated tests to ensure that the
          code we ship is high quality.
        </ContentParagraph>

        <ADIProjectsList />

        <div style={{ paddingBottom: "1.3em" }}></div>

        <SubHeading>DTSL</SubHeading>
        <JobText>Contracted to Otago Regional Council</JobText>
        <JobInformation>
          <JobText>
            <i> User Support Engineer </i>
          </JobText>
          <JobText>February 1 2021 - February 12 2021</JobText>
        </JobInformation>

        <ContentParagraph>
          After one of the on site NTT engineers took time off, I was asked to
          be subcontracted from DTSL to assist NTT for their on-site service
          desk in the mornings during his absence. In this role, I was able to
          help with level 2 tickets, both diagnosing problems and finding
          solution to them. This role gave me more experience in being self
          managed as well as letting me broaden what sort of tickets I was able
          to do.
        </ContentParagraph>
        <div style={{ paddingBottom: "1.3em" }}></div>

        <SubHeading>Otago Regional Council</SubHeading>
        <JobInformation>
          <JobText>
            <i> Service Desk Agent </i>
          </JobText>
          <JobText>August 2020 - March 2021</JobText>
        </JobInformation>
        <ContentParagraph>
          My core responsibilities as my role as Service Desk Lead, were to
          provide level 1 support for tickets, as well as to document, set up
          and deploy equipment across the council. Laptop setups required
          setting up VPN's, connecting users to a VOIP system, imaging the
          systems via SCCM, as well as working with the users to get role
          specific apps working as intended.
        </ContentParagraph>

        <div style={{ paddingBottom: "1.3em" }}></div>

        <SubHeading>Southern District Health Board</SubHeading>
        <JobInformation>
          <JobText>
            <i> Service Desk Analyst </i>
          </JobText>
          <JobText>March 2020 - April 2020</JobText>
        </JobInformation>
        <ContentParagraph>
          I worked as a temporary Service Desk Analyst for the SDHB over the
          Covid-19 Lockdown to help their employees with their working from home
          setups.
        </ContentParagraph>
      </CardContent>
    </PageCard>
  );
};
