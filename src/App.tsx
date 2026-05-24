import { useState, useEffect } from 'react'

import { getData } from './features/getData';

import { Inputs } from './components/Inputs/Inputs';
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast';
import { EmptyWeather } from './components/EmptyWeather/EmptyWeather';

import type { WeatherData } from './types/WeatherData';

import './App.css'

function App() {
  const [query, setQuery] = useState<null | string>(null);
  const [forecast, setForecast] = useState<null | WeatherData>(null);


  useEffect(() => {
    if(query) {

      (async (query) => {
        const data = await getData(query);
        setForecast(data);
      })(query)


      setQuery(null);
    }
  }, [query]);




  return (
    <div className='App'>
      <div className='logo'>
        <p>Weather App</p>
      </div>

      <Inputs setQuery={setQuery} />
      {forecast === null ? <EmptyWeather/> : <WeatherForecast forecast={forecast} />}
    </div>
  )
}

export default App
