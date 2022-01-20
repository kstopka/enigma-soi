import * as React from "react";
import { FunctionComponent, useContext, useReducer, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useGetCenterCoors } from "../hooks/useGetCenterCoords";
import { MarkersContext } from "../context/MarkersContext";
import { Clusterer } from "@react-google-maps/marker-clusterer";
import MapPopup from "./MapPopup";

// AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc

// const greenIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
// const redIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

interface MapProps {}

const reducerMultipleCheckbox = (state: any, action: any) => {
    const { index } = action;
    switch (action.type) {
        case "setCheckbox": {
            return {
                // state: [...state, action.isPopup],
                ...state,
                checked: action.checked,
            };
        }
        case "changeCheckbox": {
            // console.log(state.chec/)
            const { checked } = state;
            checked[index] = true;
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};
const initialStateMultipleCheckbox: { checked: boolean[] } = {
    checked: [],
};

const Map: FunctionComponent<MapProps> = () => {
    const { markersState } = useContext(MarkersContext);
    const [multipleCheckboxes, dispatchMultipleCheckboxes] = useReducer(
        reducerMultipleCheckbox,
        initialStateMultipleCheckbox
    );

    useEffect(() => {
        const length = markersState.filtredCars.length;
        const newArr = new Array(length).fill(false);
        dispatchMultipleCheckboxes({ type: "setCheckbox", checked: newArr });
    }, [markersState]);

    const center = useGetCenterCoors();
    const defaultCenter = { lat: 52.23, lng: 21 };

    const fnClusterer = (clusterer: Clusterer) =>
        markersState.filtredCars.map((element, index) => {
            const { location, status } = element;
            const { latitude, longitude } = location;
            const newLocation = {
                lat: latitude,
                lng: longitude,
            };
            const isPopup = multipleCheckboxes.checked[index];

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
                    onClick={() => dispatchMultipleCheckboxes({ type: "changeCheckbox", index })}
                >
                    <MapPopup display={isPopup} index={index} />
                </Marker>
            );
        });

    return (
        <LoadScript googleMapsApiKey="AIzaSyC2LisWK4kMaMunJzDqsuLnevc4dgRBtfc">
            <GoogleMap mapContainerClassName="map" center={defaultCenter} zoom={17}>
                <MarkerClusterer>{fnClusterer}</MarkerClusterer>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
