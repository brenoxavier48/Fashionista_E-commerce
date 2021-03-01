import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Product } from '../../../domain/ProductModel'
import { addCurrentProduct } from '../../../infra/store/Products/products.actions'
import DrawerProductCard from '../DrawerProductCard'

type Props = {
  product: Product,
  timeToAppear?: number,
  closeDrawer?: () => void
}

const SearchProductCard = ({ 
  product, 
  timeToAppear, 
  closeDrawer = () => {} }: Props) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addCurrentProduct(product))
    closeDrawer()
    history.push('/SingleProductView')
  }

  return (
    <DrawerProductCard
      type="Product"
      image={product.image}
      name={product.name}
      actual_price={product.actual_price}
      installments={product.installments}
      handleClick={handleClick}
      timeToAppear={timeToAppear}
    />
    
  )
}

export default SearchProductCard