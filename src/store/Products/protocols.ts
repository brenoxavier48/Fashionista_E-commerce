import { Product } from '../../domain/ProductModel'

export interface ProductsState {
  currentProduct: Product | {}
  catalog: Product[]
}