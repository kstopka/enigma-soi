import * as React from "react";
import { FunctionComponent } from "react";

interface MapPopupProps {
    display: boolean;
    index: number;
}

const MapPopup: FunctionComponent<MapPopupProps> = ({ display, index }) => {
    return <div className="map-popup" style={display ? { display: "block" } : { display: "none" }}></div>;
};

export default MapPopup;
