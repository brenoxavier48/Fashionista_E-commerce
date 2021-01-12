import ProductCard from '../../presentation/components/ProductCard'
import { Actions } from '../protocols'
import { CartState, ProductCart, CartPayload } from './protocols'
import { getTotalPrice } from './utils'

const initialState: CartState = {
  itemsQuantity: 0,
  totalPrice: 0,
  items: []
}

const ADD_PRODUCTS_CART = (state: CartState, action: Actions<ProductCart[]>): CartState => {
  const products: ProductCart[] = action.payload
  const itemsQuantity = state.itemsQuantity + products.length
  const totalPrice = state.totalPrice + getTotalPrice(products)
  const items = [...state.items, ...products]
  return Object.assign({
    itemsQuantity,
    totalPrice,
    items
  })
}

export default (state = initialState, action: Actions<CartPayload>): CartState => {
  switch (action.type) {
    case 'ADD_PRODUCTS_CART':
      return ADD_PRODUCTS_CART(state, action)

    case 'UPDATE_QUANTITY_PRODUCT_CART':
      // const products: ProductCart = action.payload

    default:
      return { ...state }
  }
}