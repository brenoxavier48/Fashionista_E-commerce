import React from 'react'
import { IconButton } from '../ui/buttons'

export type DrawerType = "" | "search" | "shoppingCart" 

export type DrawerRules = {
  isOpen: boolean;
  type: DrawerType;
  label: string | (() => string);
  component: JSX.Element
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
        <div className="drawer-container__header">
          <IconButton icon="back" onClick={handleCloseClick}/>
          <p>{typeof rules.label === 'function' ? rules.label() : rules.label}</p>
        </div>
        { rules.component }
      </aside>
    </>
  )
}

export default Drawer