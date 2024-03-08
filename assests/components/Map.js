import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.GOOGLE_MAPS_API,  // Replace with your actual API key
            version: "weekly",
        });

        loader.load().then(async () => {
            const google = global.google;

            const map = new google.maps.Map(mapRef.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View ref={mapRef} style={{ flex: 1, width: '100%', height: '100%' }} />
        </View>
    );
}

export default GoogleMap;
