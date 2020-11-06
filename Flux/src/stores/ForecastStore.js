import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _forecast = [];

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
}

const store = new ForecastStore();

dispatcher.register(async (action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_FORECAST_HORSENS:
            if (action.data.ok) {
                _forecast = await action.data.json();
            }
            store.emitChange();
            break;

        case actionTypes.GET_FORECAST_AARHUS:
            if (action.data.ok) {
                _forecast = await action.data.json();
            }
            store.emitChange();
            break;

        case actionTypes.GET_FORECAST_CONPENHAGEN:
            if (action.data.ok) {
                _forecast = await action.data.json();
                console.log(_forecast.filter(x => action.time.includes(x.time)));
            }
            store.emitChange();
            break;
        default:
    }
});

export default store;