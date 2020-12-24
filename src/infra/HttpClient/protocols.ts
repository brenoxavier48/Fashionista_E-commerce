export type HttpRequest = {
  url: string,
  method: 'get' | 'post' | 'put' | 'delete',
  body?: any,
  headers?: any,
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode,
  body?: T
}

export interface HttpClient<R = any> {
  request: (options: HttpRequest) => Promise<HttpResponse<R>>
}