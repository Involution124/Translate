import React from 'react';
import { Provider } from "react-redux"
import App from './App';
import store from "./store/index";
import { render } from "react-dom";

render(
  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

