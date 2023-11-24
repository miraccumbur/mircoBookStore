import React, { PropsWithChildren } from "react";
import classcat from "classcat";

import c from "./input.module.css";

type ISetValue = React.Dispatch<React.SetStateAction<string>>;

const Input: React.FC<
  PropsWithChildren<{
    label?: string;
    placeholder?: string;
    type: string;
    value: string;
    setValue: ISetValue;
    inputClassName?: string;
    labelClassName?: string;
    containerClassName?: string;
    error: boolean;
    onKeyUp?: (key: number) => void;
  }>
> = ({
  label,
  placeholder,
  type,
  value,
  setValue,
  inputClassName,
  labelClassName,
  containerClassName,
  error,
  onKeyUp,
}) => {
  return (
    <div className={classcat([c.container, containerClassName])}>
      <label
        className={classcat([c.label, labelClassName, error && c.errorLabel])}
      >
        {label}

        {type === "textarea" && (
          <textarea
            className={classcat([
              c.input,
              c.textarea,
              inputClassName,
              error && c.errorInput,
            ])}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}

        {(type === "text" || type === "number" || type === "email") && (
          <input
            className={classcat([
              c.input,
              c.text,
              inputClassName,
              error && c.errorInput,
            ])}
            type={type}
            value={value}
            placeholder={placeholder}
            onKeyUp={(e) => {
              if (onKeyUp) onKeyUp(e.keyCode);
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}
      </label>
    </div>
  );
};

export default Input;
