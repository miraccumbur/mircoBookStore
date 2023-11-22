import classcat from "classcat";
import React, { PropsWithChildren, useEffect } from "react";

import c from "./checkbox.module.css";

type ISetValue = React.Dispatch<React.SetStateAction<boolean>>;

const Checkbox: React.FC<
  PropsWithChildren<{
    label?: string;
    type: string;
    value: boolean;
    setValue: ISetValue;
    inputClassName?: string;
    labelClassName?: string;
    containerClassName?: string;
    error:boolean
  }>
> = ({
  label,
  type,
  value,
  setValue,
  inputClassName,
  labelClassName,
  containerClassName,
  error
}) => {

    useEffect(()=>{
        console.log(value)
    },[value])
  return (
    <div className={classcat([c.container, containerClassName])}>
      <label className={classcat([c.label, labelClassName, error && c.errorLabel])}>
        <input
          className={classcat([c.input, inputClassName])}
          type="checkbox"
          onChange={() => {
            setValue(!value);
          }}
        />
        <svg
          className={classcat([c.checkbox, error && c.errorCheckbox])}
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={value ? "#000" : "none"} // only show the checkmark when `isCheck` is `true`
          />
        </svg>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
