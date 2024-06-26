import styled from "styled-components";
import { SubjectTitle } from "./ContentStylings";

export const CollapsibleRow = (props: {
  open: string;
  setOpen: (open: string) => void;
  name: string;
  color?: string;
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
        <CollapsibleContent>{props.children}</CollapsibleContent>
      </ListItem>
    </div>
  );
};

const CollapsibleContent = styled.div`
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

const RightArrow = styled.div<{ rotateAngle: number }>`
  width: 16px;
  height: 16px;
  aspect-ratio: 1;
  margin-top: ${(props) => (props.rotateAngle % 180 == 0 ? 2 : 0)}px;
  clip-path: polygon(30% 0, 100% 50%, 30% 100%);
  background-color: #000000cc;
  align-items: center;
  transform: rotate(${(props) => props.rotateAngle}deg);
  transition: all 0.2s;
`;

export const ListItem = (props: {
  open: string;
  setOpen: (open: string) => void;
  title: string;
  color?: string;
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
          <RightArrow rotateAngle={90} />
        ) : (
          <RightArrow rotateAngle={0} />
        )}
        {props.color ? (
          <span style={{ color: props.color, fontFamily: "UIFontRegular" }}>
            &#9632;
          </span>
        ) : (
          <></>
        )}
        <SubjectTitle style={{ color: "#000000bb" }}>
          {props.title}
        </SubjectTitle>
      </DropdownHeader>
      {props.open === props.title ? (
        <CollapsibleContent>{props.children}</CollapsibleContent>
      ) : (
        <></>
      )}
    </>
  );
};
