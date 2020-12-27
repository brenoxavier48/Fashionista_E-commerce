import { Product } from '../../domain/ProductModel'

export const addCatalog = (catalog: Product[]) => ({
  type: 'ADD_CATALOG',
  payload: catalog
})