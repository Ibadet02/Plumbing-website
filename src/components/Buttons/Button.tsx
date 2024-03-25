import React from "react";
import StyledButton from "../../styles/components/Buttons/Button.styled";
import { ButtonProps } from "./props";

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
