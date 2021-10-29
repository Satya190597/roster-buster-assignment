import React from "react";
import TaskDetail from "../../TaskDetail/TaskDetail";
import { generateKeyFromDateAndIndex } from "../../../lib/utility";
const FlightDetail = (props) => {
  return (
    <>
      <div className="d-flex">
        <div className="ms-auto"></div>
      </div>
      <div className="d-flex pt-3">
        <div className="me-auto p-2">
          <i className={props.iconClass}></i>
          <b className="ms-3">{props.shortText}</b>
        </div>
        <div className="ms-auto p-2">
          <b className="text-success">
            {props.timeStamp}
            &nbsp;
            <a
              className="fa fa-info-circle fa-lg"
              data-bs-toggle="collapse"
              href={`#details${generateKeyFromDateAndIndex(
                props.data.Date,
                props.cartIndex
              )}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            ></a>
          </b>
        </div>
      </div>
      <div
        className="collapse"
        id={`details${generateKeyFromDateAndIndex(
          props.data.Date,
          props.cartIndex
        )}`}
      >
        <div className="card card-body">
          <TaskDetail task={props.data} />
        </div>
      </div>
    </>
  );
};

export default FlightDetail;
