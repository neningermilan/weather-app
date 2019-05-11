import React from 'react';
import Title from './components/Title';
import FilterCities from './components/FilterCities';
import WeatherBox from './components/WeatherBox';
import './App.css';
import { connect } from 'react-redux';
import { fetchWeather } from './actions/fetch-action';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchWeather = fetchWeather();
  }

  componentDidMount() {
    this.props.onFetchWeather();
  }
  render() {
    return (
      <div >
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
 * @mapStateToProps receive the state of the store, then we can choose what props we want to add to the component.
 *  @mapActionsToProps dispatch actions from the components, so we don't need to use the dispatch function in the components. 
 * The called actions automatically dispatch from the store. 
 */
export default connect(null, mapActionsToProps)(App);
