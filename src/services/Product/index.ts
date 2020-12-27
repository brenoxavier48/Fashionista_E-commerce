import { HttpClientInstance } from '../../infra/HttpClient'
import { HttpClient } from '../../infra/HttpClient/protocols'
import { Product } from '../../domain/ProductModel'

export class ProductService {
  private baseURL: string
  private HttpClientInstance: HttpClient

  constructor() {
    this.HttpClientInstance = new HttpClientInstance()
    this.baseURL = 'https://5f074b869c5c250016306cbf.mockapi.io/api/v1'
  }

  public async getCatolog(): Promise<Product[]> {
    const options = Object.create({
      url: `${this.baseURL}/catalog`,
      method: 'get'
    })

    const { statusCode, body }= await this.HttpClientInstance.request(options)

    return statusCode === 200 ? body : []
  }
}