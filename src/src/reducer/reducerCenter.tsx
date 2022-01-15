import { InitialCenter, CenterActions, ActionType } from "../App.d";
export const initialCenter: InitialCenter = {
    center: {
        lat: 0,
        lng: 0,
    },
    isLoaded: false,
};
export const reducerCenter = (state: InitialCenter, action: CenterActions) => {
    switch (action.type) {
        case ActionType.SetCenter: {
            return {
                ...state,
                center: {
                    lat: action.lat,
                    lng: action.lng,
                },
            };
        }
        case ActionType.SetIsLoaded: {
            return {
                ...state,
                isLoaded: true,
            };
        }

        default:
            return state;
    }
};
