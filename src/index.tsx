import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './serviceWorker';
import "./presentation/assets/scss/Main.scss"
import App from './main/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
registerServiceWorker();
