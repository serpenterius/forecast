import type { HourForecast } from "./HourForecast"

export type WeatherData = {
    time_stamp: {
        hours: number,
        minutes: number
    },
    temp_c: number,
    feelslike_c: number,
    location: {
        country: string,
        city: string
    },
    forecast: {
        date_epoch: number,
        hour: Array<HourForecast>
    }
}