import {ButtonProps} from "@/models/button.interface";
import styled from "styled-components";


const ActionButton = styled.button`
    font-weight: bold;
    margin-top: 10px;
    text-align:center;
    background: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.white}`};
    border: none;
    padding: 14px;
    cursor: pointer;

    `
const Button: React.FC<ButtonProps> = (props) => {
  
  return (
    <ActionButton
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </ActionButton>
  );
};

export default Button;
