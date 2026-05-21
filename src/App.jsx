import { useState, useEffect } from 'react'

import { getData } from './features/getData';

import { Inputs } from './components/Inputs/Inputs';
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast';

import './App.css'

function App() {
  const [query, setQuery] = useState(null);
  const [forecast, setForecast] = useState(null);


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
      <Inputs setQuery={setQuery} />
      {forecast === null ? null : <WeatherForecast forecast={forecast} />}
    </div>
  )
}

export default App
