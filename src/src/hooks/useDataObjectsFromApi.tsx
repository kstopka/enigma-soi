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
    } catch ({ error, message }) {
        if (typeof message !== "string") return;
        dispatchData({ type: ActionType.SetErrorData, message });
    }
};

const fetchData = async (dispatchData: React.Dispatch<ObjectsDataActions>) => {
    try {
        const url = "https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE";
        const response = await fetch(url);
        const json = await response.json();
        dispatchData({ type: ActionType.SetCarsData, cars: json.objects });
    } catch (error) {
        dispatchData({ type: ActionType.SetErrorData, message: "failed fetch" });
    }
};

export const useDataObjectsFromApi = () => {
    const [stateData, dispatchData] = useReducer(reducerData, initialStateData);
    const { imBusy, cars, errorMessage, error } = stateData;
    useEffect(() => {
        if (!imBusy) {
            //data to test
            // asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
            //     dispatchData,
            // });
            //fetch API
            fetchData(dispatchData);
        }
    }, [imBusy]);
    return { imBusy, cars, errorMessage, error };
};
