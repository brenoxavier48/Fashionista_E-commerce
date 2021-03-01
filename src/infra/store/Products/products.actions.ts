import { Product } from '../../../domain/ProductModel'
import {
  ADD_CATALOG,
  ADD_CURRENT_PRODUCT,
  ADD_FILTER_PRODUCT,
  CLEAN_STATE_PRODUCTS, 
  AddCatalogAction, 
  AddCurrentProductAction, 
  AddFilterAction,
  CleanStateProductsAction 
} from './protocols'

export const addCatalog = (catalog: Product[]): AddCatalogAction => ({
  type: ADD_CATALOG,
  payload: {
    catalog
  }
})

export const addCurrentProduct = (product: Product): AddCurrentProductAction => ({
  type: ADD_CURRENT_PRODUCT,
  payload: {
    product
  }
})

export const addFilterProduct = (filter: string): AddFilterAction => ({
  type: ADD_FILTER_PRODUCT,
  payload: {
    filter
  }
})

export const cleanStateProducts = (): CleanStateProductsAction => ({
  type: CLEAN_STATE_PRODUCTS
})
