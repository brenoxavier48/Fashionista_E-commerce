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

const ADD_CATALOG = (state: ProductsState, action: Actions<ProductPayload>): ProductsState => Object.assign({
  ...state,
  catalog: action.payload
})

const ADD_CURRENT_PRODUCT = (state: ProductsState, action: Actions<ProductPayload>): ProductsState => Object.assign({
  ...state,
  currentProduct: action.payload
})

const ADD_FILTER_PRODUCT  = (state: ProductsState, action: Actions<ProductPayload>): ProductsState => Object.assign({
  ...state,
  filter: action.payload
})

const ProductsReducer = (state = initialState, action: Actions<ProductPayload>): ProductsState => {
  switch (action.type) {
    case 'ADD_CATALOG':
      return ADD_CATALOG(state, action)

    case 'ADD_CURRENT_PRODUCT':
      return ADD_CURRENT_PRODUCT(state, action)
    
    case 'ADD_FILTER_PRODUCT':
      return ADD_FILTER_PRODUCT(state, action)
      
    default:
      return state
  }
}

export default ProductsReducer