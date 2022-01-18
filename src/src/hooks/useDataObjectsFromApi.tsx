import { useReducer, useEffect } from "react";
import mockedData from "../data/fakeAPI";
import { reducerData, initialStateData } from "../reducer/reducerData";
import { ActionType, JSONlike, ObjectsDataActions } from "../App.d";

const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<JSONlike[]> },
    { dispatchData }: { dispatchData: React.Dispatch<ObjectsDataActions> }
) => {
    try {
        const placeholderData = await promiseWrapper();
        dispatchData({ type: ActionType.SetCarsData, cars: placeholderData });
    } catch ({ message, duringError }) {
        if (typeof message !== "string") return;
        dispatchData({ type: ActionType.SetErrorData, message });
    }
};

export const useDataObjectsFromApi = () => {
    const [stateData, dispatchData] = useReducer(reducerData, initialStateData);
    const { imBusy, cars, errorMessage, error } = stateData;
    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
                dispatchData,
            });
        }
    }, [imBusy]);
    return { imBusy, cars, errorMessage, error };
};
