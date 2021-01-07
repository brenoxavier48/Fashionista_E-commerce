import React from 'react'
import { IconButton } from '../ui/buttons'

type Props = {
  handleClickSearch: () => void,
  handleClickShoppingCart: () => void
}

const Header = ({ handleClickSearch, handleClickShoppingCart }: Props) => {
  return (
    <div className="header-container">
      <div className="header-container__buttons">
        <IconButton
          icon="search"
          onClick={handleClickSearch}
        ></IconButton>
        <IconButton
          icon="shoppingCart"
          onClick={handleClickShoppingCart}
        ></IconButton>
      </div>
    </div>
  )
}

export default Header
