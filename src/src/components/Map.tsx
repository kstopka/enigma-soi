import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { Clusterer } from "@react-google-maps/marker-clusterer";
import { useGetCenterCoors } from "../hooks/useGetCenterCoords";
import { MarkersContext } from "../context/MarkersContext";
import MapPopup from "./MapPopup";
import { ActionType } from "../App.d";

// AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc

// const greenIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
// const redIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

interface MapProps {}

const Map: FunctionComponent<MapProps> = () => {
    const { markersState, markersDispatch } = useContext(MarkersContext);
    const { filtredCars } = markersState;

    const center = useGetCenterCoors();

    useEffect(() => {
        const length = filtredCars.length;
        const isPopups = new Array(length).fill(false);
        markersDispatch({ type: ActionType.SetIsPopups, isPopups });
    }, [filtredCars, markersDispatch]);

    const fnClusterer = (clusterer: Clusterer) =>
        filtredCars.map((element, index) => {
            const { location, status } = element;
            const { latitude, longitude } = location;
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
                    onClick={() => markersDispatch({ type: ActionType.ChangeIsPopup, index, isPopup: true })}
                >
                    <MapPopup index={index} />
                </Marker>
            );
        });

    return (
        <LoadScript googleMapsApiKey="AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc">
            <GoogleMap mapContainerClassName="map" center={center} zoom={17}>
                <MarkerClusterer>{fnClusterer}</MarkerClusterer>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
