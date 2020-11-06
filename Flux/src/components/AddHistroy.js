import React from "react";

let place;
let time;
let value;
let type = "Temperature";

function AddHistory(props) {
    place = props.place


    function updateTime(e){
        time = e.target.value;
    }

    function updateValue(e) {
        value = e.target.value;
    }

    function updateType(e) {
        type = e.target.value;
        console.log(type);
    }


    function Submit() {
        
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