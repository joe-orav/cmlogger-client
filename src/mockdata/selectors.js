export const User1SelectorData = {
  getDemoModeState: false,
  getUser: {
    id: 1,
    name: "John Smith",
    googleConnected: true,
    facebookConnected: false,
    google_pic: "https://linktopic.com/jsmith",
    facebook_pic: null,
    default_pic: "https://linktopic.com/jsmith",
  },
  getUserId: 1,
  getServiceHistory: [
    {
      id: 101,
      service_date: "2020-10-17T04:00:00.000Z",
      cost: "150.00",
      notes: null,
      car_id: 100,
      location_id: 102,
      provided_services_ids: [150, 151],
    },
  ],
  getServices: [
    { id: 150, user_id: 1, sname: "Oil Change" },
    { id: 151, user_id: 1, sname: "Tire replacement" },
  ],
  getLocations: [
    {
      id: 102,
      user_id: 1,
      name: "Test Place",
      address: "123 Abc St",
      city: "TestCity",
      state: "AZ",
      zip_code: "123456",
    },
  ],
  getAlerts: [{ message: "This is a test success message", type: "success" }],
  getCarsError: null,
  getServiceHistoryError: null,
  getServicesError: null,
  getLocationsError: null,
  getCarsDataLoading: false,
  getServiceHistoryDataLoading: false,
  getDataLoaded: true,
  getCarCount: 1,
  getCars: [
    {
      id: 100,
      user_id: 1,
      type: "sedan",
      car_year: 2020,
      make: "Ford",
      model: "Fusion",
      vin: "2FMDK4KC1DBA45121",
      fullname: "2020 Ford Fusion",
    },
  ],
  getAccounts: [
    { providerName: "Google", connected: true },
    { providerName: "Facebook", connected: false },
  ],
  getMergedServiceRecords: [
    {
      id: 101,
      cost: "150.00",
      notes: null,
      date: "10/17/2020",
      car: {
        id: 100,
        user_id: 1,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        vin: "2FMDK4KC1DBA45121",
        fullname: "2020 Ford Fusion",
      },
      services: [
        { id: 150, user_id: 1, sname: "Oil Change" },
        { id: 151, user_id: 1, sname: "Tire replacement" },
      ],
      location: {
        id: 102,
        user_id: 1,
        name: "Test Place",
        address: "123 Abc St",
        city: "TestCity",
        state: "AZ",
        zip_code: "123456",
      },
    },
  ],
  getOrphanedServices: [],
  getOrphanedLocations: [],
  getSavedServices: [
    { name: "Oil Change", date: "10/17/2020", count: 1 },
    { name: "Tire replacement", date: "10/17/2020", count: 1 },
  ],
  getSavedLocations: [{ name: "Test Place", date: "10/17/2020", count: 1 }],
  getTotalCost: "150.00",
}

export const User4SelectorData = {
  getDemoModeState: false,
  getUser: {
    id: 3,
    name: "Bryan Willams",
    googleConnected: true,
    facebookConnected: true,
    google_pic: "https://linktogooglepic.com/bwilliams",
    facebook_pic: "https://linktofbpic.com/bwilliams",
    default_pic: "https://linktofbpic.com/bwilliams",
  },
  getUserId: 3,
  getServiceHistory: [
    {
      id: 301,
      service_date: "2009-07-17T04:00:00.000Z",
      cost: "63.00",
      notes: null,
      car_id: 300,
      location_id: 302,
      provided_services_ids: [350, 351, 352],
    },
    {
      id: 311,
      service_date: "2018-08-22T04:00:00.000Z",
      cost: "172.00",
      notes: null,
      car_id: 310,
      location_id: null,
      provided_services_ids: [350],
    },
  ],
  getServices: [
    { id: 350, user_id: 3, sname: "Oil Change" },
    { id: 351, user_id: 3, sname: "Tire replacement" },
    { id: 352, user_id: 3, sname: "Air filter replacement" },
  ],
  getLocations: [
    {
      id: 302,
      user_id: 3,
      name: "Test Place",
      address: "123 Abc St",
      city: "TestCity",
      state: "TS",
      zip_code: "123456",
    },
    {
      id: 312,
      user_id: 3,
      name: "Test Mechanics",
      address: "456 Def Ave",
      city: "Townsville",
      state: "AZ",
      zip_code: "78901",
    },
  ],
  getAlerts: [
    { message: "Unable to retrieve data", type: "danger" },
    { message: "This is a test success message", type: "success" },
  ],
  getCarsError: null,
  getServiceHistoryError: null,
  getServicesError: null,
  getLocationsError: null,
  getCarsDataLoading: false,
  getServiceHistoryDataLoading: false,
  getDataLoaded: true,
  getCarCount: 2,
  getCars: [
    {
      id: 300,
      user_id: 3,
      type: "suv",
      car_year: 2008,
      make: "Toyota",
      model: "Sequoia",
      vin: "5N1AR2MM2EC787277",
      fullname: "2008 Toyota Sequoia",
    },
    {
      id: 310,
      user_id: 3,
      type: "suv",
      car_year: 2014,
      make: "Honda",
      model: "Pilot",
      vin: "1GNEC13R6WJ390853",
      fullname: "2014 Honda Pilot",
    },
  ],
  getAccounts: [
    { providerName: "Google", connected: true },
    { providerName: "Facebook", connected: true },
  ],
  getMergedServiceRecords: [
    {
      id: 311,
      date: "08/22/2018",
      cost: "172.00",
      notes: null,
      car: {
        id: 310,
        user_id: 3,
        type: "suv",
        car_year: 2014,
        make: "Honda",
        model: "Pilot",
        vin: "1GNEC13R6WJ390853",
        fullname: "2014 Honda Pilot",
      },
      location: null,
      services: [{ id: 350, user_id: 3, sname: "Oil Change" }],
    },
    {
      id: 301,
      date: "07/17/2009",
      cost: "63.00",
      notes: null,
      car: {
        id: 300,
        user_id: 3,
        type: "suv",
        car_year: 2008,
        make: "Toyota",
        model: "Sequoia",
        vin: "5N1AR2MM2EC787277",
        fullname: "2008 Toyota Sequoia",
      },
      location: {
        id: 302,
        user_id: 3,
        name: "Test Place",
        address: "123 Abc St",
        city: "TestCity",
        state: "TS",
        zip_code: "123456",
      },
      services: [
        { id: 350, user_id: 3, sname: "Oil Change" },
        { id: 351, user_id: 3, sname: "Tire replacement" },
        { id: 352, user_id: 3, sname: "Air filter replacement" },
      ],
    },
  ],
  getOrphanedServices: [],
  getOrphanedLocations: [
    {
      id: 312,
      user_id: 3,
      name: "Test Mechanics",
      address: "456 Def Ave",
      city: "Townsville",
      state: "AZ",
      zip_code: "78901",
    },
  ],
  getSavedServices: [
    { name: "Oil Change", date: "08/22/2018", count: 2 },
    { name: "Tire replacement", date: "07/17/2009", count: 1 },
    { name: "Air filter replacement", date: "07/17/2009", count: 1 },
  ],
  getSavedLocations: [
    { name: "Test Place", date: "07/17/2009", count: 1 },
  ],
  getTotalCost: "235.00",
}

export const User6SelectorData = {
  getDemoModeState: false,
  getUser: {
    id: 4,
    name: "Apollo Knight",
    googleConnected: true,
    facebookConnected: false,
    google_pic: "https://linktopic.com/aknight",
    facebook_pic: null,
    default_pic: "https://linktopic.com/aknight",
  },
  getUserId: 4,
  getServiceHistory: [],
  getServices: [],
  getLocations: [],
  getAlerts: [
    { message: "Unable to retrieve data", type: "danger" }
  ],
  getCarsError: "Unable to retrieve cars",
  getServiceHistoryError: "Unable to retrieve service history",
  getServicesError: "Unable to retrieve services",
  getLocationsError: "Unable to retrieve locations",
  getCarsDataLoading: false,
  getServiceHistoryDataLoading: false,
  getDataLoaded: false,
  getCarCount: 0,
  getCars: [],
  getAccounts: [
    { providerName: "Google", connected: true },
    { providerName: "Facebook", connected: false },
  ],
  getMergedServiceRecords: [],
  getOrphanedServices: [],
  getOrphanedLocations: [],
  getSavedServices: [],
  getSavedLocations: [],
  getTotalCost: "0.00",
}