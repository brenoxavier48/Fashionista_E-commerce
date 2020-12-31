import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCatalog } from '../../store/Products/products.actions'

import { ProductService } from '../../services/Product'
import Header from '../../components/Header'
import Drawer, { DrawerRules, DrawerType } from '../../components/Drawer'
import ProductCard from '../../components/ProductCard'



const Home = () => {

  const dispatch = useDispatch()

  const [ drawer, setDrawer ] = useState<DrawerRules>({
    isOpen: false,
    type: ''
  })

  useEffect( () => {
    const productService = new ProductService()

    productService.getCatolog().then((products) => {
      dispatch(addCatalog(products))
    })
  },[])

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
