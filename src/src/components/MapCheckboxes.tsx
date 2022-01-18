import * as React from "react";
import { FunctionComponent, useState, useEffect } from "react";
import { JSONlike } from "../App.d";

interface MapCheckboxesProps {
    objects: JSONlike[];
}

const MapCheckboxes: FunctionComponent<MapCheckboxesProps> = ({ objects }) => {
    const [status, setStatus] = useState(false);
    const [charge, setCharge] = useState(false);

    useEffect(() => {
        let showCars = [...objects];
        if (charge) {
            showCars = showCars.filter((item) => {
                if (typeof item.batteryLevelPct !== "number") throw new Error("wrong type of batteryLevelPct");
                return item.batteryLevelPct > 40;
            });
        }
        if (status) {
            showCars = showCars.filter((item) => item.status === "AVAILABLE");
        }
    }, [status, charge, objects]);
    return (
        <div className="navi-checkboxes">
            <div>
                <input type="checkbox" name="status" id="" checked={status} onChange={() => setStatus(!status)} />
                <label htmlFor="">AVAILABLE</label>
            </div>
            <div>
                <input type="checkbox" name="charge" id="" checked={charge} onChange={() => setCharge(!charge)} />
                <label htmlFor="">charge</label>
            </div>
        </div>
    );
};

export default MapCheckboxes;
