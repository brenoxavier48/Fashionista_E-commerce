import React, { ReactChild } from 'react'
import { ProductService, MockedProductService } from '../../data/Product'
import { HttpClientInstance } from '../../infra/HttpClient'
import AppContainer from '../../presentation/pages/AppContainer'

export const makeAppContainer = ( children: ReactChild, isMocked: boolean ) => {
  const productService = isMocked 
  ? new MockedProductService() 
  : new ProductService(
      new HttpClientInstance(), 
      'https://5f074b869c5c250016306cbf.mockapi.io/api/v1'
    )
  
  return (
    <AppContainer
      productService={productService}
    >
      { children }
    </AppContainer>
  )
}