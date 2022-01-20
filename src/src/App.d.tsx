export interface JSONlike {
    [key: string]: unknown;
    location: {
        [key: string]: number;
    };
    status: string;
    batteryLevelPct: number;
    platesNumber?: string;
    color?: string;
    type?: string;
    rangeKm?: number;
    name?: string;
}

export enum ActionType {
    SetCenter,
    SetIsLoaded,
    SetCarsData,
    SetErrorData,
    AddMarkers,
    AddFiltredMarkers,
    ChangeStatus,
    ChangeCharge,
    SetIsPopups,
    ChangeIsPopup,
}

interface SetCenter {
    type: ActionType.SetCenter;
    lat: number;
    lng: number;
}
interface SetIsLoaded {
    type: ActionType.SetIsLoaded;
}
interface SetCarsData {
    type: ActionType.SetCarsData;
    cars: JSONlike[];
}
interface SetErrorData {
    type: ActionType.SetErrorData;
    message: string;
}
interface AddMarkers {
    type: ActionType.AddMarkers;
    cars: JSONlike[];
    filtredCars: JSONlike[];
}
interface AddFiltredMarkers {
    type: ActionType.AddFiltredMarkers;
    filtredCars: JSONlike[];
}
interface ChangeStatus {
    type: ActionType.ChangeStatus;
}
interface ChangeCharge {
    type: ActionType.ChangeCharge;
}
interface SetIsPopups {
    type: ActionType.SetIsPopups;
    isPopups: boolean[];
}
interface ChangeIsPopup {
    type: ActionType.ChangeIsPopup;
    index: number;
    isPopup: boolean;
}

export type CenterActions = SetCenter | SetIsLoaded;
export type ObjectsDataActions = SetCarsData | SetErrorData;
export type MarkersActions = AddMarkers | AddFiltredMarkers | ChangeCharge | ChangeStatus | SetIsPopups | ChangeIsPopup;

export interface InitialCenter {
    center: {
        lat: number;
        lng: number;
    };
    isLoaded: boolean;
}

export type InitialStateDataType = {
    imBusy: boolean;
    cars: JSONlike[];
    error: boolean;
    errorMessage: string;
};

export type InitialStateMarkersType = {
    cars: JSONlike[];
    filtredCars: JSONlike[];
    isPopups: boolean[];
    status: boolean;
    charge: boolean;
};

export type MarkersContextType = {
    markersState: InitialStateMarkersType;
    markersDispatch: React.Dispatch<MarkersActions>;
};
