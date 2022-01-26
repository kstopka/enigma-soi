import * as React from "react";
import { FunctionComponent, useEffect, useContext } from "react";
import { MarkersContext } from "../context/MarkersContext";
import { ActionType, JSONlike } from "../App.d";

interface MapCheckboxesProps {
    objects: JSONlike[];
}

const MapCheckboxes: FunctionComponent<MapCheckboxesProps> = ({ objects }) => {
    const { markersState, markersDispatch } = useContext(MarkersContext);
    const { status, charge, cars } = markersState;

    useEffect(() => {
        let activeCars = [...cars];
        if (status) {
            activeCars = activeCars.filter((item) => item.status === "AVAILABLE");
        }
        if (charge) {
            activeCars = activeCars.filter((item) => item.batteryLevelPct > 40);
        }
        markersDispatch({ type: ActionType.AddFiltredMarkers, filtredCars: activeCars });
    }, [status, charge, cars, markersDispatch]);
    return (
        <div className="navi-checkboxes">
            <div>
                <input
                    type="checkbox"
                    name="status"
                    id=""
                    checked={status}
                    onChange={() => markersDispatch({ type: ActionType.ChangeStatus })}
                />
                <label htmlFor="">AVAILABLE</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="charge"
                    id=""
                    checked={charge}
                    onChange={() => markersDispatch({ type: ActionType.ChangeCharge })}
                />
                <label htmlFor="">CHARGE</label>
            </div>
        </div>
    );
};

export default MapCheckboxes;
