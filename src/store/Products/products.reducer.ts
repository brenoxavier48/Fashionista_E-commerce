import { Product } from '../../domain/ProductModel'
import { ProductsState } from './protocols'
import { Actions } from '../protocols'

const initialState: ProductsState = {
  current: {},
  catalog: []
}

const ProductsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'ADD_CATALOG':
      return {
        ...state,
        catalog: action.payload
      }
      
    default:
      return state
  }
}

export default ProductsReducer