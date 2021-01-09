import React from 'react'
import { IconButton } from '../ui/buttons'
import { useSelector } from 'react-redux'
import { selectQuantityProductsCart } from '../../store/Cart/cart.selectors'

type Props = {
  handleClickSearch: () => void,
  handleClickShoppingCart: () => void
}

const Header = ({ handleClickSearch, handleClickShoppingCart }: Props) => {
  const itemsQuantity = useSelector(selectQuantityProductsCart)

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
          itemsQuantity={itemsQuantity}
        ></IconButton>
      </div>
    </div>
  )
}

export default Header
