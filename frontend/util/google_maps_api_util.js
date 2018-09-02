import { updateFilterErrors } from '../actions/filter_actions';

export const retriveLocationFromAddress = (context, address, errorHandler) => {
  const apiKey = window.googleMapsKey;
  return $.ajax({
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${window.googleMapsKey}`
  })
  .then(data => {
    if (data.results.length >= 1) {
      const latLong = data.results[0].geometry.location;
      const lat = Math.round(latLong.lat * 10000) / 10000;
      const lng = Math.round(latLong.lng * 10000) / 10000;
  
      context.setState({
        lat,
        lng
      });
    } else {
        if (errorHandler) {
          errorHandler("Sorry, we don't understand your location");
        }
    }
 });
};
