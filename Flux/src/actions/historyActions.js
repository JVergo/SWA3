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

export {getHorsens, getAarhus, getConpenhagen}