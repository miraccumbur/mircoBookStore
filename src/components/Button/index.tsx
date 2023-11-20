import React, { PropsWithChildren } from "react";

import c from "./button.module.css";

const Button: React.FC<
  PropsWithChildren<{
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }>
> = ({ text, onClick }) => {
  return (
    <button type="button" className={c.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
