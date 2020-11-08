import React from "react";

function ForecastDateTime(props) {
    let fromDate;
    let toDate;

    function onFromDateChange(e) {
        fromDate = e.target.value;
    }

    function onToDateChange(e) {
        toDate = e.target.value;
    }

    function getDates(startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = startDate;
        if (props.isHistroy) {
            currentDate = stopDate;
            while (currentDate <= startDate) {
                dateArray.push(new Date(currentDate).toISOString());
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }
        else {
            while (currentDate <= stopDate) {
                dateArray.push(new Date(currentDate).toISOString());
                currentDate.setDate(currentDate.getDate() + 1);
            }
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
                <input type="date" value={fromDate} onChange={onFromDateChange} />
                <label>To Date:</label>
                <input type="date" value={toDate} onChange={onToDateChange} />
                <input type="button" value="Submit" onClick={onDateSubmit} />
            </form>
        </div>
    );
}

export default ForecastDateTime;