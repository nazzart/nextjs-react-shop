export interface ButtonProps {
  type?: "submit" | "button";
  size?: "standart" | "large";
  color: "primary" | "secondary";
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
