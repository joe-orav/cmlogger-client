import * as ActionTypes from "../action-types";

const ALERT_TYPES = { SUCCESS: "success", DANGER: "danger" };

function displayAlert(message, type) {
  return {
    type: ActionTypes.DISPLAY_ALERT,
    payload: { message: message, type: type },
  };
}

function removeAlert() {
  return async (dispatch) =>
    setTimeout(
      () =>
        dispatch({
          type: ActionTypes.REMOVE_ALERT,
        }),
      3000
    );
}

export default function createAlert(message, type) {
  return async (dispatch) => {
    let alertType;
    switch (type) {
      case 1:
        alertType = ALERT_TYPES.SUCCESS;
        break;
      case 2:
        alertType = ALERT_TYPES.DANGER;
        break;
      default:
        alertType = ALERT_TYPES.SUCCESS;
    }
    dispatch(displayAlert(message, alertType));
    dispatch(removeAlert());
  };
}
