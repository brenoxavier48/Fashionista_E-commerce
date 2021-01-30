import React from 'react'
import { IconButton } from '../ui/buttons'
import { useSelector } from 'react-redux'
import { selectQuantityProductsCart } from '../../../store/Cart/cart.selectors'

type Props = {
  handleClickSearch: () => void,
  handleClickShoppingCart: () => void
}

const Header = ({ handleClickSearch, handleClickShoppingCart }: Props) => {
  const itemsQuantity: number = useSelector(selectQuantityProductsCart)

  return (
    <header className="header-container">
      <div className="header-container__buttons">
        <IconButton
          icon="search"
          onClick={handleClickSearch}
          aria-label="Abrir seção de pesquisa por produtos"
        ></IconButton>
        <IconButton
          icon="shoppingCart"
          onClick={handleClickShoppingCart}
          itemsQuantity={itemsQuantity}
          aria-label="Abrir sacola"
        ></IconButton>
      </div>
    </header>
  )
}

export default Header
