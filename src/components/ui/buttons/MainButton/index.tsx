import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const MainButton = ({ label, ...otherProps }: Props) => {
  return (
    <button className="mainButton" {...otherProps}>
      {label}
    </button>
  );
};
