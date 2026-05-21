import './WeatherForecast.css'

import { ForecastDay } from '../ForecastDay/ForecastDay'

export function WeatherForecast({forecast}) {

    return(
        <div className='forecast'>
            <h2>{forecast.location.city}</h2>
            <h3>{forecast.location.country}</h3>
            <h4 className='temperature_c'>Temperature - {forecast.temp_c}C</h4>
            <h4 className='feelslike_c'>Feels like - {forecast.feelslike_c}C</h4>
            <p>Updated by: {`${forecast.time_stamp.hours}:${forecast.time_stamp.minutes}`}</p>

            <ForecastDay forecast={forecast.forecast} />
        </div>
    )
}