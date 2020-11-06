import React, { useState, useEffect } from "react";
import HistoryList from "../components/HistoryList";
import AddHistory from "../components/AddHistroy";
import DateTime from "../components/DateTime";
import HistoryStore from "../stores/HistoryStore";
import { getHorsens, getAarhus, getConpenhagen } from "../actions/historyActions";

let place;

function HistoryPage() {
    const [history, setHistory] = useState(HistoryStore.getHistory());

    useEffect(() => {
        HistoryStore.addChangeListener(onChange);
        if (HistoryStore.getHistory().length === 0)
        {
            place = "Horsens";
            getHorsens();
        }
        return () => HistoryStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setHistory(HistoryStore.getHistory());
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

    function HandelDates(dates) {
        console.log(dates);
    }

    return (
        <div>
            <button onClick={Horsens}>Horsens</button>
            <button onClick={Aarhus}>Aarhus</button>
            <button onClick={Conpenhagen}>Conpenhagen</button>

            <DateTime HandelDates={HandelDates} />

            <div className="card mt-4">
                <AddHistory place={place} />
                <HistoryList history={history} place={place} />
            </div>
        </div>
    );
}

export default HistoryPage;