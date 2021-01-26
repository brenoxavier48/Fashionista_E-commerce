import { Product } from '../../domain/ProductModel'
import { AddCatalogAction, AddCurrentProductAction, AddFilterAction } from './protocols'

export const addCatalog = (catalog: Product[]): AddCatalogAction => ({
  type: 'ADD_CATALOG',
  payload: {
    catalog
  }
})

export const addCurrentProduct = (product: Product): AddCurrentProductAction => ({
  type: 'ADD_CURRENT_PRODUCT',
  payload: {
    product
  }
})

export const addFilterProduct = (filter: string): AddFilterAction => ({
  type: 'ADD_FILTER_PRODUCT',
  payload: {
    filter
  }
})