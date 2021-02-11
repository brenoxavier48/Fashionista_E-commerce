import { RootState } from '../index'

export const selectQuantityProductsCart = (store: RootState) => store.Cart.itemsQuantity

export const selectTotalPriceProductsCart = (store: RootState) => store.Cart.totalPrice

export const selectAllProductsCart = (store: RootState) => store.Cart.items

export const selectSingleProductCart = (sku: string) =>  (store: RootState) => store.Cart.items.find(product => product.sku === sku)