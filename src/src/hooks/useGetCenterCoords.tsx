import { useReducer } from "react";
import { reducerCenter, initialCenter } from "../reducer/reducerCenter";
import { ActionType } from "../App.d";

export const useGetCenterCoors = () => {
    const [centerState, dispatchCenter] = useReducer(reducerCenter, initialCenter);
    const { center, isLoaded } = centerState;
    const success = (position: GeolocationPosition) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        dispatchCenter({ type: ActionType.SetCenter, lat, lng });
    };

    if (!isLoaded) {
        navigator.geolocation.getCurrentPosition(success);
        dispatchCenter({ type: ActionType.SetIsLoaded });
    }

    return center;
};
