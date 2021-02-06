import { store } from '../../../store'
import { ProductCart } from '../../../store/Cart/protocols'
import { addProductsCart } from '../../../store/Cart/cart.actions'

export const storeWithCartInitialState = (products: ProductCart[]) => {
  store.dispatch(addProductsCart(products))
  return store
}