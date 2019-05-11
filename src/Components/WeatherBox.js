import React from 'react';
import { connect } from 'react-redux';

let WeatherBox = ({ weather, isLoading, search }) => {
    let weatherItem = '';
    //
    isLoading ?
        weatherItem = <h3 className="loading-indicator">Loading...</h3> :
        search === "default" ?
            weatherItem = weather.map((weather, index) => (
                <div key={`${index}`} className="col-sm-3">
                    Név: {weather.name}
                </div>
            )
            ) :
            weatherItem = search.map((search, index) => (
                <div key={`${index}`} className="col-sm-3">
                    Név: {search.name}
                </div>
            )
            )

    return (<div>{weatherItem}</div>)
}
/**
 *@mapStateToProps receive the state of the store, then we can choose what props we want to add to the component. 
 */
const mapStateToProps = (state) => (state);

WeatherBox = connect(mapStateToProps, null)(WeatherBox)

export default WeatherBox;