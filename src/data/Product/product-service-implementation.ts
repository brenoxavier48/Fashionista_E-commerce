import { HttpClient } from '../../infra/HttpClient/protocols'
import { Product } from '../../domain/ProductModel'
import { IProductService } from '../../domain/ProductService'

export class ProductService implements IProductService {
  private baseURL: string
  private HttpClientInstance: HttpClient

  constructor(httpClientInstance: HttpClient, baseURL: string) {
    this.HttpClientInstance = httpClientInstance
    this.baseURL = baseURL
  }

  public async getCatolog(): Promise<Product[]> {
    const options = Object.create({
      url: `${this.baseURL}/catalog`,
      method: 'get'
    })

    const { statusCode, body } = await this.HttpClientInstance.request(options)

    return (
      statusCode === 200 
      ? body 
      : []
    )
  }
}