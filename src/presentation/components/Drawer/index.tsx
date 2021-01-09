import React from 'react'

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
  return (
    <>
      <div className={`drawer-overlay ${rules.isOpen ? 'drawer-overlay--open' : ''}`} onClick={handleCloseClick}></div>
      <aside className={`drawer-container ${rules.isOpen ? 'drawer-container--open' : ''}`}>
        <button onClick={handleCloseClick}>{rules.type} OUT</button>
        
      </aside>
    </>
  )
}

export default Drawer