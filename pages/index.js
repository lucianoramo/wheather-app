import React, { useState, useEffect } from "react";
import Main  from "../components/Main";


export default function Home() {

        const [coords, setCoords] = useState([])

        useEffect(() => {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCoords([
                        position.coords.latitude,
                        position.coords.longitude,
                    ]);
                });
            }
        }, []);


        return (
                <div>
                        <Main props={coords}/>
                </div>
        )
}

