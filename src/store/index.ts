import { combineReducers, createStore, compose } from 'redux'
import ProductsReducer from './Products/products.reducer'

const reducers = combineReducers({
  Products: ProductsReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers())
