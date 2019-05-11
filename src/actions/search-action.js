export const SEARCH_WEATHER = 'SEARCH_WEATHER';

export const updateSearch = result => ({
  type: SEARCH_WEATHER,
  payload: result
});
/**
 * If the searchValue is empty, pass the whole weather array to the search state, 
 * if not filters the values, keep the original weather state, and pass the filtered objects, then triggers the state change.
 * 
 * @param {string} searchValue 
 * @param {Array} weather 
 */
export function searchWeather(searchValue, weather) {
  return dispatch => {
    let result = weather;
    if (searchValue !== '') {
      result = weather.filter(res => {
        return res.name.toLowerCase().includes(searchValue);
      });
    }
    dispatch(updateSearch(result));
  };
}
