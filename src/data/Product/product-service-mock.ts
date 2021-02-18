import { Product } from '../../domain/ProductModel'
import { IProductService } from '../../domain/ProductService'
import catalogMocked from '../../db_mock.json'

export class MockedProductService implements IProductService {  
  public async getCatolog(): Promise<Product[]> {
    const catalog: Product[] = catalogMocked.products
    return Promise.resolve(catalog)
  }
}
