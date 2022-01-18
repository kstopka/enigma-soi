import { InitialStateMarkersType, MarkersActions, ActionType } from "../App.d";

export const reducerMarkers = (state: InitialStateMarkersType, action: MarkersActions) => {
    switch (action.type) {
        case ActionType.AddMarkers: {
            return {
                ...state,
                cars: action.cars,
            };
        }
        case ActionType.ChangeStatus: {
            return {
                ...state,
            };
        }
        case ActionType.ChangeCharge: {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export const initialStateMarkers: InitialStateMarkersType = {
    cars: [],
    status: false,
    charge: false,
};
