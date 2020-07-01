export let fetchData = [
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
];

export let fetchDataOutput = {
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
};

export let fetchError = { error: "Unable to get locations" };

export let fetchErrorOutput = {
  items: [],
  loading: false,
  error: "Unable to get locations",
};

export let deleteData = { locationIDs: [2] };

export let deleteDataOutput = {
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
  ],
  loading: false,
  error: null,
};
