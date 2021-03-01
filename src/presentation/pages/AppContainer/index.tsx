import React, { useState, useEffect, ReactChild } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectQuantityProductsCart } from '../../../infra/store/Cart/cart.selectors'
import { addCatalog } from '../../../infra/store/Products/products.actions'
import { IProductService } from '../../../domain/ProductService'
import Header from '../../components/Header'
import Drawer, { DrawerRules, DrawerType } from '../../components/Drawer'
import Cart from '../../components/Cart'
import SearchProducts from '../../components/SearchProducts'

type Props = {
  children: ReactChild,
  productService: IProductService
}

const AppContainer = ({ children, productService }: Props) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [ drawer, setDrawer ] = useState<DrawerRules>({
    isOpen: false,
    type: '',
    label: '',
    component: <></>
  })

  useEffect( () => {
    productService.getCatolog()
      .then((products) => {
        dispatch(addCatalog(products))
      })
  }, [dispatch, productService])

  const MakeSacolaLabel = () => {
    const itemsQuantity: number = useSelector(selectQuantityProductsCart)
    return `Sacola (${itemsQuantity})`
  }

  const getComponentInfo = (type: DrawerType) => {
    switch (type) {
      case 'search':
        return {
          label: "Buscar Pedido",
          component: <SearchProducts closeDrawer={handleCloseClick}/>
        }

      case 'shoppingCart':
        return {
          label: MakeSacolaLabel,
          component: <Cart/>
        }
      
      default:
        return {
          label: '',
          component: <></>
        }
    }
  }

  const makeDrawerObject = (isOpen: boolean, type: DrawerType): DrawerRules => {
    const componentInfo = getComponentInfo(type)
    return Object.assign({ isOpen, type }, componentInfo)
  }

  const handleClickHome = () => history.push('/')

  const handleClickSearch = () => setDrawer( current => makeDrawerObject(!current.isOpen, 'search') )

  const handleClickShoppingCart = () => setDrawer( current => makeDrawerObject(!current.isOpen, 'shoppingCart') )

  const handleCloseClick = () => setDrawer( current => makeDrawerObject(false, '') )

  return (
    <div className="app-container">
      <Header
        handleClickHome={handleClickHome}
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
