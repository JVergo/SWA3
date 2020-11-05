import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _posts = [];
let _data = [];
let _forecast = [];

class PostStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getPosts() {
        return _posts;
    }

    getData(){
        return _data;
    }

    getForecast() {
        return _forecast;
    }
}

const store = new PostStore();

dispatcher.register(async (action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_POSTS:
            _posts = action.posts;
            store.emitChange();
            break;
        case actionTypes.GET_HORSENS:
            if (action.data.ok && action.forecast.ok) {
                _data = await action.data.json();
                _forecast = await action.forecast.json();
                console.log(_forecast);
            }
            store.emitChange();
            break;
        default:
    }
});

export default store;
