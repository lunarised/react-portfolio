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
    <div
      onClick={() => {
        props.open === props.name
          ? props.setOpen("none")
          : props.setOpen(props.name);
      }}
      style={{ paddingBottom: "4px" }}
    >
      <ListItem
        openAccordion={props.open}
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
`;

export const ListItem = (props: {
  openAccordion: string;
  title: string;
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <DropdownHeader>
        {props.openAccordion === props.title ? (
          <span>&#11206;</span>
        ) : (
          <span>&#11208;</span>
        )}
        <span style={{ color: props.color }}>&#9632;</span>
        <SubjectTitle style={{ color: "#000000bb" }}>
          {props.title}
        </SubjectTitle>
      </DropdownHeader>
      {props.openAccordion === props.title ? (
        <CollapsableContent>{props.children}</CollapsableContent>
      ) : (
        <></>
      )}
    </>
  );
};
