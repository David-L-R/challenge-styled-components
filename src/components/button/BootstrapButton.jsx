import styled from "styled-components";
import { StyledButton } from "./styledButton";
export const BootstrapButton = ({ children, buttonType = "primary" }) => {
  return <StyledButton buttonType={buttonType}>{children}</StyledButton>;
};
