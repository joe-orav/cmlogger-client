export let fetchData = [
  {
    id: 1,
    user_id: 0,
    sname: "Oil Change",
  },
  {
    id: 2,
    user_id: 0,
    sname: "Tire replacement",
  },
];

export let fetchDataOutput = {
  items: [
    {
      id: 1,
      user_id: 0,
      sname: "Oil Change",
    },
    {
      id: 2,
      user_id: 0,
      sname: "Tire replacement",
    },
  ],
  loading: false,
  error: null,
};

export let fetchError = { error: "Unable to get services" };

export let fetchErrorOutput = {
  items: [],
  loading: false,
  error: "Unable to get services",
};

export let deleteData = { serviceIDs: [1] };

export let deleteDataOutput = {
  items: [
    {
      id: 2,
      user_id: 0,
      sname: "Tire replacement",
    },
  ],
  loading: false,
  error: null,
};
