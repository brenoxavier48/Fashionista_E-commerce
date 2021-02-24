import React from 'react'
import { IconButton } from '../ui/buttons'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { useSelector } from 'react-redux'
import { selectQuantityProductsCart } from '../../../store/Cart/cart.selectors'

type Props = {
  handleClickSearch: () => void,
  handleClickShoppingCart: () => void,
  handleClickHome: () => void
}

const Header = ({ handleClickSearch, handleClickShoppingCart, handleClickHome }: Props) => {
  const itemsQuantity: number = useSelector(selectQuantityProductsCart)

  return (
    <header className="header-container">
      <div className="header-container__logo">
        <Logo 
          onClick={handleClickHome}
        />
      </div>
      <div className="header-container__buttons">
        <IconButton
          icon="search"
          onClick={handleClickSearch}
          aria-label="Abrir seção de pesquisa por produtos"
          data-testid="header-search-button"
        ></IconButton>
        <IconButton
          icon="shoppingCart"
          onClick={handleClickShoppingCart}
          itemsQuantity={itemsQuantity}
          aria-label="Abrir sacola"
          data-testid="header-cart-button"
        ></IconButton>
      </div>
    </header>
  )
}

export default Header
