export interface Center {
    lat: number;
    lng: number;
}

export interface InitialCenter {
    center: Center;
    isLoaded: boolean;
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
}

export interface SetCenter {
    type: ActionType.SetCenter;
    lat: number;
    lng: number;
}
export interface SetIsLoaded {
    type: ActionType.SetIsLoaded;
}
export interface SetCarsData {
    type: ActionType.SetCarsData;
    cars: JSONlike[];
}
export interface SetErrorData {
    type: ActionType.SetErrorData;
    message: string;
}
export interface AddMarkers {
    type: ActionType.AddMarkers;
    cars: JSONlike[];
    filtredCars: JSONlike[];
}
export interface AddFiltredMarkers {
    type: ActionType.AddFiltredMarkers;
    filtredCars: JSONlike[];
}
export interface ChangeStatus {
    type: ActionType.ChangeStatus;
}
export interface ChangeCharge {
    type: ActionType.ChangeCharge;
}

export type CenterActions = SetCenter | SetIsLoaded;
export type ObjectsDataActions = SetCarsData | SetErrorData;
export type MarkersActions = AddMarkers | AddFiltredMarkers | ChangeCharge | ChangeStatus;

export interface JSONlike {
    [key: string]: unknown;
    location: {
        [key: string]: number;
    };
    status: string;
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
    status: boolean;
    charge: boolean;
};

export type MarkersContextType = {
    markersState: InitialStateMarkersType;
    markersDispatch: React.Dispatch<MarkersActions>;
};
