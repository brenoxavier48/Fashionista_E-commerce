import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../store'

export const renderWithProvider = (Component: React.FC<any>, props: any) => (
  <Provider store={store}>
    <Component {...props}></Component>
  </Provider>
)