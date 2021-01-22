import { Actions } from '../protocols'
import { CartState, ADD_PRODUCTS_CART_PAYLOAD, CartPayload } from './protocols'
import { getTotalPriceAndQuantity } from './helpers'

const initialState: CartState = {
  itemsQuantity: 0,
  totalPrice: 0,
  items: []
}

const ADD_PRODUCTS_CART = (state: CartState, action: Actions<CartPayload>): CartState => {
  const products: ADD_PRODUCTS_CART_PAYLOAD = action.payload
  const items = [...state.items, ...products]
  const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity(items)
  
  return Object.assign({
    itemsQuantity,
    totalPrice,
    items
  })
}

const UPDATE_QUANTITY_PRODUCT_CART = (state: CartState, action: Actions<CartPayload>): CartState => {
  const currentState = { ...state }
  const { sku, quantity } = action.payload
  const position: number = currentState.items.findIndex( (product) => product.sku === sku )
  currentState.items[position].quantity += quantity
  const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity(currentState.items)

  return Object.assign({
    ...currentState,
    itemsQuantity,
    totalPrice
  })

}

const REMOVE_PRODUCT_CART  = (state: CartState, action: Actions<CartPayload>): CartState => {
  const currentState = { ...state }
  const { sku } = action.payload
  const items = currentState.items.filter( (product) => product.sku !== sku )
  const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity(items)

  return Object.assign({
    itemsQuantity,
    totalPrice,
    items
  })
}

const CartReducer = (state = initialState, action: Actions<CartPayload>): CartState => {
  switch (action.type) {
    case 'ADD_PRODUCTS_CART':
      return ADD_PRODUCTS_CART(state, action)

    case 'UPDATE_QUANTITY_PRODUCT_CART':
      return UPDATE_QUANTITY_PRODUCT_CART(state, action)

    case 'REMOVE_PRODUCT_CART':
      return REMOVE_PRODUCT_CART(state, action)

    default:
      return state
  }
}

export default CartReducer