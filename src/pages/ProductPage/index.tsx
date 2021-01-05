import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Product } from '../../domain/ProductModel'
import { selectCurrentProduct } from '../../store/Products/products.selectors'

const ProductPage = () => {
  const product: Product = useSelector(selectCurrentProduct)
  
  return (
    <>
    </>
  )
}

export default ProductPage