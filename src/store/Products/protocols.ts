import { Product } from '../../Domain/ProductModel'

export interface ProductsState {
  current: Product | {}
  list: Product[]
}