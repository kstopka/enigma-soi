import { FunctionComponent } from "react";
import MapPage from "./components/MapPage";
import { MarkersProvider } from "./context/MarkersContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <MarkersProvider>
                <MapPage />
            </MarkersProvider>
        </div>
    );
};

export default App;
