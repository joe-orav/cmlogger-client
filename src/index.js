import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";
import "flatpickr/dist/flatpickr.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import FetchActions from "./store/fetch-actions"
import App from './app';

let fetchUser = new Promise((resolve, reject) => {
    resolve(store.dispatch(FetchActions.fetchUserData()))
})

fetchUser
.then(() => store.getState().user.profile.id)
.then((result) => {
    function fetchIndepedentData() {
        if(result !== null) {
            store.dispatch(FetchActions.fetchCarData())
            store.dispatch(FetchActions.fetchLocationData())
            store.dispatch(FetchActions.fetchServicesData())
        }

        return result;
    }

    return fetchIndepedentData();
})
.then((result) => {
    if(result !== null) {
        store.dispatch(FetchActions.fetchServiceHistoryData())
    }
})
.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
    document.getElementById('root'));
})

