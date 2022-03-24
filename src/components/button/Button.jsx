import styled from "styled-components";

export const Button = ({ children, color = "white", primary }) => {
  const StyledButton = styled.button`
    background-color: ${(props) => (props.primary ? "pink" : "transparent")};
    border: 1px white solid;
    padding: 12px 20px;
    border-radius: 8px;
    color: ${(p) => p.color};

    &:hover {
      background-color: white;
      color: #333;
      cursor: pointer;
    }

    &:active {
    }
  `;

  return (
    <StyledButton color={color} primary={primary}>
      {children}
    </StyledButton>
  );
};
