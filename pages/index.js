import React, { useState, useEffect, useCallback } from 'react';
import { getWeatherData } from "../services";
import { Main } from "../components";


export default function Home() {

 /*        const [coords, setcoords] = useState({ "latitude": -20.2663, "longitude": -40.3165 });
        const [weatherData, setWeatherData] = useState({});

        const getCoords = useCallback(() => {
                navigator.geolocation.getCurrentPosition(function (position) {
                        return setcoords(position.coords);
                });
                console.log(coords);
        }, []);

        useEffect(() => {
                getCoords();
                getWeatherData(coords.latitude, coords.longitude).then(data => {
                        setWeatherData(data);
                }).catch(err => {
                        console.log(err);
                });
        }, [getCoords]); */


        return (
                <div>
                        <Main />
                        
                </div>
        )
}

