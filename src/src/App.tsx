import { FunctionComponent } from "react";
import Map from "./components/Map";
import "./css/app.css";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <Map />
        </div>
    );
};

export default App;
