import { getData } from "./getData";

export function getGeo(setQuery) {

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude
            const query = `${lat},${lon}`;

            setQuery(query);
        },
        (error) => {
          console.error(`Ошибка: ${error.code} + ${error.message}`)
        }
      )
    } else {
      alert('Геолокация не поддерживается вашим браузером');
    }
  }