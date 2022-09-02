import React from "react";

export const useGeolocation = () => {
    const [location, setLocation] = React.useState(null);

    const getGeolocation = () => {
        console.log("hook geolocation");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation([
                    position.coords.latitude,
                    position.coords.longitude,
                ]);
            });
        }
    };
    return { getGeolocation, location };
};

export const useFetchData = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const getFetchData = async (location) => {
        setLoading(true);
        
        const apiKey = "e4f8c0b2e93a83dcd12aed8e623f81ed";
        const apiEndpoint = "http://api.openweathermap.org/data/2.5/weather";
        
        const api_url = `${apiEndpoint}?lat=${location[0]}&lon=${location[1]}&appid=${apiKey}&units=metric&lang=pt_br `;

        try {
            const response = await fetch(api_url);
            const data = await response.json();
            console.log("getFetchData => data", data)
            
            if (!response.ok) {
                throw new Error(
                    "Não foi possível carregar os dados: " + data.message
                );
            }
            setData({
                city: data.name,
                temp: Math.round(data.main.temp),
                description: data.weather[0].description,
                wind: Math.round(data.wind.speed),
                humidity: Math.round(data.main.humidity),
                windDirection: Math.round(data.wind.deg),
                feels_like: Math.round(data.main.feels_like),
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            });
        } catch (error) {
            setError(error.message);
            
        } finally {
            setLoading(false);
        }
    };
       
    return { data, loading, error, getFetchData };
};
