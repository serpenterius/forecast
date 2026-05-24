import type { WeatherData } from "../types/WeatherData";
import type { HourForecast } from "../types/HourForecast";

export async function getData(query : string): Promise<WeatherData> {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=dec7248bfcca47f69c3174538262104&q=${query}&days=1&aqi=no&alerts=no`)
        if(!response.ok) {
            throw new Error ('Ошибка запроса')
        }
        const data = await response.json();
        const forecast = data.forecast.forecastday[0];
        const weatherData: WeatherData = {
            time_stamp: {
                hours: new Date(data.current.last_updated_epoch * 1000).getHours(),
                minutes: new Date(data.current.last_updated_epoch * 1000).getMinutes()
            },
            temp_c: data.current.temp_c,
            feelslike_c: data.current.feelslike_c,
            location: {
                country: data.location.country,
                city: data.location.name
            },
            forecast: {
                date_epoch: forecast.date_epoch,
                hour: forecast.hour.map(item => {
                    return {
                        temp_c: item.temp_c,
                        feelslike_c: item.feelslike_c,
                        humidity: item.humidity,
                        time_epoch: item.time_epoch,
                        condition: {
                            text: item.condition.text
                        }
                    }
                })
            }
        }
        return weatherData
    } catch (err) {
        console.error('Ошибка:' + err.message);
    }

  }


// hour {
//  temp_c: number,
//  feelslike_c: number,
//  humidity: number,
//  time_epoch: number,
//  condition: {
//      text: string
//  },
//
//}