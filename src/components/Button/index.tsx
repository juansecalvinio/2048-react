import React from "react";
import { ButtonContainer } from "./styled";

type Props = {
  children: any;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
