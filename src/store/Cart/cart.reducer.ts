import { 
  CartState, 
  ADD_PRODUCTS_CART,
  AddProductsCartAction, 
  UPDATE_QUANTITY_PRODUCT_CART,
  UpdateQuantityProductCartAction, 
  REMOVE_PRODUCT_CART,
  RemoveProductCartAction,
  CartAction } from './protocols'
import { getTotalPriceAndQuantity } from './helpers'

const initialState: CartState = {
  itemsQuantity: 0,
  totalPrice: 0,
  items: []
}

const addProductsCart = (state: CartState, action: AddProductsCartAction): CartState => {
  const { products } = action.payload
  const items = [...state.items, ...products]
  const { itemsQuantity, totalPrice } = getTotalPriceAndQuantity(items)
  
  return Object.assign({
    itemsQuantity,
    totalPrice,
    items
  })
}

const updateQuantityProductCart = (state: CartState, action: UpdateQuantityProductCartAction): CartState => {
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

const removeProductCart = (state: CartState, action: RemoveProductCartAction): CartState => {
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

const CartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_PRODUCTS_CART:
      return addProductsCart(state, action)

    case UPDATE_QUANTITY_PRODUCT_CART:
      return updateQuantityProductCart(state, action)

    case REMOVE_PRODUCT_CART:
      return removeProductCart(state, action)

    default:
      return state
  }
}

export default CartReducer