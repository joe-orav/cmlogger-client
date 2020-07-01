export let fetchData = [
  {
    id: 0,
    user_id: 0,
    type: "sedan",
    car_year: 2020,
    make: "Ford",
    model: "Fusion",
    VIN: "J4IG72MJ02B693B7A",
  },
];

export let fetchDataOutput = {
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
};

export let fetchError = { error: "Unable to get car" };

export let fetchErrorOutput = {
  items: [],
  loading: false,
  error: "Unable to get car",
};

export let addData = {
  id: 1,
  user_id: 0,
  type: "sedan",
  car_year: 2017,
  make: "Toyota",
  model: "Camry",
  VIN: "D64MFO3BG85NJ02G7",
};

export let addDataOutput = {
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
};

export let editData = {
  id: 0,
  user_id: 0,
  type: "sedan",
  car_year: 2019,
  make: "Ford",
  model: "Mustang",
  VIN: "J4IG72MJ02B693B7A",
};

export let editDataOutput = {
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
};

export let deleteData = { id: 0 };

export let deleteDataOutput = {
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
};

export let modifyDataError = {error: "Unable to modify car data"}

export let modifyDataErrorOutput = {
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
};