import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

async function getHorsens() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_HISTORY_HORSENS,
        data: await fetch("http://localhost:8080/data/Horsens"),
    });
}

async function getAarhus() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_HISTORY_AARHUS,
        data: await fetch("http://localhost:8080/data/Aarhus"),
    });
}

async function getConpenhagen() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_HISTORY_CONPENHAGEN,
        data: await fetch("http://localhost:8080/data/Copenhagen"),
    });
}

async function filterHistory(dates) {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_HISTORY_DATES,
        time: dates,
    });
}

export { getHorsens, getAarhus, getConpenhagen, filterHistory }