import { ProductsState, ProductPayload } from './protocols'
import { Actions } from '../protocols'

const initialState: ProductsState = {
  currentProduct: {
    name: '',
    style: '',
    code_color: '',
    color_slug: '',
    color: '',
    on_sale: false,
    regular_price: '',
    actual_price: '',
    discount_percentage: '', 
    installments: '',
    image: '',
    sizes: []
  },
  filter: '',
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
    
    case 'ADD_FILTER_PRODUCT':
      return {
        ...state,
        filter: action.payload
      }
      
    default:
      return state
  }
}

export default ProductsReducer