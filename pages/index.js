import React from "react";
import Main from "../components/Main";


export default function Home() {

        const loadingWeatherData = {
                city: "Loading...",
                temp: "...",
                description: "Loading...",
                wind: "0",
                humidity: "0",
                windDirection: "0",
                feels_like: "0",
                icon: "",
            };

        return (
                <div>
                        <Main props={loadingWeatherData}/>
                </div>
        )
}

