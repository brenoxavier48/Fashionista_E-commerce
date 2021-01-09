import { Actions } from '../protocols'
import { ProductCart } from './protocols'

export const addProductCart = (products: ProductCart[]): Actions => {
  return {
    type: 'ADD_PRODUCT_CART',
    payload: products
  }
}