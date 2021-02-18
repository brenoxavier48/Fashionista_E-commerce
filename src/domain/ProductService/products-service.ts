import { Product } from '../ProductModel'
export interface IProductService {
  getCatolog: () => Promise<Product[]>
}