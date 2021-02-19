import { store } from '../../../store'
import { ProductsState } from '../../../store/Products/protocols'
import { addCatalog, addCurrentProduct, addFilterProduct } from '../../../store/Products/products.actions'

export const storeWithProductsInitialState = (productsState: ProductsState) => {
  store.dispatch(addCatalog(productsState.catalog))
  store.dispatch(addCurrentProduct(productsState.currentProduct))
  store.dispatch(addFilterProduct(productsState.filter))
  return store
}