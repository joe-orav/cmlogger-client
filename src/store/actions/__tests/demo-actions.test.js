import { setDemoModeStateTo } from "../demo-actions";
import * as ActionTypes from "../../action-types";

describe("Demo mode actions", () => {
    test("Enable demo mode action is dispatched", () => {
        expect(setDemoModeStateTo(true)).toEqual({
            type: ActionTypes.ENABLE_DEMO_MODE
        })
    })

    test("Disable demo mode action is dispatched", () => {
        expect(setDemoModeStateTo(false)).toEqual({
            type: ActionTypes.DISABLE_DEMO_MODE
        })
    })
})
