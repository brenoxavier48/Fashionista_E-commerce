import { Product } from '../../domain/ProductModel'
import { Actions } from '../protocols'
import { ADD_CATALOG_PAYLOAD, ADD_CURRENT_PRODUCT_PAYLOAD, ADD_FILTER_PRODUCT } from './protocols'

export const addCatalog = (catalog: Product[]): Actions<ADD_CATALOG_PAYLOAD> => ({
  type: 'ADD_CATALOG',
  payload: catalog
})

export const addCurrentProduct = (product: Product): Actions<ADD_CURRENT_PRODUCT_PAYLOAD> => ({
  type: 'ADD_CURRENT_PRODUCT',
  payload: product
})

export const addFilterProduct = (filter: string): Actions<ADD_FILTER_PRODUCT> => ({
  type: 'ADD_FILTER_PRODUCT',
  payload: filter
})