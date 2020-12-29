import React from 'react'

export type DrawerType = "" | "search" | "shoppingCart" 

export type DrawerRules = {
  isOpen: boolean;
  type: DrawerType;
}

type Props = {
  rules: DrawerRules
}

const Drawer = ({ rules }: Props) => {
  return (
    <div className="drawer-container">

    </div>
  )
}

export default Drawer