import React from "react";
import { PostData } from "../actions/postActions";

let place;
let time;
let value;
let type = "Temperature";
let unit = "C";

function AddHistory(props) {
    place = props.place


    function updateTime(e) {
        time = e.target.value;
    }

    function updateValue(e) {
        value = e.target.value;
    }

    function updateType(e) {
        type = e.target.value;

        switch (type) {
            case "Temperature":
                unit = "C";
                break;
            case "Precipitation":
                unit = "MM";
                break;
            case "Wind speed":
                unit = "m/s";
                break;
            case "Cloud coverage":
                unit = "%";
                break;
            default:
                break;
        }
        console.log(unit);
    }


    function Submit() {
        let body = {
            place,
            time,
            type,
            unit,
            value
        }
        PostData(body);
        props.UpdateData();
    }

    return (
        <div style={{ margin: 20 }}>
            <form>
                <input type="datetime-local" onChange={updateTime}></input>
                <input type="number" placeholder="value" onInput={updateValue}></input>
                <select onChange={updateType}>
                    <option>Temperature</option>
                    <option>Precipitation</option>
                    <option>Wind speed</option>
                    <option>Cloud coverage</option>
                </select>

                <input type="button" onClick={Submit} value="Add history" />
            </form>
        </div>
    );
}

export default AddHistory;