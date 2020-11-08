import React from "react";

let fromDate;
let toDate;

function ForecastDateTime(props) {
    function onFromDateChange(e) {
        fromDate = e.target.value;
    }

    function onToDateChange(e) {
        toDate = e.target.value;
    }

    function getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(new Date(currentDate).toISOString());
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dateArray;
    }

    function onDateSubmit(e) {
        let dates = getDates(new Date(fromDate), new Date(toDate));
        props.HandleDates(dates);
    }

    return (
        <div>
            <form>
                <label>From Date:</label>
                <input type="date" onChange={onFromDateChange} />
                <label>To Date:</label>
                <input type="date" onChange={onToDateChange} />
                <input type="button" value="Submit" onClick={onDateSubmit} />
            </form>
        </div>
    );
}

export default ForecastDateTime;