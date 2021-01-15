import { combineReducers, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ProductsReducer from './Products/products.reducer'
import { ProductsState } from './Products/protocols'
import CartReducer from './Cart/cart.reducer'
import { CartState } from './Cart/protocols'

export type RootState = Readonly<{
  Products: ProductsState,
  Cart: CartState
}>

const rootReducer = combineReducers<RootState>({
  Products: ProductsReducer,
  Cart: CartReducer
})

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers())
export const persistedStore = persistStore(store)
