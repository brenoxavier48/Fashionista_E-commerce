import React from 'react';
import { Provider } from 'react-redux'
import { store, persistedStore } from '../../infra/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes';
import { makeAppContainer } from '../Factorie'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <BrowserRouter>
      { makeAppContainer(<Routes />, true) }
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

export default App