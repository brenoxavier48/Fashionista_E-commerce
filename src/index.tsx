import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, persistedStore } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Routes from './main/Routes';
import AppContainer from './presentation/pages/AppContainer'
import "./presentation/assets/scss/Main.scss"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <BrowserRouter>
          <AppContainer>
            <Routes />
          </AppContainer>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
