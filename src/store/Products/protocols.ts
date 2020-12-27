import { Product } from '../../domain/ProductModel'

export interface ProductsState {
  current: Product | {}
  catalog: Product[]
}