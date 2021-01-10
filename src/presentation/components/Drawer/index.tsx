import React from 'react'
import { useSelector } from 'react-redux'
import { selectQuantityProductsCart } from '../../../store/Cart/cart.selectors'
import { IconButton } from '../ui/buttons'
import Cart from '../Cart'

export type DrawerType = "" | "search" | "shoppingCart" 

export type DrawerRules = {
  isOpen: boolean;
  type: DrawerType;
}

type Props = {
  rules: DrawerRules;
  handleCloseClick: () => void
}

const Drawer = ({ rules, handleCloseClick }: Props) => {
  const itemsQuantity: number = useSelector(selectQuantityProductsCart)
  
  const getComponent = (type: DrawerType) => {
    switch (type) {
      case 'search':
        return {
          label: "Buscar Pedido",
          component: <></>
        }

      case 'shoppingCart':
        return {
          label: `Sacola (${itemsQuantity})`,
          component: <Cart></Cart>
        }
    }
  }
  
  return (
    <>
      <div className={`drawer-overlay ${rules.isOpen ? 'drawer-overlay--open' : ''}`} onClick={handleCloseClick}></div>
      <aside className={`drawer-container ${rules.isOpen ? 'drawer-container--open' : ''}`}>
        <div className="drawer-container__header">
          <IconButton icon="back" onClick={handleCloseClick}/>
          <p>{getComponent(rules.type)?.label}</p>
        </div>
        {
          getComponent(rules.type)?.component
        }
      </aside>
    </>
  )
}

export default Drawer