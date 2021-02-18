export interface Product {
  name: string
  style: string
  code_color: string
  color_slug: string
  color: string
  on_sale: boolean
  regular_price: string
  actual_price: string
  discount_percentage: string 
  installments: string
  image: string
  sizes: OptionSize[]
}

export interface OptionSize {
  available: boolean
  size: string
  sku: string
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
