import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { spamMiddleware } from "./redux/middleware";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, spamMiddleware, saga))
);

saga.run(sagaWatcher);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
