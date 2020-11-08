import React, { useState, useEffect } from "react";
import ForecastLists from "../components/ForecastList";
import ForecastStore from "../stores/ForecastStore";
import { getHorsens, getAarhus, getConpenhagen, filterForecast } from "../actions/forecastActions";

import ForecastDateTime from "../components/DateTime";

let place;

function HistoryPage() {
    const [forecast, setForecast] = useState(ForecastStore.getForecast());

    useEffect(() => {
        ForecastStore.addChangeListener(onChange);
        if (ForecastStore.getForecast().length === 0)
        {
            place = "Horsens";
            getHorsens();
        }
        return () => ForecastStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setForecast(ForecastStore.getForecast());
    }

    function Horsens(e) {
        e.preventDefault();
        place = "Horsens";
        getHorsens();
    }

    function Aarhus(e) {
        e.preventDefault();
        place = "Aarhus";
        getAarhus();
    }
    
    function Conpenhagen(e) {
        e.preventDefault();
        place = "Conpenhagen";
        getConpenhagen();
    }

    function HandleDates(dates) {
        filterForecast(dates);
    }

    return (
        <div>
            <button onClick={Horsens}>Horsens</button>
            <button onClick={Aarhus}>Aarhus</button>
            <button onClick={Conpenhagen}>Conpenhagen</button>

            <div>
                <ForecastDateTime HandleDates={HandleDates}/>
            </div>
            <div className="card mt-4">
                <ForecastLists forecast={forecast} place={place} />
            </div>
        </div>
    );
}

export default HistoryPage;