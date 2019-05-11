import React from 'react';
import Title from './components/Title';
import FilterCities from './components/FilterCities';
import WeatherBox from './components/WeatherBox';
import { connect } from 'react-redux';
import { fetchWeather } from './actions/fetch-action';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchWeather = fetchWeather();
  }

  componentDidMount() {
    /**
     * After the component is mounted, calls the API for data.
     */
    this.props.onFetchWeather();
  }
  render() {
    return (
      <div class="container">
        <Title />
        <FilterCities />
        <WeatherBox />
      </div>
    );
  }
}

const mapActionsToProps = {
  onFetchWeather: fetchWeather
};

/**
 *  @mapActionsToProps dispatch actions from the components, so we don't need to use the dispatch function in the components.
 * The called actions automatically dispatch from the store.
 */
export default connect(
  null,
  mapActionsToProps
)(App);
