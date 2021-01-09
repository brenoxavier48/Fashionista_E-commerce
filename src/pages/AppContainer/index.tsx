import React, { useState, useEffect, ReactChild } from 'react'
import { useDispatch } from 'react-redux'
import { addCatalog } from '../../store/Products/products.actions'
import { HttpClientInstance } from '../../infra/HttpClient'
import { ProductService } from '../../services/Product'
import Header from '../../components/Header'
import Drawer, { DrawerRules, DrawerType } from '../../components/Drawer'

type Props = {
  children: ReactChild
}

const AppContainer = ({ children }: Props) => {

  const dispatch = useDispatch()

  const [ drawer, setDrawer ] = useState<DrawerRules>({
    isOpen: false,
    type: ''
  })

  useEffect( () => {
    const productService = new ProductService(
      new HttpClientInstance(), 
      'https://5f074b869c5c250016306cbf.mockapi.io/api/v1'
    )

    productService.getCatolog().then((products) => {
      dispatch(addCatalog(products))
    })
  }, [])

  const makeDrawerObject = (isOpen: boolean, type: DrawerType): DrawerRules => Object.assign({ isOpen, type })

  const handleClickSearch = () => setDrawer( current => makeDrawerObject(!current.isOpen, 'search') )

  const handleClickShoppingCart = () => setDrawer( current => makeDrawerObject(!current.isOpen, 'shoppingCart') )

  const handleCloseClick = () => setDrawer( current => makeDrawerObject(false, '') )

  return (
    <div className="app-container">
      <Header
        handleClickSearch={handleClickSearch}
        handleClickShoppingCart={handleClickShoppingCart}
      ></Header>
      <Drawer 
        rules={drawer}
        handleCloseClick={handleCloseClick}
      ></Drawer>
      { children }
    </div>
  )
}

export default AppContainer
