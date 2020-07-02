import { createSelector } from "reselect";

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
    function formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    function parseDateString(rawDate) {
      let dateStringRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/;
      let pulledDateString = rawDate.match(dateStringRegex)[0];
      const [year, month, day] = pulledDateString
        .split("-")
        .map((dateValue) => parseInt(dateValue));

      let parsedDate = new Date(year, month - 1, day);

      return { parsedDate: parsedDate, dateString: formatDate(parsedDate) };
    }

    let mergedServiceRecords = serviceHistory.map((serviceRecord) => {
      let newSHObj = Object.assign(
        {},
        serviceRecord,
        {
          car: cars.filter((c) => c.id === serviceRecord.car_id)[0],
          services: services.filter(
            (s) => serviceRecord.provided_services_ids.indexOf(s.id) !== -1
          ),
          location: serviceRecord.location_id
            ? locations.filter(
                (l) => l.id === serviceRecord.location_id
              )[0]
            : null,
        },
        parseDateString(serviceRecord.service_date)
      );

      delete newSHObj["car_id"];
      delete newSHObj["location_id"];
      delete newSHObj["provided_services_ids"];

      return newSHObj;
    });

    mergedServiceRecords.sort((record1, record2) => {
      let date1 = new Date(record1.service_date).getTime();
      let date2 = new Date(record2.service_date).getTime();

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
            date: record.dateString,
            count: 1,
          };
        }
      });
    });

    return savedServices;
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
            date: record.dateString,
            count: 1,
          };
        }
      }
    });

    return savedLocations;
  }
);

export const getTotalCost = createSelector(
  getServiceHistory,
  (serviceHistory) => {
    let totalCost = serviceHistory.reduce(
      (acc, current) => acc + parseFloat(current.cost),
      0
    );

    if (totalCost > 999999) {
      return `${(totalCost / 1000000).toFixed(2)}m`;
    }

    return totalCost.toFixed(2);
  }
);