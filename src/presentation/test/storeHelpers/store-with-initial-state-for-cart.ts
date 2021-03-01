import { store } from '../../../infra/store'
import { ProductCart } from '../../../infra/store/Cart/protocols'
import { addProductsCart } from '../../../infra/store/Cart/cart.actions'

export const storeWithCartInitialState = (products: ProductCart[]) => {
  store.dispatch(addProductsCart(products))
  return store
}