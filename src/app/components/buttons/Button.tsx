import { ButtonProps } from "@/models/button.interface";
import styled from "styled-components";

const ActionButton = styled.button`
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  background: ${({ theme }) => `${theme.colors.primary}`};
  box-shadow: 0 2px 6px 0 rgba(0,118,255,0.39);
  color: ${({ theme }) => `${theme.colors.white}`};
  border: none;
  padding: 14px;
  cursor: pointer;
  border-radius: 4px;

  a {
    color: white;
    text-decoration: none;
  }
`;
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ActionButton type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </ActionButton>
  );
};

export default Button;
