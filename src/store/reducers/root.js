import { combineReducers } from "redux";
import demoReducer from "./demo";
import userReducer from "./user";
import carsReducer from "./cars";
import serviceHistoryReducer from "./service-history";
import servicesReducer from "./services";
import locationsReducer from "./locations";
import alertsReducer from "./alerts";
import fetchReducer from "./fetch";

export default combineReducers({
  demoMode: demoReducer,
  user: userReducer,
  cars: carsReducer,
  serviceHistory: serviceHistoryReducer,
  services: servicesReducer,
  locations: locationsReducer,
  alerts: alertsReducer,
  fetchComplete: fetchReducer,
});
