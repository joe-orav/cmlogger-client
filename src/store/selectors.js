import { createSelector } from 'reselect';

export const getUser = (state) => state.user.profile;
export const getUserId = (state) => state.user.profile.id;
export const getServiceHistory = (state) => state.serviceHistory.items;
export const getServices = (state) => state.services.items;
export const getLocations = (state) => state.locations.items;
export const getAlerts = (state) => state.alerts

export const getCarsError = (state) => state.cars.error;
export const getServiceHistoryError = (state) => state.serviceHistory.error;
export const getServicesError = (state) => state.services.error;
export const getLocationsError = (state) => state.locations.error;

export const getCarsDataLoading = (state) => state.cars.loading;
export const getServiceHistoryDataLoading = (state) => state.serviceHistory.loading;

export const getCarCount = (state) => state.cars.items.length;

export const getCars = createSelector(
    [(state) => state.cars.items],
    (cars) => cars.map(c => Object.assign({}, c, { fullname: `${c.car_year} ${c.make} ${c.model}` }))
)

export const getExpandedServiceHistory = createSelector(
    getCars, getServices, getLocations, getServiceHistory,
    (cars, services, locations, serviceHistory) => {
        function formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }

        function parseDateString(rawDate) {
            let dateStringRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/;
            let pulledDateString = rawDate.match(dateStringRegex)[0];
            const [year, month, day] = pulledDateString.split("-").map(dateValue => parseInt(dateValue));

            let parsedDate = new Date(year, month - 1, day);

            return {parsedDate: parsedDate, dateString: formatDate(parsedDate)};
        }

        let expandedServiceHistory = serviceHistory.map(serviceHistoryItem => {
            let newSHObj = Object.assign({}, serviceHistoryItem,
                {
                    car: cars.filter(c => c.id === serviceHistoryItem.car_id)[0],
                    services: services.filter(s => serviceHistoryItem.provided_services_ids.indexOf(s.id) !== -1),
                    location: locations.filter(l => l.id === serviceHistoryItem.location_id)[0]
                },
                parseDateString(serviceHistoryItem.service_date)
            )

            delete newSHObj["car_id"];
            delete newSHObj["location_id"];
            delete newSHObj["provided_services_ids"];

            return newSHObj;
        })

        expandedServiceHistory.sort((record1, record2) => {
            let date1 = new Date(record1.service_date).getTime();
            let date2 = new Date(record2.service_date).getTime();

            return date2 - date1;
        })

        return expandedServiceHistory
    }
)

export const getOrphanedServices = createSelector(
    getServices, getServiceHistory,
    (services, serviceHistory) => {
        let inUseServiceIds = [];

        serviceHistory.forEach((historyItem) => {
            inUseServiceIds.push(...historyItem.provided_services_ids);
        })

        return services.filter((service) => {
            return inUseServiceIds.indexOf(service.id) === -1
        })
    }
)

export const getOrphanedLocations = createSelector(
    getLocations, getServiceHistory,
    (locations, serviceHistory) => {
        let inUseLocationIds = [];

        serviceHistory.forEach((historyItem) => {
            inUseLocationIds.push(historyItem.location_id);
        })

        return locations.filter((location) => {
            return inUseLocationIds.indexOf(location.id) === -1
        })
    }
)


export const getErrors = createSelector(
    getCarsError, getServiceHistoryError, getServicesError, getLocationsError,
    (carsError, shError, sError, lError) => {
        return { cars: carsError, serviceHistory: shError, services: sError, locations: lError }
    }
)
