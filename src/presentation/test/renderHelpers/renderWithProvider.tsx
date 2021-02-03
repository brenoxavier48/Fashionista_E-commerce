import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../store'

export default (Component: typeof React.Component) => (
  <Provider store={store}>
    <Component></Component>
  </Provider>
)