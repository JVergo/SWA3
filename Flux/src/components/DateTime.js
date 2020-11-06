import React from "react";

function ForecastDateTime(){
    let fromDate;
    let toDate;

    function onFromDateChange(e){
        fromDate = e.value;
        console.log(e);
    }

    function onToDateChange(e){
        toDate = e.value;
    }

    function getDates(startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(new Date (currentDate));
            currentDate = currentDate.addDays(1);
        }
        return dateArray;
    }

    function onDateSubmit(e){
        let dates = getDates(fromDate, toDate);
        console.log(fromDate);
        console.log(dates);
    }

    return(
        <div>
            <form>
                <label>From Date:</label>
                    <input type = "date" value = {fromDate} onChange = {onFromDateChange}/>
                <label>To Date:</label>
                    <input type = "date" value = {toDate} onChange =  {onToDateChange}/>
                <input type = "button" value = "Submit" onClick = {onDateSubmit} />
            </form>
        </div>
    );
}

export default ForecastDateTime;