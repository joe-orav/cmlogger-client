import * as Selectors from "../selectors";
import * as Dataset1 from "./selector-data/dataset1";
import * as Dataset2 from "./selector-data/dataset2";
import * as Dataset3 from "./selector-data/dataset3";

describe.each([
  [1, Dataset1],
  [2, Dataset2],
  [2, Dataset3],
])("Test Selectors using data set %i", (i, dataset) => {
  let state;

  beforeAll(() => {
    state = Object.assign({}, dataset.state);
  });

  test.each`
    selector                                  | output
    ${Selectors.getDemoModeState}             | ${dataset.getDemoModeStateOutput}
    ${Selectors.getUser}                      | ${dataset.getUserOutput}
    ${Selectors.getUserId}                    | ${dataset.getUserIdOutput}
    ${Selectors.getServiceHistory}            | ${dataset.getServiceHistoryOutput}
    ${Selectors.getServices}                  | ${dataset.getServicesOutput}
    ${Selectors.getLocations}                 | ${dataset.getLocationsOutput}
    ${Selectors.getAlerts}                    | ${dataset.getAlertsOutput}
    ${Selectors.getCarsError}                 | ${dataset.getCarsErrorOutput}
    ${Selectors.getServiceHistoryError}       | ${dataset.getServiceHistoryErrorOutput}
    ${Selectors.getServicesError}             | ${dataset.getServicesErrorOutput}
    ${Selectors.getLocationsError}            | ${dataset.getLocationsErrorOutput}
    ${Selectors.getCarsDataLoading}           | ${dataset.getCarsDataLoadingOutput}
    ${Selectors.getServiceHistoryDataLoading} | ${dataset.getServiceHistoryDataLoadingOutput}
    ${Selectors.getDataLoaded}                | ${dataset.getDataLoadedOutput}
    ${Selectors.getCarCount}                  | ${dataset.getCarCountOutput}
    ${Selectors.getCars}                      | ${dataset.getCarsOutput}
    ${Selectors.getAccounts}                  | ${dataset.getAccountsOutput}
    ${Selectors.getMergedServiceRecords}      | ${dataset.getMergedServiceRecordsOutput}
    ${Selectors.getOrphanedServices}          | ${dataset.getOrphanedServicesOutput}
    ${Selectors.getOrphanedLocations}         | ${dataset.getOrphanedLocationsOutput}
    ${Selectors.getSavedServices}             | ${dataset.getSavedServicesOutput}
    ${Selectors.getSavedLocations}            | ${dataset.getSavedLocationsOutput}
    ${Selectors.getTotalCost}                 | ${dataset.getTotalCostOutput}
  `("$selector returns $output", ({ selector, output }) => {
    expect(selector(state)).toEqual(output);
  });
});
