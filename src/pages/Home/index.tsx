import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCatalog } from '../../store/Products/products.actions'

import { ProductService } from '../../services/Product'
import Header from '../../components/Header'
import Drawer, { DrawerRules, DrawerType } from '../../components/Drawer'
import ProductsCatalog from '../../components/ProductsCatalog'



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
  }, [])

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
      <ProductsCatalog></ProductsCatalog>
    </div>
  )
}

export default Home
