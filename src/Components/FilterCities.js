import React from "react";
import { connect } from "react-redux";
import { searchWeather } from "../actions/search-action";

class FilterCities extends React.Component {
  constructor(props) {
    super(props);
    this.searchWeather = searchWeather();
  }

  updateSearch(event) {
    const { isLoading, weather } = this.props;
    if (!isLoading) {
      this.props.searchWeather(event.target.value.toLowerCase(), weather);
    }
  }

  render() {
    return (
      <input
        type="text"
        className="searchbar"
        onChange={this.updateSearch.bind(this)}
        placeholder="Search in cities..."
      />
    );
  }
}

const mapStateToProps = state => state;
const mapActionsToProps = {
  searchWeather: searchWeather
};
FilterCities = connect(
  mapStateToProps,
  mapActionsToProps
)(FilterCities);

export default FilterCities;
