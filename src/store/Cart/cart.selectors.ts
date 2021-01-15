import { RootState } from '../index'

export const selectQuantityProductsCart = (store: RootState) => store.Cart.itemsQuantity

export const selectTotalPriceProductsCart = (store: RootState) => store.Cart.totalPrice

export const selectAllProductsCart = (store: RootState) => store.Cart.items