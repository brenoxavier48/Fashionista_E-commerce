import { Product } from '../../domain/ProductModel'

export type ProductsState = {
  currentProduct: Product | {}
  catalog: Product[]
}