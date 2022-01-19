import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useGetCenterCoors } from "../hooks/useGetCenterCoords";
import { MarkersContext } from "../context/MarkersContext";
import { Clusterer } from "@react-google-maps/marker-clusterer";

// AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc

// const greenIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
// const redIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

interface MapProps {}

const Map: FunctionComponent<MapProps> = () => {
    const { markersState } = useContext(MarkersContext);
    const center = useGetCenterCoors();
    console.log(center);
    const defaultCenter = { lat: 52.23, lng: 21 };
    const newClusterer = (clusterer: Clusterer) =>
        markersState.filtredCars.map((element, index) => {
            const { location, status } = element;
            const { latitude, longitude } = location;
            const showStats = JSON.stringify(element);
            const newLocation = {
                lat: latitude,
                lng: longitude,
            };

            const icon = () => {
                if (status === "NOT_AVAILABLE") {
                    return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
                }
                return "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
            };

            return (
                <Marker
                    key={index}
                    position={newLocation}
                    clusterer={clusterer}
                    icon={icon()}
                    // TODO: dokonczycz popupa,
                    onClick={() => {
                        alert(showStats);
                    }}
                />
            );
        });

    return (
        <LoadScript googleMapsApiKey="AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc">
            <GoogleMap mapContainerClassName="map" center={defaultCenter} zoom={17}>
                <MarkerClusterer>{newClusterer}</MarkerClusterer>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
