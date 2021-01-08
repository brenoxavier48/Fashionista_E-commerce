import { Actions } from '../protocols'
import { CartState } from './protocols'

const initialState: CartState = {
  itemsQuantity: 0,
  totalPrice: 0,
  items: []
}

export default (state, action: Actions) => {
  switch (action.type) {
    default:
      return { ...state }
  }
}