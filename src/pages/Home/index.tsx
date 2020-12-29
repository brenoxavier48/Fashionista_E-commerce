import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../store/Products/products.selectors'
import Header from '../../components/Header'

type DrawerType = "" | "search" | "shoppingCart" 

type Drawer = {
  isOpen: boolean;
  type: DrawerType;
}

const Home = () => {

  const [ drawer, setDrawer ] = useState<Drawer>({
    isOpen: false,
    type: ''
  })

  const makeDrawerObject = (isOpen: boolean, type: DrawerType): Drawer => Object.assign({ isOpen, type })

  const handleClickSearch = () => setDrawer(current => makeDrawerObject(!current.isOpen, 'search') )
  const handleClickShoppingCart = () => setDrawer(current => makeDrawerObject(!current.isOpen, 'shoppingCart') )

  return (
    <div className="home-container">
      <Header
        handleClickSearch={handleClickSearch}
        handleClickShoppingCart={handleClickShoppingCart}
      ></Header>

    </div>
  )
}

export default Home
