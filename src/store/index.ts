import { combineReducers, createStore } from 'redux'
import ProductsReducer from './Products/products.reducer'

const reducers = combineReducers({
  Products: ProductsReducer
})

export const store = createStore(reducers)
