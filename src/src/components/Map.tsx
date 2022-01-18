import * as React from "react";
import { FunctionComponent } from "react";
// import { GoogleMap, useJsApiLoader, MarkerClusterer } from "@react-google-maps/api";
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useGetCenterCoors } from "../hooks/useGetCenterCoords";

// AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc

interface MapProps {}

const Map: FunctionComponent<MapProps> = () => {
    const center = useGetCenterCoors();
    const defaultCenter = { lat: 52.23, lng: 21 };
    const greenIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    const redIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    const locations = [
        { lat: 52.231, lng: 21.002 },
        { lat: 52.23, lng: 21.003 },
        { lat: 52.232, lng: 21.0 },
        { lat: 52.229, lng: 21.001 },
        { lat: 52.23, lng: 21.004 },
        { lat: 52.231, lng: 21.0 },
    ];

    return (
        <LoadScript googleMapsApiKey="AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc">
            <GoogleMap mapContainerClassName="map" center={defaultCenter} zoom={17}>
                <MarkerClusterer>
                    {(clusterer) =>
                        locations.map((location, index) => (
                            <Marker key={index} position={location} clusterer={clusterer} />
                        ))
                    }
                </MarkerClusterer>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
