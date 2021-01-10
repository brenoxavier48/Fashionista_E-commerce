import React from 'react'
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

  const getComponent = (type: DrawerType) => {
    switch (type) {
      case 'search':
        return <></>

      case 'shoppingCart':
        return <Cart></Cart>
    }
  }
  
  return (
    <>
      <div className={`drawer-overlay ${rules.isOpen ? 'drawer-overlay--open' : ''}`} onClick={handleCloseClick}></div>
      <aside className={`drawer-container ${rules.isOpen ? 'drawer-container--open' : ''}`}>
        <button onClick={handleCloseClick}>{rules.type} OUT</button>
        {
          getComponent(rules.type)
        }
      </aside>
    </>
  )
}

export default Drawer