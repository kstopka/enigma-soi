import * as React from "react";
import { FunctionComponent, useEffect, useContext } from "react";
import { useDataObjectsFromApi } from "../hooks/useDataObjectsFromApi";
import Map from "./Map";
import MapCheckboxes from "./MapCheckboxes";
import "../css/mapPage.css";
import { MarkersContext } from "../context/MarkersContext";
import { ActionType } from "../App.d";

interface MapPageProps {}

const MapPage: FunctionComponent<MapPageProps> = () => {
    const { imBusy, cars, errorMessage, error } = useDataObjectsFromApi();
    const { markersDispatch } = useContext(MarkersContext);

    useEffect(() => {
        markersDispatch({ type: ActionType.AddMarkers, cars, filtredCars: cars });
    }, [cars]);

    if (!imBusy) {
        // TODO: Loader component
        return <div className="loader">Loader...</div>;
    }

    if (error) {
        // TODO: ErrorPage component
        return <div className="error-page">ErrorPage... {errorMessage}</div>;
    }

    return (
        <div className="map-page">
            <MapCheckboxes objects={cars} />
            <Map />
        </div>
    );
};

export default MapPage;
