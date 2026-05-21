import './ForecastDay.css'

import { ForecastDayCard } from '../ForecastDayCard/ForecastDayCard'

export function ForecastDay({forecast}) {
    return (
        <div className="forecast-day">
            {forecast.hour.map((item, index) => <ForecastDayCard key={index} data={item} />)}
        </div>
    )
}