import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import { useGeolocation } from "../components/Hooks";

const Main = () => {
    const { location, getGeolocation } = useGeolocation();
    const defaultValues = {
        city: "Loading...",
        temp: "...",
        description: "Loading...",
        wind: "0",
        humidity: "0",
        windDirection: "0",
        feels_like: "0",
        icon: "/sol.png",
    };

    const [weatherData, setWeatherData] = useState(defaultValues);

    const fetchData = async (lat, lon) => {
        const apiKey = "e4f8c0b2e93a83dcd12aed8e623f81ed";
        const apiEndpoint = "http://api.openweathermap.org/data/2.5/weather";
        console.log(Date.now());
        const api_url = `${apiEndpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br `;
        const response = await fetch(api_url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                "Não foi possível carregar os dados: " + data.message
            );
        }

        setWeatherData({
            city: data.name,
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            wind: Math.round(data.wind.speed),
            humidity: Math.round(data.main.humidity),
            windDirection: Math.round(data.wind.deg),
            feels_like: Math.round(data.main.feels_like),
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
    };
    useEffect(() => {
        getGeolocation();
    }, []);
    useEffect(() => {
        console.log(location, "effect");
        console.log(getGeolocation, "geo");

        if (location) {
            fetchData(location[0], location[1]);
        }
    }, [location]);

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 col-span-1 lg:col-start-3">
                    <div className=" bg-slate-50 shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8">
                        <div className="flex justify-between items-center ">
                            <h4 className="text-sm">
                                {moment(Date.now()).format("DD MMM, YYYY")}
                            </h4>

                            <div className="flex items-center">
                                <h4 className="text-sm">
                                    {moment(Date.now()).format("LT")}
                                </h4>
                            </div>
                        </div>
                        <div className="flex-v text-center justify-center items-center px-6 py-4 mb-8">
                            <div>
                                <h1 className="text-4xl text-indigo-400 font-light block">
                                    {weatherData.city}
                                </h1>
                            </div>
                            <div>
                                <h2 className="text-lg text-gray-500 font-light block capitalize">
                                    {weatherData.description}
                                </h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center mb-8">
                            <Image
                                src={weatherData.icon}
                                alt=""
                                width="200px"
                                height="200px"
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="flex-v justify-center items-center text-center ">
                                <div className="text-[12rem] leading-tight font-extralight text-gray-500 tracking-tight">
                                    {weatherData.temp}
                                    <span className="text-2xl text-start">
                                        &#8451;
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="block text-gray-500 mr-2">
                                        Sensação Térmica:{" "}
                                    </span>
                                    <span className="block text-2xl text-gray-500">
                                        {weatherData.feels_like}&#8451;
                                    </span>
                                </div>
                            </div>
                            <div className="flex text-center justify-center items-center p-4">
                                <table className="border-collapse">
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-4">
                                                Umidade:
                                            </td>
                                            <td className="text-2xl text-gray-600 px-4 py-4">
                                                {weatherData.humidity}%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4">
                                                Vento:
                                            </td>
                                            <td className="text-2xl text-gray-600 px-4 py-4">
                                                {weatherData.wind}km/h
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4">
                                                Dir. Vento:
                                            </td>
                                            <td className="text-2xl text-gray-600 px-4 py-4">
                                                {weatherData.windDirection}°
                                                <Image
                                                    src="/arrow.png"
                                                    alt=""
                                                    width="20px"
                                                    height="20px"
                                                    className={`origin-center  rotate-[${weatherData.windDirection}deg]`}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-center items-center text-center my-8 ">
                            <button
                                type="button"
                                onClick={getGeolocation}
                                className="transition duration-500 ease hover:bg-slate-900 inline-block bg-slate-300 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                            >
                                Atualizar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
