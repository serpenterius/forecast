
import './EmptyWeather.css'

export function EmptyWeather() {
    return (
        <div className='weather_container'>
            <p className='weather_warning'>There is no forecast for you yet :C</p>
        </div> 
    )
}