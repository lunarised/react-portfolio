import { render } from "@testing-library/react";
import styled from "styled-components";

export type ModalButtonProps = {
  backgroundColor: string;
  foregroundColor: string;
};

export const StyledButton = styled.button<ModalButtonProps>`
  color: ${(props) => props.foregroundColor};
  background-color: ${(props) => props.backgroundColor};
`;
