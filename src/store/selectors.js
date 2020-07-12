import { createSelector } from "reselect";
import moment from "moment";

export const getDemoModeState = (state) => state.demoMode;
export const getUser = (state) => state.user.profile;
export const getUserId = (state) => state.user.profile.id;
export const getServiceHistory = (state) => state.serviceHistory.items;
export const getServices = (state) => state.services.items;
export const getLocations = (state) => state.locations.items;
export const getAlerts = (state) => state.alerts;

export const getCarsError = (state) => state.cars.error;
export const getServiceHistoryError = (state) => state.serviceHistory.error;
export const getServicesError = (state) => state.services.error;
export const getLocationsError = (state) => state.locations.error;

export const getCarsDataLoading = (state) => state.cars.loading;
export const getServiceHistoryDataLoading = (state) =>
  state.serviceHistory.loading;
export const getDataLoaded = (state) => state.fetchComplete;

export const getCarCount = (state) => state.cars.items.length;

export const getCars = createSelector([(state) => state.cars.items], (cars) =>
  cars.map((c) =>
    Object.assign({}, c, { fullname: `${c.car_year} ${c.make} ${c.model}` })
  )
);

export const getAccounts = createSelector(getUser, (user) => {
  return [
    { providerName: "Google", connected: user.googleConnected },
    { providerName: "Facebook", connected: user.facebookConnected },
  ];
});

export const getMergedServiceRecords = createSelector(
  getCars,
  getServices,
  getLocations,
  getServiceHistory,
  (cars, services, locations, serviceHistory) => {
    let mergedServiceRecords = serviceHistory.map((serviceRecord) => {
      let car = cars.filter((c) => c.id === serviceRecord.car_id)[0];
      let servicesList = services.filter(
        (s) => serviceRecord.provided_services_ids.indexOf(s.id) !== -1
      );
      let location = serviceRecord.location_id
        ? locations.filter((l) => l.id === serviceRecord.location_id)[0]
        : null;

      let mergedData = {
        id: serviceRecord.id,
        cost: serviceRecord.cost,
        notes: serviceRecord.notes,
        car: car,
        services: servicesList,
        location: location,
        date: moment(serviceRecord.service_date).utc().format("MM/DD/YYYY"),
      };

      return mergedData;
    });

    mergedServiceRecords.sort((record1, record2) => {
      let date1 = moment(record1.date, "MM/DD/YYYY").valueOf();
      let date2 = moment(record2.date, "MM/DD/YYYY").valueOf();

      return date2 - date1;
    });

    return mergedServiceRecords;
  }
);

export const getOrphanedServices = createSelector(
  getServices,
  getServiceHistory,
  (services, serviceHistory) => {
    let inUseServiceIds = [];

    serviceHistory.forEach((historyItem) => {
      inUseServiceIds.push(...historyItem.provided_services_ids);
    });

    return services.filter((service) => {
      return inUseServiceIds.indexOf(service.id) === -1;
    });
  }
);

export const getOrphanedLocations = createSelector(
  getLocations,
  getServiceHistory,
  (locations, serviceHistory) => {
    let inUseLocationIds = [];

    serviceHistory.forEach((historyItem) => {
      inUseLocationIds.push(historyItem.location_id);
    });

    return locations.filter((location) => {
      return inUseLocationIds.indexOf(location.id) === -1;
    });
  }
);

export const getSavedServices = createSelector(
  getMergedServiceRecords,
  (serviceHistory) => {
    let savedServices = {};

    serviceHistory.forEach((record) => {
      record.services.forEach((service) => {
        if (savedServices[service.id]) {
          savedServices[service.id].count++;
        } else {
          savedServices[service.id] = {
            name: service.sname,
            date: record.date,
            count: 1,
          };
        }
      });
    });

    return Object.values(savedServices).sort((val1, val2) => {
      return val2.count - val1.count;
    });
  }
);

export const getSavedLocations = createSelector(
  getMergedServiceRecords,
  (serviceHistory) => {
    let savedLocations = {};

    serviceHistory.forEach((record) => {
      if (record.location) {
        const { id, name } = record.location;
        if (savedLocations[id]) {
          savedLocations[id].count++;
        } else {
          savedLocations[id] = {
            name: name,
            date: record.date,
            count: 1,
          };
        }
      }
    });

    return Object.values(savedLocations).sort((val1, val2) => {
      return val2.count - val1.count;
    });
  }
);

export const getTotalCost = createSelector(
  getServiceHistory,
  (serviceHistory) => {
    let totalCost = serviceHistory.reduce(
      (acc, current) => acc + parseFloat(current.cost),
      0
    );

    if (totalCost >= 999999999) {
      return `1B+`;
    } else if (totalCost >= 999999) {
      return `${(totalCost / 1000000).toFixed(2)}m`;
    } else if (totalCost >= 99999) {
      return `${(totalCost / 1000).toFixed(0)}k`;
    }

    return totalCost.toFixed(2);
  }
);
