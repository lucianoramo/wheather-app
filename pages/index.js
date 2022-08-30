import React, { useState, useEffect, useCallback } from 'react';
import { getWeatherData } from "../services";
import { Main } from "../components";

export default function Home() {

        const [coords, setcoords] = useState([]);
        const [weatherData, setWeatherData] = useState({});


        useEffect(() => {

                navigator.geolocation.getCurrentPosition(function (position) {
                        
                        getWeatherData(position.coords.latitude, position.coords.longitude).then(data => {
                                setWeatherData(data);
                                console.log(data);
                        }).catch(err => {
                                console.log(err);
                        });

                });


        }, []);

        return (
                <div>
                        {<Main props={weatherData}/>}
                </div>
        )
}

