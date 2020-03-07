import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";
import "flatpickr/dist/flatpickr.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchUserData } from "./store/actions/user-actions";
import App from './app';

Promise.resolve(store.dispatch(fetchUserData()))
.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'));
})
