import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import data from "../db.json";

function getPosts() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_POSTS,
        posts: data["posts"],
    });
}

async function getHorsens() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_HORSENS,
        data: await fetch("http://localhost:8080/forecast/Horsens"),
        forecast: await fetch("http://localhost:8080/forecast/Horsens"),
    });
}

export {getPosts, getHorsens}