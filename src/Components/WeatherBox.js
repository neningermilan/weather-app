import React from 'react';
import { connect } from 'react-redux';

let WeatherBox = ({ weather, isLoading, search }) => {
  let weatherItem = '';
  const displayedItem = search === 'default' ? weather : search;
  isLoading
    ? (weatherItem = (
        <div className="spinner-border centeredspinner" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ))
    : (weatherItem = displayedItem.map((displayedItem, index) => (
        <tr key={`${index}`}>
          <td>{displayedItem.name}</td>
          <td>{displayedItem.main.temp} ℃</td>
          <td>{displayedItem.main.temp_min} ℃</td>
          <td>{displayedItem.main.temp_max} ℃</td>
          <td>{displayedItem.main.humidity} %</td>
        </tr>
      )));

  return (
    <div>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature</th>
            <th scope="col">Min. Temperature</th>
            <th scope="col">Max. Temperature</th>
            <th scope="col">Humidity</th>
          </tr>
        </thead>
        <tbody>{weatherItem}</tbody>
      </table>
    </div>
  );
};
/**
 *@mapStateToProps receive the state of the store, then we can choose what props we want to add to the component.
 */
const mapStateToProps = state => state;

WeatherBox = connect(
  mapStateToProps,
  null
)(WeatherBox);

export default WeatherBox;
