import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

async function PostData() {
    dispatcher.dispatch({
        actionTypes: actionTypes.POST_HISTORY,
        data: await fetch("http://localhost:8080/data/Horsens", {
            method: 'POST',
            body: JSON.stringify(data)
        }),
    });
}

export {getHorsens, getAarhus, getConpenhagen}