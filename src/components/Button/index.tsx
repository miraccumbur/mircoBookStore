import React, { PropsWithChildren } from "react";
import classcat from "classcat";

import c from "./button.module.css";

const Button: React.FC<
  PropsWithChildren<{
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
  }>
> = ({ text, onClick, className }) => {
  return (
    <button type="button" className={classcat([c.button, className])} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
