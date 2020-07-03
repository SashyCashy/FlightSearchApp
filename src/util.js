/**
 * File Description: This is a utility file to have shared functions
 * Author(s): Sashank Pindiproli
 * Date of Creation: 03/02/2020
 */
import moment from 'moment';

export const formatDisplayDate = (date) =>
  moment(date).format('LLLL').replace(moment(date).format('LT'), '');

export const calculateTimeDifference = (departureTime, arrivalTime) => {
  let startTime = moment(departureTime, 'YYYY/MM/DD HH:mm:ss');
  let endTime = moment(arrivalTime, 'YYYY/MM/DD HH:mm:ss');

  // calculate total duration
  let duration = moment.duration(endTime.diff(startTime));

  // duration in hours
  let hours = parseInt(duration.asHours());

  // duration in minutes
  let minutes = parseInt(duration.asMinutes()) % 60;
  return `${hours} h ${minutes} m`;
};

export const formatMoney = (price, currency) => {
  switch (currency) {
    case 'INR':
      return `\u20B9 ${price}`;
    case 'DLR':
      return `\u0024 ${price}`;
  }
};

/**
 * 
 * SAMPLE OBJECT = {
    "arrivalTime": "14:15",
    "date": "2020/11/01",
    "departureTime": "13:15",
    "destination": "Pune (PNQ)",
    "flightNo": "AI-117",
    "name": "Air India",
    "origin": "Mumbai (BOM)",
    "price": 5117
  },
  {
    "arrivalTime": "6:00",
    "date": "2020/11/02",
    "departureTime": "5:00",
    "destination": "Mumbai (BOM)",
    "flightNo": "AI-119",
    "name": "Air India",
    "origin": "Delhi (DEL)",
    "price": 3525
  }, 
 */
export const findMultiAirline = async (
  flightsList,
  originAirport = 'Pune (PNQ)',
  destinationAirport = 'Delhi (DEL)'
) => {
  let multiAirObject = [];
  // Seperate all the ones that are having matching origins
  // Seperate all the ones that are having matching destinations
  let destinations = flightsList.filter(
    ({ destination, origin }) =>
      destination === destinationAirport && origin !== originAirport
  );

  let origins = flightsList.filter(
    ({ destination, origin }) =>
      origin === originAirport && destination !== destinationAirport
  );

  let overview = {};
  for (let originPlace of origins) {
    for (let destPlace of destinations) {
      if (originPlace['destination'] === destPlace['origin']) {
        /** LOGIC to add first into the array, then check if it exists, check if its already added in the array, if not add it */
        if (multiAirObject.length === 0) {
          multiAirObject = createMultiAirObject(
            {},
            destPlace,
            originPlace,
            multiAirObject
          );
        } else {
          for (let object of multiAirObject) {
            if (!object.overview.code === overview.code) {
              multiAirObject = createMultiAirObject(
                {},
                destPlace,
                originPlace,
                multiAirObject
              );
            }
          }
        }
      }
    }
  }
  return multiAirObject;
};

const createMultiAirObject = (
  overview = {},
  destPlace,
  originPlace,
  multiAirObject
) => {
  overview['name'] = 'Multiple';
  overview['code'] = originPlace['origin'] + destPlace['origin'];
  overview['origin'] = originPlace['origin'];
  overview['destination'] = destPlace['destination'];
  overview['departureTime'] = originPlace['departureTime'];
  overview['arrivalTime'] = destPlace['arrivalTime'];
  let originTime = originPlace['date'] + ' ' + originPlace['departureTime'];
  let destTime = destPlace['date'] + ' ' + destPlace['arrivalTime'];

  overview['duration'] = calculateTimeDifference(originTime, destTime);

  overview['price'] =
    parseInt(originPlace['price']) + parseInt(destPlace['price']);
  multiAirObject.push({
    destination: destPlace,
    origin: originPlace,
    overview,
  });
  return multiAirObject;
};
