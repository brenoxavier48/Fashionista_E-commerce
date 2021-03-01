import { 
  ProductsState, 
  ProductsAction,
  ADD_CATALOG,
  AddCatalogAction, 
  ADD_CURRENT_PRODUCT,
  AddCurrentProductAction, 
  ADD_FILTER_PRODUCT,
  AddFilterAction,
  CLEAN_STATE_PRODUCTS
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

const addCatalog = (state: ProductsState, action: AddCatalogAction): ProductsState => Object.assign({
  ...state,
  catalog: action.payload.catalog
})

const addCurrentProduct = (state: ProductsState, action: AddCurrentProductAction): ProductsState => Object.assign({
  ...state,
  currentProduct: action.payload.product
})

const addFilterProduct  = (state: ProductsState, action: AddFilterAction): ProductsState => Object.assign({
  ...state,
  filter: action.payload.filter
})

const ProductsReducer = (state = initialState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case ADD_CATALOG:
      return addCatalog(state, action)

    case ADD_CURRENT_PRODUCT:
      return addCurrentProduct(state, action)
    
    case ADD_FILTER_PRODUCT:
      return addFilterProduct(state, action)

    case CLEAN_STATE_PRODUCTS:
      return initialState
      
    default:
      return state
  }
}

export default ProductsReducer