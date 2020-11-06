import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

async function getHorsens() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_FORECAST_HORSENS,
        data: await fetch("http://localhost:8080/forecast/Horsens"),
    });
}

async function getAarhus() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_FORECAST_AARHUS,
        data: await fetch("http://localhost:8080/forecast/Aarhus"),
    });
}

async function getConpenhagen() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_FORECAST_CONPENHAGEN,
        data: await fetch("http://localhost:8080/forecast/Copenhagen"),
    });
}

export {getHorsens, getAarhus, getConpenhagen}