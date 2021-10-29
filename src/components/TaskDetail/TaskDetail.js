import React from "react";
import { formatDateInWords } from "../../lib/utility";
const TaskDetail = (props) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {props.task.Flightnr && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Flight Nr :</b>&nbsp;{props.task.Flightnr}
          </li>
        )}
        {props.task.Date && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Date :</b>&nbsp;{formatDateInWords(props.task.Date)}
          </li>
        )}
        {props.task["Aircraft Type"] && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Aircraft Type :</b>&nbsp;{props.task["Aircraft Type"]}
          </li>
        )}
        {props.task.Tail && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Tail :</b>&nbsp;{props.task.Tail}
          </li>
        )}
        {props.task.Departure && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Departure :</b>&nbsp;{props.task.Departure}
          </li>
        )}
        {props.task.Destination && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Destination :</b>&nbsp;{props.task.Destination}
          </li>
        )}
        {props.task.Time_Depart && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Time Depart :</b>&nbsp;{props.task.Time_Depart}
          </li>
        )}
        {props.task.Time_Arrive && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Time Arrive :</b>&nbsp;{props.task.Time_Arrive}
          </li>
        )}
        {props.task["Captain"] && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Captain :</b>&nbsp;{props.task["Captain"]}
          </li>
        )}
        {props.task["First Officer"] && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>First Officer :</b>&nbsp;{props.task["First Officer"]}
          </li>
        )}
        {props.task["Flight Attendant"] && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            <b>Flight Attendant :</b>&nbsp;{props.task["Flight Attendant"]}
          </li>
        )}
      </ul>
    </>
  );
};

export default TaskDetail;
