import React from 'react';
import {formatDateInWords} from '../../lib/utility';
const TaskDetail = (props) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-start align-items-center">Flight Nr {props.task.Flightnr}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Date {formatDateInWords(props.task.Date)}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Aircraft Type {props.task["Aircraft Type"]}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Tail {props.task.Tail}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Departure {props.task.Departure}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Destination {props.task.Destination}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Time Depart {props.task.Time_Depart}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Time Arrive {props.task.Time_Arrive}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Captain {props.task["Captain"]}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">First Officer {props.task["First Officer"]}</li>
                <li className="list-group-item d-flex justify-content-start align-items-center">Flight Attendant {props.task["Flight Attendant"]}</li>
            </ul>
        </>
    )
}

export default TaskDetail