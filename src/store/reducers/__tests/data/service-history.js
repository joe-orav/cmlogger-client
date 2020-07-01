export let fetchData = [
  {
    id: 1,
    service_date: "2020-10-17T04:00:00.000Z",
    cost: "100.00",
    notes: null,
    car_id: 1,
    location_id: 1,
    provided_services_ids: [1, 2, 3],
  },
];

export let fetchDataOutput = {
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
};

export let fetchError = { error: "Unable to get service history" };

export let fetchErrorOutput = {
  items: [],
  loading: false,
  error: "Unable to get service history",
};

export let addData = {
  record: {
    id: 200,
    service_date: "2020-12-25T04:00:00.000Z",
    cost: "300.00",
    notes: "My note",
    car_id: 100,
    location_id: 200,
    provided_services_ids: [100, 300, 400],
  },
  services: [
    { id: 300, user_id: 0, sname: "Air filter replacement" },
    { id: 400, user_id: 0, sname: "Spark plug replacement" },
  ],
  location: {
    id: 200,
    user_id: 0,
    name: "Test Mechanics",
    address: "678 Tester Way",
    city: "NewCity",
    state: "TS",
    zip_code: "57356",
  },
};

export let editData = {
  record: {
    id: 100,
    service_date: "2020-11-17T04:00:00.000Z",
    cost: "500.00",
    notes: null,
    car_id: 100,
    location_id: 100,
    provided_services_ids: [100, 200, 300],
  },
  services: [
    { id: 300, user_id: 0, sname: "Air filter replacement" },
  ],
  location: null
};

export let deleteData = { id: 100 }