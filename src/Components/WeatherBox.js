import React from 'react';
import { connect } from 'react-redux';

let WeatherBox = ({ weather, isLoading, search }) => {
    let weatherItem = '';
    isLoading ?
        weatherItem = <div className="spinner-border centeredspinner" role="status">
            <span class="sr-only">Loading...</span>
        </div> :
        search === "default" ?
            weatherItem = weather.map((weather, index) => (
                <tr key={`${index}`} >
                    <td>{weather.name}</td>
                    <td>{weather.main.temp} ℃</td>
                    <td>{weather.main.temp_min} ℃</td>
                    <td>{weather.main.temp_max} ℃</td>
                    <td>{weather.main.humidity} %</td>
                </tr>
            )
            ) :
            weatherItem = search.map((search, index) => (
                <tr key={`${index}`}>
                    <td>{search.name}</td>
                    <td>{search.main.temp} ℃</td>
                    <td>{search.main.temp_min} ℃</td>
                    <td>{search.main.temp_max} ℃</td>
                    <td>{search.main.humidity} %</td>
                </tr>
            )
            )

    return (<div>
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
