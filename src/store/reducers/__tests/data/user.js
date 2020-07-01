export let fetchData = {
  id: 0,
  name: "Test User",
  google_id: 123,
  facebook_id: 456,
  google_profile_pic: "http://path/to/google_picture",
  fb_profile_pic: "http://path/to/fb_picture",
  default_pic: "http://path/to/google_picture",
};

export let fetchDataOutput = {
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
};

export let fetchError = { error: "Unable to get user" };

export let fetchErrorOutput = {
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
};

export let disconnectGoogleAccount = {
  id: 0,
  name: "Test User",
  google_id: null,
  facebook_id: 456,
  google_profile_pic: null,
  fb_profile_pic: "http://path/to/fb_picture",
  default_pic: "http://path/to/fb_picture",
};

export let disconnectGoogleAccountOutput = {
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
};

export let disconnectFBAccount = {
  id: 0,
  name: "Test User",
  google_id: 123,
  facebook_id: null,
  google_profile_pic: "http://path/to/google_picture",
  fb_profile_pic: null,
  default_pic: "http://path/to/google_picture",
};

export let disconnectFBAccountOutput = {
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
};

export let disconnectAccountError = {error: "Unable to disconnect account"}

export let disconnectAccountErrorOutput = {
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
}

export let deleteAccountError = {error: "Unable to delete account"}

export let deleteAccountErrorOutput = {
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
}