import React from "react";
import { formatDateInWords } from "../../lib/utility";
const TaskDetail = (props) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {props.task.Flightnr && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Flight Nr {props.task.Flightnr}
          </li>
        )}
        {props.task.Date && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Date {formatDateInWords(props.task.Date)}
          </li>
        )}
        {props.task["Aircraft Type"] && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Aircraft Type {props.task["Aircraft Type"]}
          </li>
        )}
        {props.task.Tail && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Tail {props.task.Tail}
          </li>
        )}
        {props.task.Departure && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Departure {props.task.Departure}
          </li>
        )}
        {props.task.Destination && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Destination {props.task.Destination}
          </li>
        )}
        {props.task.Time_Depart && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Time Depart {props.task.Time_Depart}
          </li>
        )}
        {props.task.Time_Arrive && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Time Arrive {props.task.Time_Arrive}
          </li>
        )}
        {props.task["Captain"] && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Captain {props.task["Captain"]}
          </li>
        )}
        {props.task["First Officer"] && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            First Officer {props.task["First Officer"]}
          </li>
        )}
        {props.task["Flight Attendant"] && (
          <li className="list-group-item d-flex justify-content-start align-items-center">
            Flight Attendant {props.task["Flight Attendant"]}
          </li>
        )}
      </ul>
    </>
  );
};

export default TaskDetail;
