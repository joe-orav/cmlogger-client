import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import "flatpickr/dist/flatpickr.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchUserData } from "./store/actions/user-actions";
import { fetchCarData } from "./store/actions/car-actions";
import { fetchServicesData } from "./store/actions/service-actions";
import { fetchLocationData } from "./store/actions/locations-actions";
import { fetchServiceHistoryData } from "./store/actions/service-history-actions";
import App from "./app";

Promise.resolve(store.dispatch(fetchUserData()))
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
    return store.getState().user.profile.id;
  })
  .then((userId) => {
    if (userId != null) {
      Promise.all([
        store.dispatch(fetchCarData()),
        store.dispatch(fetchServicesData()),
        store.dispatch(fetchLocationData()),
      ]).then(() => {
        store.dispatch(fetchServiceHistoryData());
      });
    }
  });
