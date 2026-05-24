export type HourForecast = {
    temp_c: number,
    feelslike_c: number,
    humidity: number,
    time_epoch: number,
    condition: {
        text: string
    }
}