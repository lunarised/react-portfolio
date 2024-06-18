import styled from "styled-components";
import { SubjectTitle } from "./ContentStylings";

export const CollapsableRow = (props: {
	open: string;
	setOpen: (open: string) => void;
	name: string;
	color: string;
	children: React.ReactNode;
}) => {
	return (
		<div style={{ paddingBottom: "4px" }}>
			<ListItem
				open={props.open}
				setOpen={props.setOpen}
				title={props.name}
				color={props.color}
			>
				<CollapsableContent>{props.children}</CollapsableContent>
			</ListItem>
		</div>
	);
};

const CollapsableContent = styled.div`
	padding: 3px;
	margin-left: 10px;
`;

const DropdownHeader = styled.div`
	display: flex;
	column-gap: 5px;
	padding-left: 5px;
	color: #000000cc;
	user-select: none;
	cursor: pointer;
`;

export const ListItem = (props: {
	open: string;
	setOpen: (open: string) => void;
	title: string;
	color: string;
	children: React.ReactNode;
}) => {
	return (
		<>
			<DropdownHeader
				onClick={() => {
					props.open === props.title
						? props.setOpen("none")
						: props.setOpen(props.title);
				}}
			>
				{props.open === props.title ? (
					<span>&#11206;</span>
				) : (
					<span>&#11208;</span>
				)}
				<span style={{ color: props.color }}>&#9632;</span>
				<SubjectTitle style={{ color: "#000000bb" }}>
					{props.title}
				</SubjectTitle>
			</DropdownHeader>
			{props.open === props.title ? (
				<CollapsableContent>{props.children}</CollapsableContent>
			) : (
				<></>
			)}
		</>
	);
};
