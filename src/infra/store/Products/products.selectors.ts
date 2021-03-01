import { RootState } from '../index'
import { removeAccents } from '../../utils'

export const selectAllProducts = (store: RootState) => store.Products.catalog

export const selectCurrentProduct = (store: RootState) => store.Products.currentProduct

export const selectFilteredProducts = (store: RootState) => store.Products.catalog.filter(element => {
  const filter = removeAccents(store.Products.filter).toLowerCase().trim()
  const name = removeAccents(element.name).toLowerCase().trim()
  return filter !== '' && name.includes(filter)
})