import * as React from "react";
import { FunctionComponent } from "react";
// import { GoogleMap, useJsApiLoader, MarkerClusterer } from "@react-google-maps/api";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useGetCenterCoors } from "../hooks/useGetCenterCoords";
import "../css/map.css";

// AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc

interface MapProps {}

const Map: FunctionComponent<MapProps> = () => {
    const center = useGetCenterCoors();
    return (
        <LoadScript googleMapsApiKey="AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc">
            <GoogleMap mapContainerClassName="map" center={center} zoom={15}>
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
