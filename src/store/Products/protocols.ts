import { Product } from '../../domain/ProductModel'

export type ProductsState = {
  currentProduct: Product,
  filter: string,
  catalog: Product[]
}
export const ADD_CATALOG = 'ADD_CATALOG'

export const ADD_CURRENT_PRODUCT = 'ADD_CURRENT_PRODUCT'

export const ADD_FILTER_PRODUCT = 'ADD_FILTER_PRODUCT'

export const CLEAN_STATE_PRODUCTS = 'CLEAN_STATE_PRODUCTS'

export type AddCatalogPayload = {
  catalog: Product[]
}

export type AddCatalogAction = {
  type: typeof ADD_CATALOG,
  payload: AddCatalogPayload
}

export type AddCurrentProductPayload = { 
  product: Product
}

export type AddCurrentProductAction = {
  type: typeof ADD_CURRENT_PRODUCT,
  payload: AddCurrentProductPayload
}

export type AddFilterPayload = { 
  filter: string 
}

export type AddFilterAction = {
  type: typeof ADD_FILTER_PRODUCT,
  payload: AddFilterPayload
}

export type CleanStateProductsAction = {
  type: typeof CLEAN_STATE_PRODUCTS
}

export type ProductsAction = (
  AddCatalogAction | 
  AddCurrentProductAction |
  AddFilterAction |
  CleanStateProductsAction
)