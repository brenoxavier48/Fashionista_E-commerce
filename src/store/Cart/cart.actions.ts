import { Actions } from '../protocols'
import { ProductCart, ADD_PRODUCTS_CART_PAYLOAD, UPDATE_QUANTITY_PRODUCT_CART_PAYLOAD } from './protocols'

export const addProductsCart = (products: ProductCart[]): Actions<ADD_PRODUCTS_CART_PAYLOAD> => {
  return {
    type: 'ADD_PRODUCTS_CART',
    payload: products
  }
}

export const updateQuantityProductCart = (product: ProductCart): Actions<UPDATE_QUANTITY_PRODUCT_CART_PAYLOAD> => {
  return {
    type: 'UPDATE_QUANTITY_PRODUCT_CART',
    payload: product
  }
}