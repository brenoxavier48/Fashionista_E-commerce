import { combineReducers, createStore, compose, $CombinedState } from 'redux'
import ProductsReducer from './Products/products.reducer'
import { ProductsState } from './Products/protocols'
import CartReducer from './Cart/cart.reducer'
import { CartState } from './Cart/protocols'

export type State = Readonly<{
  Products: ProductsState,
  Cart: CartState
}>

const reducers = combineReducers<State>({
  Products: ProductsReducer,
  Cart: CartReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers())

export type STORE_TYPE = typeof reducers