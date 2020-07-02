export let state = {
  demoMode: false,
  user: {
    loading: false,
    error: null,
    profile: {
      id: 0,
      name: "Test User",
      googleConnected: true,
      facebookConnected: true,
      google_pic: "http://path/to/google_picture",
      facebook_pic: "http://path/to/fb_picture",
      default_pic: "http://path/to/google_picture",
    },
  },
  cars: {
    items: [
      {
        id: 100,
        user_id: 0,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        VIN: "J4IG72MJ02B693B7A",
      },
    ],
    loading: false,
    error: null,
  },
  serviceHistory: {
    items: [
      {
        id: 100,
        service_date: "2020-10-17T04:00:00.000Z",
        cost: "100.00",
        notes: null,
        car_id: 100,
        location_id: 100,
        provided_services_ids: [100, 200],
      },
    ],
    loading: false,
    error: null,
  },
  services: {
    items: [
      { id: 100, user_id: 0, sname: "Oil Change" },
      { id: 200, user_id: 0, sname: "Tire replacement" },
    ],
    loading: false,
    error: null,
  },
  locations: {
    items: [
      {
        id: 100,
        user_id: 0,
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
  alerts: [
    { id: 1, type: "success", message: "Good message" },
    { id: 1, type: "danger", message: "Bad message" },
  ],
  fetchComplete: true,
};

export let getDemoModeStateOutput = false;

export let getUserOutput = {
  id: 0,
  name: "Test User",
  googleConnected: true,
  facebookConnected: true,
  google_pic: "http://path/to/google_picture",
  facebook_pic: "http://path/to/fb_picture",
  default_pic: "http://path/to/google_picture",
};

export let getUserIdOutput = 0;

export let getServiceHistoryOutput = [
  {
    id: 100,
    service_date: "2020-10-17T04:00:00.000Z",
    cost: "100.00",
    notes: null,
    car_id: 100,
    location_id: 100,
    provided_services_ids: [100, 200],
  },
];

export let getServicesOutput = [
  { id: 100, user_id: 0, sname: "Oil Change" },
  { id: 200, user_id: 0, sname: "Tire replacement" },
];

export let getLocationsOutput = [
  {
    id: 100,
    user_id: 0,
    name: "Test Place",
    address: "123 Abc St",
    city: "TestCity",
    state: "TS",
    zip_code: "123456",
  },
];

export let getAlertsOutput = [
  { id: 1, type: "success", message: "Good message" },
  { id: 1, type: "danger", message: "Bad message" },
];

export let getCarsErrorOutput = null;

export let getServiceHistoryErrorOutput = null;

export let getServicesErrorOutput = null;

export let getLocationsErrorOutput = null;

export let getCarsDataLoadingOutput = false;

export let getServiceHistoryDataLoadingOutput = false;

export let getDataLoadedOutput = true;

export let getCarCountOutput = 1;

export let getCarsOutput = [
  {
    id: 100,
    user_id: 0,
    type: "sedan",
    car_year: 2020,
    make: "Ford",
    model: "Fusion",
    VIN: "J4IG72MJ02B693B7A",
    fullname: "2020 Ford Fusion",
  },
];

export let getAccountsOutput = [
  { providerName: "Google", connected: true },
  { providerName: "Facebook", connected: true },
];

export let getMergedServiceRecordsOutput = [
  {
    id: 100,
    service_date: "2020-10-17T04:00:00.000Z",
    cost: "100.00",
    notes: null,
    car: {
      id: 100,
      user_id: 0,
      type: "sedan",
      car_year: 2020,
      make: "Ford",
      model: "Fusion",
      VIN: "J4IG72MJ02B693B7A",
      fullname: "2020 Ford Fusion",
    },
    services: [
      { id: 100, user_id: 0, sname: "Oil Change" },
      { id: 200, user_id: 0, sname: "Tire replacement" },
    ],
    location: {
      id: 100,
      user_id: 0,
      name: "Test Place",
      address: "123 Abc St",
      city: "TestCity",
      state: "TS",
      zip_code: "123456",
    },
    parsedDate: new Date("2020", "09", "17"),
    dateString: "10/17/2020",
  },
];

export let getOrphanedServicesOutput = [];

export let getOrphanedLocationsOutput = [];

export let getSavedServicesOutput = {
  100: { name: "Oil Change", date: "10/17/2020", count: 1 },
  200: { name: "Tire replacement", date: "10/17/2020", count: 1 },
};

export let getSavedLocationsOutput = {
  100: { name: "Test Place", date: "10/17/2020", count: 1 },
};

export let getTotalCostOutput = "100.00";
