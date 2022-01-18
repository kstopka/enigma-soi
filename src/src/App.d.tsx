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
}
export interface ChangeStatus {
    type: ActionType.ChangeStatus;
    cars: JSONlike[];
}
export interface ChangeCharge {
    type: ActionType.ChangeCharge;
    cars: JSONlike[];
}

export type CenterActions = SetCenter | SetIsLoaded;
export type ObjectsDataActions = SetCarsData | SetErrorData;
export type MarkersActions = AddMarkers | ChangeCharge | ChangeStatus;

export interface JSONlike {
    [key: string]: unknown;
}

export type InitialStateDataType = {
    imBusy: boolean;
    cars: JSONlike[];
    error: boolean;
    errorMessage: string;
};

export type InitialStateMarkersType = {
    cars: JSONlike[];
    status: boolean;
    charge: boolean;
};

export type MarkersContextType = {
    markersState: InitialStateMarkersType;
    markersDispatch: React.Dispatch<MarkersActions>;
};
