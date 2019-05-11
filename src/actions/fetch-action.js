export const FETCH_WEATHER = 'FETCH_WEATHER';
const APPID = '9a8730ae60a43e714a4c9847fe152ea4';

export const receivedWeather = result => ({
  type: FETCH_WEATHER,
  payload: result.list
});
/**
 * Fetches the Weather data from the API, then trigger the state change.
 */
export function fetchWeather() {
  return dispatch => {
    fetch(
      `http://api.openweathermap.org/data/2.5/find?lat=47.1258945&lon=17.837209&units=metric&cnt=30&APPID=${APPID}`
    )
      .then(res => res.json(), error => console.log('An error occured.', error))
      .then(result => {
        dispatch(receivedWeather(result));
      });
  };
}
