import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _history = [];

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

    getHistory(){
        return _history;
    }
}

const store = new HistoryStore();

dispatcher.register(async (action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_HISTORY_HORSENS:
            if (action.data.ok) {
                _history = await action.data.json();
                console.log(_history);
            }
            store.emitChange();
            break;

        case actionTypes.GET_HISTORY_AARHUS:
            if (action.data.ok) {
                _history = await action.data.json();
            }
            store.emitChange();
            break;

        case actionTypes.GET_HISTORY_CONPENHAGEN:
            if (action.data.ok) {
                _history = await action.data.json();
            }
            store.emitChange();
            break;
            case actionTypes.GET_HISTORY_CONPENHAGEN:
            if (action.data.ok) {
                _history = await action.data.json();
            }
            store.emitChange();
            break;
        default:
    }
});

export default store;