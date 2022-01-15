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
}

export interface SetCenter {
    type: ActionType.SetCenter;
    lat: number;
    lng: number;
}
export interface SetIsLoaded {
    type: ActionType.SetIsLoaded;
}

export type CenterActions = SetCenter | SetIsLoaded;
