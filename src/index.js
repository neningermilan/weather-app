import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { weatherReducer } from "./reducers/weather-reducer";
import thunk from "redux-thunk";

const allStoreEnchancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  weatherReducer,
  { isLoading: true, search: "default" },
  allStoreEnchancers
);

/***
 * Provider: so the app components can acces the store.
 */
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
