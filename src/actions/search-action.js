export const SEARCH_WEATHER = "SEARCH_WEATHER";

export const updateSearch = result => ({
  type: SEARCH_WEATHER,
  payload: result
});

export function searchWeather(searchValue, weather) {
  return dispatch => {
    let result = weather;
    if (searchValue !== "") {
      result = weather.filter(res => {
        return res.name.toLowerCase().includes(searchValue);
      });
    }
    dispatch(updateSearch(result));
  };
}
