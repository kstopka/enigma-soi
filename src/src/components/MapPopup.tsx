import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { MarkersContext } from "../context/MarkersContext";
import { ActionType } from "../App.d";

interface MapPopupProps {
    index: number;
}

const MapPopup: FunctionComponent<MapPopupProps> = ({ index }) => {
    const { markersState, markersDispatch } = useContext(MarkersContext);
    const display = markersState.isPopups[index];
    const car = markersState.filtredCars[index];
    const { color, type, platesNumber, rangeKm, batteryLevelPct, name, status } = car;
    const handleExitOnClick = () => {
        markersDispatch({ type: ActionType.ChangeIsPopup, index, isPopup: false });
    };
    return (
        <div className="map-popup" style={display ? { display: "block" } : { display: "none" }}>
            <div className="map-popup-wrapper">
                <div className="exit" onClick={handleExitOnClick}>
                    X
                </div>
                <div className="map-description">
                    <p>Name: {name}</p>
                    <p>Type: {type}</p>
                    <p>Plates Number: {platesNumber}</p>
                    <p>Color: {color}</p>
                    <p>Range Km: {rangeKm}</p>
                    <p>Battery level Percent: {batteryLevelPct}</p>
                    <p>Status: {status}</p>
                </div>
            </div>
        </div>
    );
};

export default MapPopup;
