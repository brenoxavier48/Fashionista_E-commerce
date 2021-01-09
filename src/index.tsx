import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import reportWebVitals from './reportWebVitals';
import Routes from './main/Routes';
import AppContainer from './presentation/pages/AppContainer'
import "./assets/scss/Main.scss"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer>
        <Routes />
      </AppContainer>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
