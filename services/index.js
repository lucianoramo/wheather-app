
const apiKey = "e4f8c0b2e93a83dcd12aed8e623f81ed";
const apiEndpoint = "http://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (lat, long) => {

        const api_url = `${apiEndpoint}?lat=${lat}&lon=${long}&appid=${apiKey}`;

        const response = await fetch(api_url);

        if (!response.ok) {
                throw new Error("Failed to fetch weather data");
        }

        return response.json();
}


