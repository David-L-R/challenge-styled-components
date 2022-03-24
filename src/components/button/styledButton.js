import styled from "styled-components";

export const StyledButton = styled.button`
  /* border: 1px white solid; */
  padding: 0 20px;
  border-radius: 8px;
  height: 40px;
  outline: none;
  border: 0;

  ${(p) =>
    p.buttonType === "primary" &&
    `
    color: white;
    background-color: #007bff;
`}

  ${(p) =>
    p.buttonType === "danger" &&
    `
    color: white;
    background-color: red;
`}
`;
