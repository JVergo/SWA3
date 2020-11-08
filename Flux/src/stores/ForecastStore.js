import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _forecast = [];
let _filteredForecast = [];

class ForecastStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getForecast(){
        return _forecast;
    }
    getFilteredForecast(){
        return _filteredForecast;
    }
}

const store = new ForecastStore();

dispatcher.register(async (action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_FORECAST_HORSENS:
            if (action.data.ok) {
                _forecast = await action.data.json();
                _filteredForecast = _forecast;
            }
            store.emitChange();
            break;

        case actionTypes.GET_FORECAST_AARHUS:
            if (action.data.ok) {
                _forecast = await action.data.json();
                _filteredForecast = _forecast;
            }
            store.emitChange();
            break;

        case actionTypes.GET_FORECAST_CONPENHAGEN:
            if (action.data.ok) {
                _forecast = await action.data.json();
                _filteredForecast = _forecast;
            }
            store.emitChange();
            break;

//Amahdya
        case actionTypes.GET_FORECAST_DATES:
            let dates = [];
            action.time.forEach(t => {
                dates.push(t.split("T")[0]);
            });
            _filteredForecast = _forecast.filter(x => dates.includes(x.time.split("T")[0]));
            store.emitChange();
            break; 
        default:
    }
});

export default store;