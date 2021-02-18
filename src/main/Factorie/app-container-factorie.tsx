import React, { ReactChild } from 'react'
import { ProductService } from '../../data/Product'
import { HttpClientInstance } from '../../infra/HttpClient'
import { IProductService } from '../../domain/ProductService'
import AppContainer from '../../presentation/pages/AppContainer'

type Props = {
  children: ReactChild
}

const makeAppContainer = ( children: ReactChild ) => {
  const productService = new ProductService(
    new HttpClientInstance(), 
    'https://5f074b869c5c250016306cbf.mockapi.io/api/v1'
  )
  
  return () => (
    <AppContainer
      productService={productService}
    >
      { children }
    </AppContainer>
  )
}