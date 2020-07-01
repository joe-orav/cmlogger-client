import { initialState } from "../store";

test("Validate Initial State", () => {
  expect(initialState).toEqual({
    demoMode: false,
    user: {
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
  });
});
