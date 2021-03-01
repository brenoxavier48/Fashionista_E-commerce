import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../infra/store'

export const renderWithProvider = (Component: React.FC<any>, props?: any) => (
  <Provider store={store}>
    <Component {...props}></Component>
  </Provider>
)

export const renderWithProviderWithInitialState = (intialStore: typeof store) => (
  (Component: React.FC<any>, props?: any) => (
    <Provider store={intialStore}>
      <Component {...props}></Component>
    </Provider>
  )
)