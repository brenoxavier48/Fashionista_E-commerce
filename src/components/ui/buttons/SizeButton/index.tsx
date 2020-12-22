import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: string;
  available: boolean;
  selected?: boolean;
};

export const SizeButton = ({ size, available, selected, ...otherProps }: Props) => {
  return (
    <button 
      className={`
        product-size 
        ${available ? '' : 'product-size--disabled'}
        ${available && selected ? 'product-size--selected' : ''}
      `} 
      disabled={available}
      {...otherProps}
    >
      {size}
    </button>
  );
};
