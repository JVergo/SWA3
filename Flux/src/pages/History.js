import React, { useState, useEffect } from "react";
import HistoryList from "../components/HistoryList";
import AddHistory from "../components/AddHistroy";
import DateTime from "../components/DateTime";
import HistoryStore from "../stores/HistoryStore";
import { getHorsens, getAarhus, getConpenhagen, filterHistory } from "../actions/historyActions";

let place;

function HistoryPage() {
    const [history, setHistory] = useState(HistoryStore.getFilteredHistory());

    useEffect(() => {
        HistoryStore.addChangeListener(onChange);
        if (HistoryStore.getFilteredHistory().length === 0) {
            place = "Horsens";
            getHorsens();
        }
        return () => HistoryStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setHistory(HistoryStore.getFilteredHistory());
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
        filterHistory(dates);
    }

    function UpdateData() {
        switch (place) {
            case "Horsens":
                getHorsens();
                break;
            case "Aarhus":
                getAarhus();
                break;
            case "Conpenhagen":
                getConpenhagen();
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <div>
                <button onClick={Horsens}>Horsens</button>
                <button onClick={Aarhus}>Aarhus</button>
                <button onClick={Conpenhagen}>Conpenhagen</button>
            </div>
            <div>
                <DateTime HandleDates={HandleDates} isHistroy={true} />
            </div>
            <div className="card mt-4">
                <AddHistory place={place} UpdateData={UpdateData} />
                <HistoryList history={history} place={place} />
            </div>
        </div>
    );
}

export default HistoryPage;