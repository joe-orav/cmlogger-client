import * as ActionTypes from "../action-types";

test("Action Types have unique values", () => {
    let actionTypeValues = Object.values(ActionTypes);
    let valueSet = new Set(actionTypeValues);
    expect(valueSet.size).toBe(actionTypeValues.length)
})