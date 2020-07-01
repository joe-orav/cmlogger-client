export default {
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
  alerts: [],
  fetchComplete: true,
};
