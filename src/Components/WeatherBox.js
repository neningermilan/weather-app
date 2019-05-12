import React from 'react';
import { connect } from 'react-redux';
/**
 * Container functional component for the weather data. 
 * @returns JSX elements depending on the states. Either a loading spinner or a table with the data.
 * @param props 
 */
let WeatherBox = ({ weather, isLoading, search }) => {
  let weatherItem;
  //Displayed item depends on, if we have a filtered state, or the original weather state without the filter. 
  const displayedItem = search === 'default' ? weather : search;
  //As we can't use map function on an undefined item, the !isLoading check is a must. 
  if (!isLoading) {
    weatherItem = displayedItem.map((displayedItem, index) => (
      <tr key={`${index}`}>
        <td>{displayedItem.name}</td>
        <td>{displayedItem.main.temp} ℃</td>
        <td>{displayedItem.main.temp_min} ℃</td>
        <td>{displayedItem.main.temp_max} ℃</td>
        <td>{displayedItem.main.humidity} %</td>
      </tr>
    ));
  }

  return isLoading ? (
    <div className="spinner-border centeredspinner" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
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
