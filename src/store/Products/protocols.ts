import { Product } from '../../domain/ProductModel'

export type ProductsState = {
  currentProduct: Product | {}
  catalog: Product[]
}

export type ADD_CATALOG_PAYLOAD = Product[]

export type ADD_CURRENT_PRODUCT_PAYLOAD = Product

export type ProductPayload = (
  ADD_CATALOG_PAYLOAD & 
  ADD_CURRENT_PRODUCT_PAYLOAD
)