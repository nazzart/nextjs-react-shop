import { ButtonProps } from "@/models/button.interface";
import styled, { css } from "styled-components";

// Available set of colors, the color comes from theme.js file
const COLOR = {
    primary: css`
      background: ${({ theme }) => `${theme.colors.primary}`};
    `,
    secondary: css`
      background: ${({ theme }) => `${theme.colors.secondary}`}
    `,
  };
  
export const Container = styled.button<ButtonProps>`
  ${(props) => props.color && COLOR[props.color]};

  font-weight: bold;
  text-align: center;
  color: white;
  min-width: ${props => props.size === "large" ? '300px' : 'auto'};
  border: none;
  padding: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(120%);
  }
`;