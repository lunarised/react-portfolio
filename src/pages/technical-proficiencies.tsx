import styled from "styled-components";
import {
	CardContent,
	ContentParagraph,
	SectionTitle,
	SubHeading,
} from "../components/ContentStylings";
import { PageCard } from "../components/pageCard";
import { JavaRow } from "./skills/java";
import React from "react";
import { BashRow } from "./skills/bash";
import { CRow } from "./skills/c";
import { CSharpRow } from "./skills/cSharp";
import { CppRow } from "./skills/cpp";
import { PythonRow } from "./skills/python";
import { RubyRow } from "./skills/ruby";
import { RustRow } from "./skills/rust";
import { ConfigRow } from "./skills/configuration";
import { ContainerisationRow } from "./skills/containerisation";
import { GitRow } from "./skills/git";
import { LinuxRow } from "./skills/linux";
import { MonitoringRow } from "./skills/monitoring";
import { VirtualisationRow } from "./skills/virtualisation";

const StyledDropdownList = styled.div`
	padding-bottom: 1em;
`;

const ProgrammingLanguageList = () => {
	const [open, setOpen] = React.useState("none");
	const reactState = { open: open, setOpen: setOpen };
	return (
		<StyledDropdownList>
			<JavaRow {...reactState} />
			<CppRow {...reactState} />
			<PythonRow {...reactState} />
			<CRow {...reactState} />
			<CSharpRow {...reactState} />
			<RubyRow {...reactState} />
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
			<GitRow {...reactState} />
			<ConfigRow {...reactState} />
			<MonitoringRow {...reactState} />
			<ContainerisationRow {...reactState} />
			<VirtualisationRow {...reactState} />
			<LinuxRow {...reactState} />
		</StyledDropdownList>
	);
};

export const TechnicalProficiencies = () => {
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
				<OtherSkillsList />
			</CardContent>
		</PageCard>
	);
};
