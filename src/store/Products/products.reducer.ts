import { Product } from '../../Domain/ProductModel'
import { ProductsState } from './protocols'
import { Actions } from '../protocols'

const initialState: ProductsState = {
  current: {},
  list: []
}

const ProductsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    default:
      return state
  }
}

export default ProductsReducer