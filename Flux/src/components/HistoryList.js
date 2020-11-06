import React from "react";

function HistoryLists(props) {
    let key = 0;
    return (
        <div style={{ margin: 20 }}>
            <h2 className="card-header">{props.place}</h2>
            {props.history.map((history) => (
                <div key={key++}>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <table>
                                <thead>
                                    <tr>
                                        <th>time</th>
                                        <th>value</th>
                                        <th>unit</th>
                                        <th>type</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{history.time}</td>
                                        <td>{history.value}</td>
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

export default HistoryLists;
