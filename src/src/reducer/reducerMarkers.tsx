import { InitialStateMarkersType, MarkersActions, ActionType } from "../App.d";

export const reducerMarkers = (state: InitialStateMarkersType, action: MarkersActions) => {
    switch (action.type) {
        case ActionType.AddMarkers: {
            return {
                ...state,
                cars: action.cars,
                filtredCars: action.filtredCars,
            };
        }
        case ActionType.AddFiltredMarkers: {
            return {
                ...state,
                filtredCars: action.filtredCars,
            };
        }
        case ActionType.ChangeStatus: {
            return {
                ...state,
                status: !state.status,
            };
        }
        case ActionType.ChangeCharge: {
            return {
                ...state,
                charge: !state.charge,
            };
        }
        case ActionType.SetIsPopups: {
            return {
                ...state,
                isPopups: action.isPopups,
            };
        }
        case ActionType.ChangeIsPopup: {
            state.isPopups[action.index] = action.isPopup;
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
    filtredCars: [],
    isPopups: [],
    status: false,
    charge: false,
};
