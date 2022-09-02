import React from "react";

export const useGeolocation = () => {
        
    const [location, setLocation] = React.useState(null);

    const getGeolocation = () => {
        console.log("hook")
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
