import demoDefaultPic from "../img/default_pic.png"

export const alertsReducerData = {
  initialState: [],
  payloads: [
    {
      id: 1,
      type: "success",
      message: "This a test message",
    },
    {
      id: 2,
      type: "danger",
      message: "Here is another message",
    },
    1,
    2,
  ],
  newStates: [
    [
      {
        id: 1,
        type: "success",
        message: "This a test message",
      },
    ],
    [
      {
        id: 1,
        type: "success",
        message: "This a test message",
      },
      {
        id: 2,
        type: "danger",
        message: "Here is another message",
      },
    ],
    [
      {
        id: 2,
        type: "danger",
        message: "Here is another message",
      },
    ],
    [],
  ],
}

export const carsReducerData = {
  fetch: {
    initialState: {
      items: [],
      loading: false,
      error: null,
    },
    start: {
      newState: {
        items: [],
        loading: true,
        error: null,
      },
    },
  },
  fetch_result: {
    initialState: {
      items: [],
      loading: true,
      error: null,
    },
    success: {
      payload: [
        {
          id: 0,
          user_id: 0,
          type: "sedan",
          car_year: 2020,
          make: "Ford",
          model: "Fusion",
          VIN: "J4IG72MJ02B693B7A",
        },
      ],
      newState: {
        items: [
          {
            id: 0,
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
    },
    failure: {
      payload: { error: "Unable to get car" },
      newState: {
        items: [],
        loading: false,
        error: "Unable to get car",
      },
    },
  },
  modify: {
    initialState: {
      items: [
        {
          id: 0,
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
    add: {
      payload: {
        id: 1,
        user_id: 0,
        type: "sedan",
        car_year: 2017,
        make: "Toyota",
        model: "Camry",
        VIN: "D64MFO3BG85NJ02G7",
      },
      newState: {
        items: [
          {
            id: 0,
            user_id: 0,
            type: "sedan",
            car_year: 2020,
            make: "Ford",
            model: "Fusion",
            VIN: "J4IG72MJ02B693B7A",
          },
          {
            id: 1,
            user_id: 0,
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
    },
    edit: {
      payload: {
        id: 0,
        user_id: 0,
        type: "sedan",
        car_year: 2019,
        make: "Ford",
        model: "Mustang",
        VIN: "J4IG72MJ02B693B7A",
      },
      newState: {
        items: [
          {
            id: 0,
            user_id: 0,
            type: "sedan",
            car_year: 2019,
            make: "Ford",
            model: "Mustang",
            VIN: "J4IG72MJ02B693B7A",
          },
          {
            id: 1,
            user_id: 0,
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
    },
    delete: {
      payload: { id: 0 },
      newState: {
        items: [
          {
            id: 1,
            user_id: 0,
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
    },
    error: {
      payload: { error: "Unable to modify car data" },
      newState: {
        items: [
          {
            id: 1,
            user_id: 0,
            type: "sedan",
            car_year: 2017,
            make: "Toyota",
            model: "Camry",
            VIN: "D64MFO3BG85NJ02G7",
          },
        ],
        loading: false,
        error: "Unable to modify car data",
      },
    },
    delete_account: {
      payload: null,
      newState: {
        items: [],
        loading: false,
        error: null,
      },
    },
  },
}

export const locationsReducerData = {
  fetch: {
    initialState: {
      items: [],
      loading: false,
      error: null,
    },
    start: {
      newState: {
        items: [],
        loading: true,
        error: null,
      },
    },
  },
  fetch_result: {
    initialState: {
      items: [],
      loading: true,
      error: null,
    },
    success: {
      payload: [
        {
          id: 1,
          user_id: 0,
          name: "Test Place",
          address: "123 Abc St",
          city: "TestCity",
          state: "TS",
          zip_code: "123456",
        },
        {
          id: 2,
          user_id: 0,
          name: "Joe's Mechanics",
          address: "456 DEF Ave",
          city: "CityPlace",
          state: "TS",
          zip_code: "46783",
        },
      ],
      newState: {
        items: [
          {
            id: 1,
            user_id: 0,
            name: "Test Place",
            address: "123 Abc St",
            city: "TestCity",
            state: "TS",
            zip_code: "123456",
          },
          {
            id: 2,
            user_id: 0,
            name: "Joe's Mechanics",
            address: "456 DEF Ave",
            city: "CityPlace",
            state: "TS",
            zip_code: "46783",
          },
        ],
        loading: false,
        error: null,
      },
    },
    failure: {
      payload: { error: "Unable to get locations" },
      newState: {
        items: [],
        loading: false,
        error: "Unable to get locations",
      },
    },
  },
  modify: {
    initialState: {
      items: [
        {
          id: 1,
          user_id: 0,
          name: "Test Place",
          address: "123 Abc St",
          city: "TestCity",
          state: "TS",
          zip_code: "123456",
        },
        {
          id: 2,
          user_id: 0,
          name: "Joe's Mechanics",
          address: "456 DEF Ave",
          city: "CityPlace",
          state: "TS",
          zip_code: "46783",
        },
      ],
      loading: false,
      error: null,
    },
    add: {
      payload: {
        location: {
          id: 3,
          user_id: 0,
          name: "Test Mechanics",
          address: "678 Tester Way",
          city: "NewCity",
          state: "TS",
          zip_code: "57356",
        },
      },
      newState: {
        items: [
          {
            id: 1,
            user_id: 0,
            name: "Test Place",
            address: "123 Abc St",
            city: "TestCity",
            state: "TS",
            zip_code: "123456",
          },
          {
            id: 2,
            user_id: 0,
            name: "Joe's Mechanics",
            address: "456 DEF Ave",
            city: "CityPlace",
            state: "TS",
            zip_code: "46783",
          },
          {
            id: 3,
            user_id: 0,
            name: "Test Mechanics",
            address: "678 Tester Way",
            city: "NewCity",
            state: "TS",
            zip_code: "57356",
          },
        ],
        loading: false,
        error: null,
      },
    },
    edit: {
      payload: {
        location: null,
      },
      newState: {
        items: [
          {
            id: 1,
            user_id: 0,
            name: "Test Place",
            address: "123 Abc St",
            city: "TestCity",
            state: "TS",
            zip_code: "123456",
          },
          {
            id: 2,
            user_id: 0,
            name: "Joe's Mechanics",
            address: "456 DEF Ave",
            city: "CityPlace",
            state: "TS",
            zip_code: "46783",
          },
          {
            id: 3,
            user_id: 0,
            name: "Test Mechanics",
            address: "678 Tester Way",
            city: "NewCity",
            state: "TS",
            zip_code: "57356",
          },
        ],
        loading: false,
        error: null,
      },
    },
    delete: {
      payload: { locationIDs: [2] },
      newState: {
        items: [
          {
            id: 1,
            user_id: 0,
            name: "Test Place",
            address: "123 Abc St",
            city: "TestCity",
            state: "TS",
            zip_code: "123456",
          },
          {
            id: 3,
            user_id: 0,
            name: "Test Mechanics",
            address: "678 Tester Way",
            city: "NewCity",
            state: "TS",
            zip_code: "57356",
          },
        ],
        loading: false,
        error: null,
      },
    },
    error: {
      payload: { error: "Unable to modify location data" },
      newState: {
        items: [
          {
            id: 1,
            user_id: 0,
            name: "Test Place",
            address: "123 Abc St",
            city: "TestCity",
            state: "TS",
            zip_code: "123456",
          },
          {
            id: 3,
            user_id: 0,
            name: "Test Mechanics",
            address: "678 Tester Way",
            city: "NewCity",
            state: "TS",
            zip_code: "57356",
          },
        ],
        loading: false,
        error: "Unable to modify location data",
      },
    },
    delete_account: {
      payload: null,
      newState: {
        items: [],
        loading: false,
        error: null,
      },
    },
  },
}

export const serviceHistoryReducerData = {
  fetch: {
    initialState: {
      items: [],
      loading: false,
      error: null,
    },
    start: {
      newState: {
        items: [],
        loading: true,
        error: null,
      },
    },
  },
  fetch_result: {
    initialState: {
      items: [],
      loading: true,
      error: null,
    },
    success: {
      payload: [
        {
          id: 1,
          service_date: "2020-10-17T04:00:00.000Z",
          cost: "100.00",
          notes: null,
          car_id: 1,
          location_id: 1,
          provided_services_ids: [1, 2, 3],
        },
      ],
      newState: {
        items: [
          {
            id: 1,
            service_date: "2020-10-17T04:00:00.000Z",
            cost: "100.00",
            notes: null,
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1, 2, 3],
          },
        ],
        loading: false,
        error: null,
      },
    },
    failure: {
      payload: { error: "Unable to get service history" },
      newState: {
        items: [],
        loading: false,
        error: "Unable to get service history",
      },
    },
  },
  modify: {
    initialState: {
      items: [
        {
          id: 1,
          service_date: "2020-10-17T04:00:00.000Z",
          cost: "100.00",
          notes: null,
          car_id: 1,
          location_id: 1,
          provided_services_ids: [1, 2, 3],
        },
      ],
      loading: false,
      error: null,
    },
    add: {
      payload: {
        record: {
          id: 2,
          service_date: "2020-12-25T04:00:00.000Z",
          cost: "300.00",
          notes: "My note",
          car_id: 1,
          location_id: 1,
          provided_services_ids: [1],
        },
      },
      newState: {
        error: null,
        loading: false,
        items: [
          {
            id: 1,
            service_date: "2020-10-17T04:00:00.000Z",
            cost: "100.00",
            notes: null,
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1, 2, 3],
          },
          {
            id: 2,
            service_date: "2020-12-25T04:00:00.000Z",
            cost: "300.00",
            notes: "My note",
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1],
          },
        ],
      },
    },
    edit: {
      payload: {
        record: {
          id: 2,
          service_date: "2000-08-20T04:00:00.000Z",
          cost: "200.00",
          notes: "My new note",
          car_id: 1,
          location_id: 1,
          provided_services_ids: [1, 2],
        },
      },
      newState: {
        error: null,
        loading: false,
        items: [
          {
            id: 1,
            service_date: "2020-10-17T04:00:00.000Z",
            cost: "100.00",
            notes: null,
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1, 2, 3],
          },
          {
            id: 2,
            service_date: "2000-08-20T04:00:00.000Z",
            cost: "200.00",
            notes: "My new note",
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1, 2],
          },
        ],
      },
    },
    delete: {
      payload: { id: 1 },
      newState: {
        error: null,
        loading: false,
        items: [
          {
            id: 2,
            service_date: "2000-08-20T04:00:00.000Z",
            cost: "200.00",
            notes: "My new note",
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1, 2],
          },
        ],
      },
    },
    error: {
      payload: { error: "Unable to modify record" },
      newState: {
        error: "Unable to modify record",
        loading: false,
        items: [
          {
            id: 2,
            service_date: "2000-08-20T04:00:00.000Z",
            cost: "200.00",
            notes: "My new note",
            car_id: 1,
            location_id: 1,
            provided_services_ids: [1, 2],
          },
        ],
      },
    },
    delete_account: {
      payload: null,
      newState: {
        items: [],
        loading: false,
        error: null,
      },
    },
  },
}

export const servicesReducerData = {
  fetch: {
    initialState: {
      items: [],
      loading: false,
      error: null,
    },
    start: {
      newState: {
        items: [],
        loading: true,
        error: null,
      },
    },
  },
  fetch_result: {
    initialState: {
      items: [],
      loading: true,
      error: null,
    },
    success: {
      payload: [
        { id: 1, user_id: 0, sname: "Oil Change" },
        { id: 2, user_id: 0, sname: "Tire replacement" },
      ],
      newState: {
        items: [
          { id: 1, user_id: 0, sname: "Oil Change" },
          { id: 2, user_id: 0, sname: "Tire replacement" },
        ],
        loading: false,
        error: null,
      },
    },
    failure: {
      payload: { error: "Unable to get services" },
      newState: {
        items: [],
        loading: false,
        error: "Unable to get services",
      },
    },
  },
  modify: {
    initialState: {
      items: [
        { id: 1, user_id: 0, sname: "Oil Change" },
        { id: 2, user_id: 0, sname: "Tire replacement" },
      ],
      loading: false,
      error: null,
    },
    add: {
      payload: {
        services: [
          { id: 3, user_id: 0, sname: "Air filter replacement" },
          { id: 4, user_id: 0, sname: "Spark plug replacement" },
        ],
      },
      newState: {
        items: [
          { id: 1, user_id: 0, sname: "Oil Change" },
          { id: 2, user_id: 0, sname: "Tire replacement" },
          { id: 3, user_id: 0, sname: "Air filter replacement" },
          { id: 4, user_id: 0, sname: "Spark plug replacement" },
        ],
        loading: false,
        error: null,
      },
    },
    edit: {
      payload: {
        services: [{ id: 5, user_id: 0, sname: "Car wash" }],
      },
      newState: {
        items: [
          { id: 1, user_id: 0, sname: "Oil Change" },
          { id: 2, user_id: 0, sname: "Tire replacement" },
          { id: 3, user_id: 0, sname: "Air filter replacement" },
          { id: 4, user_id: 0, sname: "Spark plug replacement" },
          { id: 5, user_id: 0, sname: "Car wash" },
        ],
        loading: false,
        error: null,
      },
    },
    delete: {
      payload: { serviceIDs: [1] },
      newState: {
        items: [
          { id: 2, user_id: 0, sname: "Tire replacement" },
          { id: 3, user_id: 0, sname: "Air filter replacement" },
          { id: 4, user_id: 0, sname: "Spark plug replacement" },
          { id: 5, user_id: 0, sname: "Car wash" },
        ],
        loading: false,
        error: null,
      },
    },
    error: {
      payload: { error: "Unable to modify service data" },
      newState: {
        items: [
          { id: 2, user_id: 0, sname: "Tire replacement" },
          { id: 3, user_id: 0, sname: "Air filter replacement" },
          { id: 4, user_id: 0, sname: "Spark plug replacement" },
          { id: 5, user_id: 0, sname: "Car wash" },
        ],
        loading: false,
        error: "Unable to modify service data",
      },
    },
    delete_account: {
      payload: null,
      newState: {
        items: [],
        loading: false,
        error: null,
      },
    },
  },
}

export const userReducerData = {
  fetch: {
    initialState: {
      loading: false,
      error: null,
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
    start: {
      newState: {
        loading: true,
        error: null,
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
    },
  },
  fetch_result: {
    initialState: {
      loading: true,
      error: null,
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
    success: {
      payload: {
        id: 0,
        name: "Test User",
        google_id: 123,
        facebook_id: 456,
        google_profile_pic: "http://path/to/google_picture",
        fb_profile_pic: "http://path/to/fb_picture",
        default_pic: "http://path/to/google_picture",
      },
      newState: {
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
    },
    failure: {
      payload: { error: "Unable to get user" },
      newState: {
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
    },
  },
  demo: {
    initialState: {
      loading: false,
      error: null,
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
    newState: {
      loading: false,
      error: null,
      profile: {
        id: 0,
        name: "Demo User",
        googleConnected: null,
        facebookConnected: null,
        google_pic: "",
        facebook_pic: "",
        default_pic: demoDefaultPic,
      },
    },
  },
  disconnect: {
    initialState: {
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
    google: {
      payload: {
        id: 0,
        name: "Test User",
        google_id: null,
        facebook_id: 456,
        google_profile_pic: null,
        fb_profile_pic: "http://path/to/fb_picture",
        default_pic: "http://path/to/fb_picture",
      },
      newState: {
        loading: false,
        error: null,
        profile: {
          id: 0,
          name: "Test User",
          googleConnected: false,
          facebookConnected: true,
          google_pic: null,
          facebook_pic: "http://path/to/fb_picture",
          default_pic: "http://path/to/fb_picture",
        },
      },
    },
    facebook: {
      payload: {
        id: 0,
        name: "Test User",
        google_id: 123,
        facebook_id: null,
        google_profile_pic: "http://path/to/google_picture",
        fb_profile_pic: null,
        default_pic: "http://path/to/google_picture",
      },
      newState: {
        loading: false,
        error: null,
        profile: {
          id: 0,
          name: "Test User",
          googleConnected: true,
          facebookConnected: false,
          google_pic: "http://path/to/google_picture",
          facebook_pic: null,
          default_pic: "http://path/to/google_picture",
        },
      },
    },
    failure: {
      payload: { error: "Unable to disconnect account" },
      newState: {
        loading: false,
        error: "Unable to disconnect account",
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
    },
  },
  delete: {
    initialState: {
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
    success: {
      payload: null,
      newState: {
        loading: false,
        error: null,
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
    },
    failure: {
      payload: { error: "Unable to delete account" },
      newState: {
        loading: false,
        error: "Unable to delete account",
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
    },
  },
}
