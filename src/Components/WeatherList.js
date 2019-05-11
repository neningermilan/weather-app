import React from 'react'

const WeatherContainer = (weather, index) => (
    <div key={`${index}`} className="col-sm-3">
    Név: {weather.name}
    </div>
    )

export default WeatherContainer;
