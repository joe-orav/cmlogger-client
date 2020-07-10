import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../store/reducers/root";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
