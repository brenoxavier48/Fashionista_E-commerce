import { State } from '../index'

export const selectQuantityProductsCart = (store: State) => store.Cart.itemsQuantity

export const selectTotalPriceProductsCart = (store: State) => store.Cart.totalPrice

export const selectAllProductsCart = (store: State) => store.Cart.items