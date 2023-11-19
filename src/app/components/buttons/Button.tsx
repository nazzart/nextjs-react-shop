import { ButtonProps } from "@/models/button.interface";
import { Container } from "./Button.styles";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container type={props.type || "button"} onClick={props.onClick} size={props.size} color={props.color}>
      {props.children}
    </Container>
  );
};

export default Button;
