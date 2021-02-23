import React, { ButtonHTMLAttributes } from "react";
import { 
  FaSearch, 
  FaShoppingCart, 
  FaArrowLeft,
  FaTimes
} from 'react-icons/fa'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconType,
  itemsQuantity?: number
};

type IconType = "search" | "shoppingCart" | "back" | "close"

export const IconButton = ({ icon, itemsQuantity, ...otherProps }: Props) => {

  const getIcon = (icon: IconType) => {
    switch (icon) {
      case 'search':
        return <FaSearch />

      case 'shoppingCart':
        return <FaShoppingCart />

      case 'back':
        return <FaArrowLeft />
      
      case 'close':
        return <FaTimes />
    }
  }

  return (
    <div className="icon-button">
      {
        ( itemsQuantity && itemsQuantity > 0 )
        ? (
          <sup className="icon-button__shoppingCart__count">
            <span 
              className="icon-button__shoppingCart__count__value"
              aria-label="Quantidade de itens na sacola"
              data-testid="header-cart-items-quantity"
            >
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
