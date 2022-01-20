import React, { createContext, useReducer } from "react";
import { initialStateMarkers, reducerMarkers } from "../reducer/reducerMarkers";
import { MarkersContextType } from "../App.d";

const MarkersContextInitial: MarkersContextType = {
    markersState: initialStateMarkers,
    markersDispatch: () => null,
};

export const MarkersContext = createContext(MarkersContextInitial);

export const MarkersProvider = ({ children }: { children: any }) => {
    const [markersState, markersDispatch] = useReducer(reducerMarkers, initialStateMarkers);

    return <MarkersContext.Provider value={{ markersState, markersDispatch }}>{children}</MarkersContext.Provider>;
};
