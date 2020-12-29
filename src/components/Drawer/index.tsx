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
    <div className="drawer-container">
      <button onClick={handleCloseClick}>{rules.type} OUT</button>
      
    </div>
  )
}

export default Drawer