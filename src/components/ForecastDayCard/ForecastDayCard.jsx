import './ForecastDayCard.css'

export function ForecastDayCard({data}) {



    return (
        <div className="forecast-day-card">
            <p className='card-time'>{`${(new Date(data.time_epoch * 1000).getHours())}:00`}</p>
            <p className='card-temp'>{data.temp_c.toFixed(0) + '°C'}</p>
            <p>{`Humidity: ${data.humidity}%`}</p>
            <p className='card-condition'>{data.condition.text}</p>
        </div>
    )
}