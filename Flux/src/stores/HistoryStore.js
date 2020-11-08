import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _history = [];
let _filteredHistory = [];

class HistoryStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getHistory() {
        return _history;
    }

    getFilteredHistory(){
        return _filteredHistory;
    }
}

const store = new HistoryStore();

dispatcher.register(async (action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_HISTORY_HORSENS:
            if (action.data.ok) {
                _history = await action.data.json();
                _filteredHistory = _history;
            }
            store.emitChange();
            break;

        case actionTypes.GET_HISTORY_AARHUS:
            if (action.data.ok) {
                _history = await action.data.json();
                _filteredHistory = _history;
            }
            store.emitChange();
            break;

        case actionTypes.GET_HISTORY_CONPENHAGEN:
            if (action.data.ok) {
                _history = await action.data.json();
                _filteredHistory = _history;
            }
            store.emitChange();
            break;

        case actionTypes.POST_HISTORY:
            console.log(action.response);
            store.emitChange();
            break;
            
//Amahdya
        case actionTypes.GET_HISTORY_DATES:
            let dates = [];
            action.time.forEach(t => {
                dates.push(t.split("T")[0]);
            });
            _filteredHistory = _history.filter(x => dates.includes(x.time.split("T")[0]));
            store.emitChange();
            break; 
        default:
    }
});

export default store;