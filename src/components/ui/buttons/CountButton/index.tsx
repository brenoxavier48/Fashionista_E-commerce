import React, { ButtonHTMLAttributes } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  decrease?: boolean;
  disabled?: boolean;
};

export const CountButton = ({ decrease, disabled, ...otherProps }: Props) => {
  return (
    <button 
      className={`count__button ${disabled ? 'count__button--disabled' : ''}`} 
      disabled={disabled}
      {...otherProps}
    >
      {decrease ? <FaMinus /> : <FaPlus />}
    </button>
  );
};
