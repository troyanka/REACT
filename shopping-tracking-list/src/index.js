import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import App from './App';
import { getCurrencyData } from '../src/actions/shoppingListActions';
import shoppingListMiddleware from './middlewares/shoppingListMiddleware';

const middleware = [shoppingListMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getCurrencyData());
setInterval(() => store.dispatch(getCurrencyData()), 10000);

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
