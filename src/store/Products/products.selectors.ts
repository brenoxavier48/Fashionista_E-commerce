import { State } from '../index'
import { processStringToFilter } from './utils'

export const selectAllProducts = (store: State) => store.Products.catalog

export const selectCurrentProduct = (store: State) => store.Products.currentProduct

export const selectFilteredProducts = (store: State) => store.Products.catalog.filter(element => {
  const filter = processStringToFilter(store.Products.filter)
  const name = processStringToFilter(element.name)
  return filter !== '' && name.includes(filter)
})