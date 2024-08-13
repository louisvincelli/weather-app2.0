//import React from 'react';
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Location from "./components/Location";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./api/apiData";
import React, { useState, useEffect } from 'react';
import sun from './images/sun.jpg';
const App = () => {
  const [query, setQuery] = useState({ q: "cupertino" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const data = await getFormattedWeatherData({...query, units}).then((data) => {
      setWeather(data);
      console.log(data);
    });
  };
  //call when app launches or query/units change
  useEffect(() => { 
    getWeather(); 
  }, [query, units]);
  const changeBackground = () => {
    if (!weather) return "from-cyan-500 to-blue-200";
    const threshold = units === 'imperial' ? 80: 50 || 'metric' ? 27: 60
    if (weather.temp <= threshold) return "from-cyan-500 to-blue-200"
    return "from-yellow-400 to-red-700";
  };

//mx-auto mx-w-screen-lg  mt-4 shadow-gray-400 shadow-x1
  return (
    <div className={`mx-auto py-6 px-32 bg-gradient-to-br ${changeBackground()}`}>
      <Header />
      <Inputs setQuery={setQuery} setUnits={setUnits}/>

      {weather && (
        <>
          <Location weather ={weather} />
          <Temperature weather ={weather} setUnits={setUnits}/>
          <Forecast title='daily forecast' data={weather.daily} />
        </>
      )}
    </div>
  );
}
//<Forecast title='' data={weather.hourly} />
export default App