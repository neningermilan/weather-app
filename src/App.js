import React from 'react';
import Title from './Components/Title';
import FilterCities from './Components/Filter';
import WeatherBox from './Components/WeatherBox';
import './App.css';

function App() {
  return (
    <div>
      <Title />
      <FilterCities />
      <WeatherBox />
    </div>

  );
}

export default App;
