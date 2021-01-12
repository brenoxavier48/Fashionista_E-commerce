import { HttpClient, HttpRequest, HttpResponse } from './protocols'

export class HttpClientInstance implements HttpClient {

  public async request(options: HttpRequest): Promise<HttpResponse> {
    const { url, method, body, headers } = options
    let response: Response
    let data: any

    try {
      response = await fetch(url, {
        method,
        body,
        headers
      })
      data = await response.json()
    } catch (error) {
      console.error(error)
      response = error
      data = error
    }

    return {
      statusCode: response.status,
      body: data
    }

  }
}