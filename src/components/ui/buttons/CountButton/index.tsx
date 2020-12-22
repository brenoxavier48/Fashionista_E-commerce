import React, { ButtonHTMLAttributes } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  decrease?: boolean;
};

export const CountButton = ({ decrease, ...otherProps }: Props) => {
  return (
    <button className="count__button" {...otherProps}>
      {decrease ? <FaMinus /> : <FaPlus />}
    </button>
  );
};
