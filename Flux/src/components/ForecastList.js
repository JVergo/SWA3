import React from "react";

function ForecastLists(props) {
    let key = 0;
    return (
        <div style={{ margin: 20 }}>
            <h2 className="card-header">{props.place}</h2>
            {props.forecast.map((history) => (
                <div key={key++}>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <table>
                                <thead>
                                    <tr>
                                        <th>time</th>
                                        <th>from</th>
                                        <th>to</th>
                                        <th>unit</th>
                                        <th>type</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{history.time}</td>
                                        <td>{history.from}</td>
                                        <td>{history.to}</td>
                                        <td>{history.unit}</td>
                                        <td>{history.type}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </blockquote>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ForecastLists;
