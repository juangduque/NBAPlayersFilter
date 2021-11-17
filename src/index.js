import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// REDUX
import store from './redux/store/index.js';
import { Provider } from 'react-redux';


import './style/css/page/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


