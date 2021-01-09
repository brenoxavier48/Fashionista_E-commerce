import React, { ButtonHTMLAttributes } from "react";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: "search" | "shoppingCart",
  itemsQuantity?: number
};

export const IconButton = ({ icon, itemsQuantity, ...otherProps }: Props) => {

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'search':
        return <FaSearch/>

      case 'shoppingCart':
        return <FaShoppingCart/>
    }
  }

  return (
    <div className="icon-button">
      {
        ( itemsQuantity && itemsQuantity > 0 )
        ? (
          <sup className="icon-button__shoppingCart__count">
            <span className="icon-button__shoppingCart__count__value">
              {itemsQuantity}
            </span>
          </sup>
        )
        : null
      }
      <button 
        className="icon-button__button" 
        {...otherProps}
      >
        {getIcon(icon)}
      </button>
    </div>
  );
};
