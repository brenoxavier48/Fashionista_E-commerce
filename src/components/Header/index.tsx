import React from 'react'
import { HeaderButton } from '../ui/buttons'

type Props = {
  handleClickSearch: () => void,
  handleClickShoppingCart: () => void
}

const Header = ({ handleClickSearch, handleClickShoppingCart }: Props) => {
  return (
    <div className="header-container">
      <div className="header-container__buttons">
        <HeaderButton
          icon="search"
          onClick={handleClickSearch}
        ></HeaderButton>
        <HeaderButton
          icon="shoppingCart"
          onClick={handleClickShoppingCart}
        ></HeaderButton>
      </div>
    </div>
  )
}

export default Header
