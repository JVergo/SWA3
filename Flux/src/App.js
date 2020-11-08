import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Forecast from "./pages/Forecast";
import NotFound from "./pages/NotFound";
import NavBar from "./components/common/NavBar";

//import ForecastDateTime from "./components/DateTime";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/history" exact component={History} />
                <Route path="/forecast" exact component={Forecast} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default App;
