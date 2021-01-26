import { 
  ProductsState, 
  ProductsAction,
  AddCatalogAction, 
  AddCurrentProductAction, 
  AddFilterAction  
} from './protocols'

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

const ADD_CATALOG = (state: ProductsState, action: AddCatalogAction): ProductsState => Object.assign({
  ...state,
  catalog: action.payload.catalog
})

const ADD_CURRENT_PRODUCT = (state: ProductsState, action: AddCurrentProductAction): ProductsState => Object.assign({
  ...state,
  currentProduct: action.payload.product
})

const ADD_FILTER_PRODUCT  = (state: ProductsState, action: AddFilterAction): ProductsState => Object.assign({
  ...state,
  filter: action.payload.filter
})

const ProductsReducer = (state = initialState, action: ProductsAction): ProductsState => {
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