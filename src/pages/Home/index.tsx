import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../store/Products/products.selectors'
import { ProductService } from '../../services/Product'
import Header from '../../components/Header'
import Drawer, { DrawerRules, DrawerType } from '../../components/Drawer'
import ProductCard from '../../components/ProductCard'



const Home = () => {

  const [ drawer, setDrawer ] = useState<DrawerRules>({
    isOpen: false,
    type: ''
  })

  const makeDrawerObject = (isOpen: boolean, type: DrawerType): DrawerRules => Object.assign({ isOpen, type })

  const handleClickSearch = () => setDrawer( current => makeDrawerObject(!current.isOpen, 'search') )

  const handleClickShoppingCart = () => setDrawer( current => makeDrawerObject(!current.isOpen, 'shoppingCart') )

  const handleCloseClick = () => setDrawer( current => makeDrawerObject(false, '') )

  return (
    <div className="home-container">
      <Header
        handleClickSearch={handleClickSearch}
        handleClickShoppingCart={handleClickShoppingCart}
      ></Header>
      <Drawer 
        rules={drawer}
        handleCloseClick={handleCloseClick}
      ></Drawer>
    </div>
  )
}

export default Home
