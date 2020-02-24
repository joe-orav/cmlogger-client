import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

let initialState = {
    user: {
        id: null,
        name: "",
        googleConnected: false,
        facebookConnected: false,
        google_pic: null,
        facebook_pic: null,
        default_pic: null
    },
    cars: {
        items: [],
        loading: false,
        error: null
    },
    serviceHistory: {
        items: [],
        loading: false,
        error: null
    },
    services: {
        items: [],
        loading: false,
        error: null
    },
    locations: {
        items: [],
        loading: false,
        error: null
    },
    alerts: []
}

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk))) 