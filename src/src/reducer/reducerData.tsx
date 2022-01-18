import { ObjectsDataActions, ActionType, InitialStateDataType } from "../App.d";

export const reducerData = (state: InitialStateDataType, action: ObjectsDataActions) => {
    switch (action.type) {
        case ActionType.SetCarsData: {
            return {
                ...state,
                imBusy: true,
                cars: action.cars,
            };
        }
        case ActionType.SetErrorData: {
            return {
                ...state,
                error: true,
                errorMessage: action.message,
            };
        }

        default:
            return state;
    }
};

export const initialStateData: InitialStateDataType = {
    imBusy: false,
    cars: [],
    error: false,
    errorMessage: "",
};
