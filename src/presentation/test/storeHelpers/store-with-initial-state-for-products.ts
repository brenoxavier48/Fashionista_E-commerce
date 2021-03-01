import { store } from '../../../infra/store'
import { ProductsState } from '../../../infra/store/Products/protocols'
import { addCatalog, addCurrentProduct, addFilterProduct } from '../../../infra/store/Products/products.actions'

export const storeWithProductsInitialState = (productsState: ProductsState) => {
  store.dispatch(addCatalog(productsState.catalog))
  store.dispatch(addCurrentProduct(productsState.currentProduct))
  store.dispatch(addFilterProduct(productsState.filter))
  return store
}