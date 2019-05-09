import React from 'react';
import { connect } from 'react-redux';
import WeatherList from './WeatherList';

let WeatherBox = ({ weather, isLoading }) => {
    let weatherItem = '';
    if (isLoading) {
        weatherItem = <h3 className="loading-indicator">Loading...</h3>
    } else {
        weatherItem = weather.map((weatherListItem, index) => (
            <div key={`${index}`} >
                <WeatherList weatherListItem={weather[index]} />
            </div>
            )
        )
    }
    return (<div>{weatherItem}</div>)
}

const mapStateToProps = (state) => (state);

WeatherBox = connect(mapStateToProps, null)(WeatherBox)

export default WeatherBox;