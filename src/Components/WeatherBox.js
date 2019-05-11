import React from 'react';
import { connect } from 'react-redux';

let WeatherBox = ({ weather, isLoading, search }) => {
    let weatherItem = '';

    isLoading ?
        weatherItem = <div className="spinner-border centered" role="status">
            <span class="sr-only">Loading...</span>
        </div> :
        search === "default" ?
            weatherItem = weather.map((weather, index) => (
                <tr key={`${index}`} >
                    <td>{weather.name}</td>
                </tr>
            )
            ) :
            weatherItem = search.map((search, index) => (
                <tr key={`${index}`}>
                    <td>{search.name}</td>
                </tr>
            )
            )

    return (<div>
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>
                {weatherItem}
            </tbody>
        </table>
    </div>)
}
/**
 *@mapStateToProps receive the state of the store, then we can choose what props we want to add to the component. 
 */
const mapStateToProps = (state) => (state);

WeatherBox = connect(mapStateToProps, null)(WeatherBox)

export default WeatherBox;

/* <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
  </table>
 */