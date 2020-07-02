export let state = {
  demoMode: false,
  user: {
    loading: false,
    error: "Unable to get user",
    profile: {
      id: null,
      name: "",
      googleConnected: false,
      facebookConnected: false,
      google_pic: null,
      facebook_pic: null,
      default_pic: null,
    },
  },
  cars: {
    items: [],
    loading: false,
    error: "Unable to get cars",
  },
  serviceHistory: {
    items: [],
    loading: false,
    error: "Unable to get service records",
  },
  services: {
    items: [],
    loading: false,
    error: "Unable to get services",
  },
  locations: {
    items: [],
    loading: false,
    error: "Unable to get locations",
  },
  alerts: [],
  fetchComplete: true,
};

export let getDemoModeStateOutput = false;

export let getUserOutput = {
  id: null,
  name: "",
  googleConnected: false,
  facebookConnected: false,
  google_pic: null,
  facebook_pic: null,
  default_pic: null,
};

export let getUserIdOutput = null;

export let getServiceHistoryOutput = [];

export let getServicesOutput = [];

export let getLocationsOutput = [];

export let getAlertsOutput = [];

export let getCarsErrorOutput = "Unable to get cars";

export let getServiceHistoryErrorOutput = "Unable to get service records";

export let getServicesErrorOutput = "Unable to get services";

export let getLocationsErrorOutput = "Unable to get locations";

export let getCarsDataLoadingOutput = false;

export let getServiceHistoryDataLoadingOutput = false;

export let getDataLoadedOutput = true;

export let getCarCountOutput = 0;

export let getCarsOutput = [];

export let getAccountsOutput = [
  { providerName: "Google", connected: false },
  { providerName: "Facebook", connected: false },
];

export let getMergedServiceRecordsOutput = [];

export let getOrphanedServicesOutput = [];

export let getOrphanedLocationsOutput = [];

export let getSavedServicesOutput = {};

export let getSavedLocationsOutput = {};

export let getTotalCostOutput = "0.00";
