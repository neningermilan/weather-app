import { FETCH_WEATHER } from '../actions/fetch-action';

const initialState = {weather: []}

export function weatherReducer(state = initialState, { type, payload }) {
  switch (type) {

    case FETCH_WEATHER:
      return { ...state, weather: payload, isLoading: false }

    default:
      return state
  }
}
