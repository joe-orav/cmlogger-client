export let state = {
  demoMode: true,
  user: {
    loading: false,
    error: null,
    profile: {
      id: 5,
      name: "Test User",
      googleConnected: false,
      facebookConnected: false,
      google_pic: null,
      facebook_pic: null,
      default_pic: "",
    },
  },
  cars: {
    items: [
      {
        id: 100,
        user_id: 5,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        VIN: "J4IG72MJ02B693B7A",
      },
      {
        id: 1,
        user_id: 5,
        type: "sedan",
        car_year: 2017,
        make: "Toyota",
        model: "Camry",
        VIN: "D64MFO3BG85NJ02G7",
      },
    ],
    loading: false,
    error: null,
  },
  serviceHistory: {
    items: [],
    loading: false,
    error: null,
  },
  services: {
    items: [
      { id: 100, user_id: 5, sname: "Oil Change" },
      { id: 200, user_id: 5, sname: "Tire replacement" },
    ],
    loading: false,
    error: null,
  },
  locations: {
    items: [
      {
        id: 100,
        user_id: 5,
        name: "Test Place",
        address: "123 Abc St",
        city: "TestCity",
        state: "TS",
        zip_code: "123456",
      },
    ],
    loading: false,
    error: null,
  },
  alerts: [],
  fetchComplete: true,
};

export let getDemoModeStateOutput = true;

export let getUserOutput = {
  id: 5,
  name: "Test User",
  googleConnected: false,
  facebookConnected: false,
  google_pic: null,
  facebook_pic: null,
  default_pic: "",
};

export let getUserIdOutput = 5;

export let getServiceHistoryOutput = [];

export let getServicesOutput = [
  { id: 100, user_id: 5, sname: "Oil Change" },
  { id: 200, user_id: 5, sname: "Tire replacement" },
];

export let getLocationsOutput = [
  {
    id: 100,
    user_id: 5,
    name: "Test Place",
    address: "123 Abc St",
    city: "TestCity",
    state: "TS",
    zip_code: "123456",
  },
];

export let getAlertsOutput = [];

export let getCarsErrorOutput = null;

export let getServiceHistoryErrorOutput = null;

export let getServicesErrorOutput = null;

export let getLocationsErrorOutput = null;

export let getCarsDataLoadingOutput = false;

export let getServiceHistoryDataLoadingOutput = false;

export let getDataLoadedOutput = true;

export let getCarCountOutput = 2;

export let getCarsOutput = [
  {
    id: 100,
    user_id: 5,
    type: "sedan",
    car_year: 2020,
    make: "Ford",
    model: "Fusion",
    VIN: "J4IG72MJ02B693B7A",
    fullname: "2020 Ford Fusion",

  },
  {
    id: 1,
    user_id: 5,
    type: "sedan",
    car_year: 2017,
    make: "Toyota",
    model: "Camry",
    VIN: "D64MFO3BG85NJ02G7",
    fullname: "2017 Toyota Camry",

  },
];

export let getAccountsOutput = [
  { providerName: "Google", connected: false },
  { providerName: "Facebook", connected: false },
];

export let getMergedServiceRecordsOutput = [];

export let getOrphanedServicesOutput = [{ id: 100, user_id: 5, sname: "Oil Change" },
{ id: 200, user_id: 5, sname: "Tire replacement" },];

export let getOrphanedLocationsOutput = [{
  id: 100,
  user_id: 5,
  name: "Test Place",
  address: "123 Abc St",
  city: "TestCity",
  state: "TS",
  zip_code: "123456",
}];

export let getSavedServicesOutput = {};

export let getSavedLocationsOutput = {};

export let getTotalCostOutput = "0.00";
