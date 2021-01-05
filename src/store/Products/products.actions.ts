import { Product } from '../../domain/ProductModel'

export const addCatalog = (catalog: Product[]) => ({
  type: 'ADD_CATALOG',
  payload: catalog
})

export const addCurrentProduct = (product: Product) => ({
  type: 'ADD_CURRENT_PRODUCT',
  payload: product
})