/**
 * (User 1)
 * Demo: False
 * Google: True
 * Facebook: False
 * Cars: 1
 * Records: 1
 * Services: 2
 * Locations: 1
 */

export const User1 = {
  demoMode: false,
  user: {
    loading: false,
    error: null,
    profile: {
      id: 1,
      name: "John Smith",
      googleConnected: true,
      facebookConnected: false,
      google_pic: "https://linktopic.com/jsmith",
      facebook_pic: null,
      default_pic: "https://linktopic.com/jsmith",
    },
  },
  cars: {
    items: [
      {
        id: 100,
        user_id: 1,
        type: "sedan",
        car_year: 2020,
        make: "Ford",
        model: "Fusion",
        vin: "2FMDK4KC1DBA45121",
      },
    ],
    loading: false,
    error: null,
  },
  serviceHistory: {
    items: [
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
    loading: false,
    error: null,
  },
  services: {
    items: [
      { id: 150, user_id: 1, sname: "Oil Change" },
      { id: 151, user_id: 1, sname: "Tire replacement" },
    ],
    loading: false,
    error: null,
  },
  locations: {
    items: [
      {
        id: 102,
        user_id: 1,
        name: "Test Place",
        address: "123 Abc St",
        city: "TestCity",
        state: "AZ",
        zip_code: "123456",
        other: null,
      },
    ],
    loading: false,
    error: null,
  },
  alerts: [{ message: "This is a test success message", type: "success" }],
  fetchComplete: true,
}

/**
 * (User 2)
 * Demo: True
 * Google: False
 * Facebook: False
 * Cars: 1
 * Records: 1
 * Services: 1
 * Locations: 1
 */

export const User2 = {
  demoMode: true,
  user: {
    loading: false,
    error: null,
    profile: {
      id: 0,
      name: "Demo User",
      googleConnected: false,
      facebookConnected: false,
      google_pic: "https://linktopic.com/demouser",
      facebook_pic: null,
      default_pic: "https://linktopic.com/demouser",
    },
  },
  cars: {
    items: [
      {
        id: 1,
        user_id: 0,
        type: "sedan",
        car_year: 2005,
        make: "Saturn",
        model: "ION2",
        vin: "1C4RDHDG0EC597495",
      },
    ],
    loading: false,
    error: null,
  },
  serviceHistory: {
    items: [
      {
        id: 2,
        service_date: "2010-04-03T04:00:00.000Z",
        cost: "75.00",
        notes: null,
        car_id: 1,
        location_id: 4,
        provided_services_ids: [3],
      },
    ],
    loading: false,
    error: null,
  },
  services: {
    items: [{ id: 3, user_id: 0, sname: "Air filter replacement" }],
    loading: false,
    error: null,
  },
  locations: {
    items: [
      {
        id: 4,
        user_id: 0,
        name: "Test Place",
        address: "123 Abc St",
        city: "TestCity",
        state: "AZ",
        zip_code: "123456",
        other: "947 2G6"
      },
    ],
    loading: false,
    error: null,
  },
  alerts: [],
  fetchComplete: true,
}

/**
 * (User 3)
 * Demo: False
 * Google: False
 * Facebook: True
 * Cars: 0
 * Records: 0
 * Services: 0
 * Locations: 0
 */

export const User3 = {
  demoMode: false,
  user: {
    loading: false,
    error: null,
    profile: {
      id: 2,
      name: "Mary Jane",
      googleConnected: false,
      facebookConnected: true,
      google_pic: null,
      facebook_pic: "https://linktopic.com/mjane",
      default_pic: "https://linktopic.com/mjane",
    },
  },
  cars: {
    items: [],
    loading: false,
    error: null,
  },
  serviceHistory: {
    items: [],
    loading: false,
    error: null,
  },
  services: {
    items: [],
    loading: false,
    error: null,
  },
  locations: {
    items: [],
    loading: false,
    error: null,
  },
  alerts: [],
  fetchComplete: true,
}

/**
 * (User 4)
 * Demo: False
 * Google: True
 * Facebook: True
 * Cars: 2
 * Records: 2
 * Services: 3
 * Locations: 2
 */

export const User4 = {
  demoMode: false,
  user: {
    loading: false,
    error: null,
    profile: {
      id: 3,
      name: "Bryan Willams",
      googleConnected: true,
      facebookConnected: true,
      google_pic: "https://linktogooglepic.com/bwilliams",
      facebook_pic: "https://linktofbpic.com/bwilliams",
      default_pic: "https://linktofbpic.com/bwilliams",
    },
  },
  cars: {
    items: [
      {
        id: 300,
        user_id: 3,
        type: "suv",
        car_year: 2008,
        make: "Toyota",
        model: "Sequoia",
        vin: "5N1AR2MM2EC787277",
      },
      {
        id: 310,
        user_id: 3,
        type: "suv",
        car_year: 2014,
        make: "Honda",
        model: "Pilot",
        vin: "1GNEC13R6WJ390853",
      },
    ],
    loading: false,
    error: null,
  },
  serviceHistory: {
    items: [
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
    loading: false,
    error: null,
  },
  services: {
    items: [
      { id: 350, user_id: 3, sname: "Oil Change" },
      { id: 351, user_id: 3, sname: "Tire replacement" },
      { id: 352, user_id: 3, sname: "Air filter replacement" },
    ],
    loading: false,
    error: null,
  },
  locations: {
    items: [
      {
        id: 302,
        user_id: 3,
        name: "Test Place",
        address: "123 Abc St",
        city: "TestCity",
        state: "TS",
        zip_code: "123456",
        other: "F3J 937",
      },
      {
        id: 312,
        user_id: 3,
        name: "Test Mechanics",
        address: "456 Def Ave",
        city: "Townsville",
        state: "AZ",
        zip_code: "78901",
        other: null,
      },
    ],
    loading: false,
    error: null,
  },
  alerts: [
    { message: "Unable to retrieve data", type: "danger" },
    { message: "This is a test success message", type: "success" },
  ],
  fetchComplete: true,
}

/**
 * (User 5)
 * Demo: False
 * Google: False
 * Facebook: False
 * Cars: 0
 * Records: 0
 * Services: 0
 * Locations: 0
 */

export const User5 = {
  demoMode: false,
  user: {
    loading: false,
    error: "Not authorized",
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
    error: null,
  },
  serviceHistory: {
    items: [],
    loading: false,
    error: null,
  },
  services: {
    items: [],
    loading: false,
    error: null,
  },
  locations: {
    items: [],
    loading: false,
    error: null,
  },
  alerts: [],
  fetchComplete: false,
}

/**
 * (User 6)
 * Demo: False
 * Google: True
 * Facebook: False
 * Cars: 0
 * Records: 0
 * Services: 0
 * Locations: 0
 */

export const User6 = {
  demoMode: false,
  user: {
    loading: false,
    error: null,
    profile: {
      id: 4,
      name: "Apollo Knight",
      googleConnected: true,
      facebookConnected: false,
      google_pic: "https://linktopic.com/aknight",
      facebook_pic: null,
      default_pic: "https://linktopic.com/aknight",
    },
  },
  cars: {
    items: [],
    loading: false,
    error: "Unable to retrieve cars",
  },
  serviceHistory: {
    items: [],
    loading: false,
    error: "Unable to retrieve service history",
  },
  services: {
    items: [],
    loading: false,
    error: "Unable to retrieve services",
  },
  locations: {
    items: [],
    loading: false,
    error: "Unable to retrieve locations",
  },
  alerts: [{ message: "Unable to retrieve data", type: "danger" }],
  fetchComplete: false,
}
