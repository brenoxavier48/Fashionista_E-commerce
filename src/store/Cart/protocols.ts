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