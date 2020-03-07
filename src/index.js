import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";
import "flatpickr/dist/flatpickr.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchUserData } from "./store/actions/user-actions";
import App from './app';

store.dispatch(fetchUserData())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));