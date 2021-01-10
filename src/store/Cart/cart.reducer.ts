import { Actions } from '../protocols'
import { CartState, ProductCart } from './protocols'
import { getTotalPrice } from './utils'

const initialState: CartState = {
  itemsQuantity: 0,
  totalPrice: 0,
  items: []
}

export default (state = initialState, action: Actions): CartState => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART':
      const products: ProductCart[] = action.payload
      const itemsQuantity = state.itemsQuantity + products.length
      const totalPrice = state.totalPrice + getTotalPrice(products)
      const items = [...state.items, ...products]
      return Object.assign({
        itemsQuantity,
        totalPrice,
        items
      })

    default:
      return { ...state }
  }
}