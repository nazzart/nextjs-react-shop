export interface ButtonProps {
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
  onClick?: () => void;
}
