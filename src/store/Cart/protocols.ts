export type CartState = {
  itemsQuantity: number,
  totalPrice: number,
  items: ProductCart[]
}

export type ProductCart = {
  name: string,
  quantity: number,
  actual_price: string,
  installments: string,
  image: string
  size: string,
  sku: string
}

export const ADD_PRODUCTS_CART = 'ADD_PRODUCTS_CART'

export const UPDATE_QUANTITY_PRODUCT_CART = 'UPDATE_QUANTITY_PRODUCT_CART'

export const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART'

export type AddProductsCartPayload = {
  products: ProductCart[]
}

export type AddProductsCartAction = {
  type: typeof ADD_PRODUCTS_CART,
  payload: AddProductsCartPayload
}

export type UpdateQuantityProductCartPayload = {
  sku: string,
  quantity: 1 | -1
}

export type UpdateQuantityProductCartAction = {
  type: typeof UPDATE_QUANTITY_PRODUCT_CART,
  payload: UpdateQuantityProductCartPayload
}

export type RemoveProductCartPayload = {
  sku: string
}

export type RemoveProductCartAction = {
  type: typeof REMOVE_PRODUCT_CART,
  payload: RemoveProductCartPayload
}

export type CartAction = ( 
  AddProductsCartAction |
  UpdateQuantityProductCartAction |
  RemoveProductCartAction 
)
 