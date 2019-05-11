import { FETCH_WEATHER } from '../actions/fetch-action';
import { SEARCH_WEATHER } from '../actions/search-action';

// define the initial state for the reducer
const initialState = { weather: [] };
/**
 * It will receive all the data use for the app
 * 
 * @param {object} state 
 * @param {object} action 
 */
export function weatherReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_WEATHER:
      return { ...state, weather: payload, isLoading: false };

    case SEARCH_WEATHER:
      return { ...state, search: payload, isLoading: false };

    default:
      return state;
  }
}
