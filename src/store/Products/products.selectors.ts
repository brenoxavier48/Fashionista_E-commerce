import { State } from '../index'

export const selectAllProducts = (store: State) => store.Products.catalog

export const selectCurrentProduct = (store: State) => store.Products.currentProduct

export const selectFilteredProducts = (store: State) => store.Products.catalog.filter(element => {
  element.name.includes(`\\${store.Products.filter}\\`)
})