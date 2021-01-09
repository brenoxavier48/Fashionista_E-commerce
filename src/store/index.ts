import { combineReducers, createStore, compose } from 'redux'
import ProductsReducer from './Products/products.reducer'
import CartReducer from './Cart/cart.reducer'

const reducers = combineReducers({
  Products: ProductsReducer,
  Cart: CartReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers())
