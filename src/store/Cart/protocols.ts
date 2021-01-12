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

export type ADD_PRODUCTS_CART_PAYLOAD = ProductCart[]

export type UPDATE_QUANTITY_PRODUCT_CART_PAYLOAD = {
  sku: string,
  quantity: 1 | -1
}

export type REMOVE_PRODUCT_CART_PAYLOAD = {
  sku: string
}

export type CartPayload =  (
  ADD_PRODUCTS_CART_PAYLOAD & 
  UPDATE_QUANTITY_PRODUCT_CART_PAYLOAD &
  REMOVE_PRODUCT_CART_PAYLOAD
)
 