import { Product } from '../../domain/ProductModel'
import { ProductsState, ProductPayload } from './protocols'
import { Actions } from '../protocols'

const initialState: ProductsState = {
  currentProduct: {},
  catalog: []
}

const ProductsReducer = (state = initialState, action: Actions<ProductPayload>) => {
  switch (action.type) {
    case 'ADD_CATALOG':
      return {
        ...state,
        catalog: action.payload
      }

    case 'ADD_CURRENT_PRODUCT':
      return {
        ...state,
        currentProduct: action.payload
      }
      
    default:
      return state
  }
}

export default ProductsReducer