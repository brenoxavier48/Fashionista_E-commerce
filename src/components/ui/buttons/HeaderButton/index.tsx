import React, { ButtonHTMLAttributes } from "react";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: "search" | "shoppingCart",
  itemsQuantity?: number
};

export const HeaderButton = ({ icon, itemsQuantity, ...otherProps }: Props) => {

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'search':
        return <FaSearch/>

      case 'shoppingCart':
        return <FaShoppingCart/>
    }
  }

  return (
    <div className="header__icon">
       {
        itemsQuantity 
        && itemsQuantity > 0
        && (
          <sup className="header__shoppingCart__count">
            <span className="header__shoppingCart__count__value">
              {itemsQuantity}
            </span>
          </sup>
        )
      }
      <button 
        className="header__button" 
        {...otherProps}
      >
      
          { getIcon(icon) }
          
      </button>
     
    </div>
  );
};