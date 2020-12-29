import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../store/Products/products.selectors'
import Header from '../../components/Header'
import Drawer, { DrawerRules, DrawerType } from '../../components/Drawer'



const Home = () => {

  const [ drawer, setDrawer ] = useState<DrawerRules>({
    isOpen: false,
    type: ''
  })

  const makeDrawerObject = (isOpen: boolean, type: DrawerType): DrawerRules => Object.assign({ isOpen, type })

  const handleClickSearch = () => setDrawer( current => makeDrawerObject(!current.isOpen, 'search') )

  const handleClickShoppingCart = () => setDrawer( current => makeDrawerObject(!current.isOpen, 'shoppingCart') )

  return (
    <div className="home-container">
      <Header
        handleClickSearch={handleClickSearch}
        handleClickShoppingCart={handleClickShoppingCart}
      ></Header>

      <Drawer rules={drawer}></Drawer>
    </div>
  )
}

export default Home
