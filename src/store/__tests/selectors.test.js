import * as Selectors from "../selectors";
import {User1, User4, User6} from "../../mockdata/users"
import {User1SelectorData, User4SelectorData, User6SelectorData} from "../../mockdata/selectors"

describe.each([
  [1, User1, User1SelectorData],
  [2, User4, User4SelectorData],
  [3, User6, User6SelectorData],
])("Test Selectors using data set %i", (i, user, dataset) => {
  test.each`
    selector                                  | output
    ${Selectors.getDemoModeState}             | ${dataset.getDemoModeState}
    ${Selectors.getUser}                      | ${dataset.getUser}
    ${Selectors.getUserId}                    | ${dataset.getUserId}
    ${Selectors.getServiceHistory}            | ${dataset.getServiceHistory}
    ${Selectors.getServices}                  | ${dataset.getServices}
    ${Selectors.getLocations}                 | ${dataset.getLocations}
    ${Selectors.getAlerts}                    | ${dataset.getAlerts}
    ${Selectors.getCarsError}                 | ${dataset.getCarsError}
    ${Selectors.getServiceHistoryError}       | ${dataset.getServiceHistoryError}
    ${Selectors.getServicesError}             | ${dataset.getServicesError}
    ${Selectors.getLocationsError}            | ${dataset.getLocationsError}
    ${Selectors.getCarsDataLoading}           | ${dataset.getCarsDataLoading}
    ${Selectors.getServiceHistoryDataLoading} | ${dataset.getServiceHistoryDataLoading}
    ${Selectors.getDataLoaded}                | ${dataset.getDataLoaded}
    ${Selectors.getCarCount}                  | ${dataset.getCarCount}
    ${Selectors.getCars}                      | ${dataset.getCars}
    ${Selectors.getAccounts}                  | ${dataset.getAccounts}
    ${Selectors.getMergedServiceRecords}      | ${dataset.getMergedServiceRecords}
    ${Selectors.getOrphanedServices}          | ${dataset.getOrphanedServices}
    ${Selectors.getOrphanedLocations}         | ${dataset.getOrphanedLocations}
    ${Selectors.getSavedServices}             | ${dataset.getSavedServices}
    ${Selectors.getSavedLocations}            | ${dataset.getSavedLocations}
    ${Selectors.getTotalCost}                 | ${dataset.getTotalCost}
  `("$selector returns $output", ({ selector, output }) => {
    expect(selector(user)).toEqual(output);
  });
});
