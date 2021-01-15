import { RootState } from '../index'
import { processStringToFilter } from './utils'

export const selectAllProducts = (store: RootState) => store.Products.catalog

export const selectCurrentProduct = (store: RootState) => store.Products.currentProduct

export const selectFilteredProducts = (store: RootState) => store.Products.catalog.filter(element => {
  const filter = processStringToFilter(store.Products.filter)
  const name = processStringToFilter(element.name)
  return filter !== '' && name.includes(filter)
})