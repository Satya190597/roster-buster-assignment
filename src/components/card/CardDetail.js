import React from "react";
import TaskDetail from "../TaskDetail/TaskDetail";

const CardDetail = (props) => {
  const flightDetail = () => {
    return (
      <>
        <div className="d-flex pt-3">
          <div className="me-auto p-2">
            <i className="fa fa-plane fa-lg"></i>
            <b>
              {props.data.Departure} - {props.data.Destination}
            </b>
          </div>
          <div className="ms-auto p-2">
            <b className="text-danger">
              {props.data.Time_Depart} - {props.data.Time_Arrive}
            </b>
          </div>
          {/* <i class="fa fa-info-circle"></i> */}
          <a
            className="fa fa-info-circle fa-lg"
            data-bs-toggle="collapse"
            href={`#details${props.data.Flightnr}`}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
          </a>
        </div>
        <div className="collapse" id={`details${props.data.Flightnr}`}>
          <div className="card card-body">
            <TaskDetail task={props.data}/>
          </div>
        </div>
      </>
    );
  };
  const standByDetail = () => {
    return (
      <>
        <div>
          <i className="fa fa-file"></i>
          <b>Standby - SBY({props.data.Destination})</b>
        </div>
        <div>
          <b>Match Crew - </b>
          <b>
            {props.data.Time_Depart} - {props.data.Time_Arrive}
          </b>
        </div>
      </>
    );
  };
  const layOverDetail = () => {
    return (
      <>
        <div>
          <i className="fa fa-suitcase"></i>
          <b>Layover - SBY({props.data.Destination})</b>
        </div>
        <div>
          <b>Match Crew - </b>
          <b>
            {props.data.Time_Depart} - {props.data.Time_Arrive}
          </b>
        </div>
      </>
    );
  };
  const dayOff = () => {
    return (
      <>
        <b>Day Off</b>
      </>
    );
  };
  return (
    <>
      {props.data.DutyID === "FLT" && flightDetail()}
      {props.data.DutyID === "SBY" && standByDetail()}
      {props.data.DutyID === "OFD" && layOverDetail()}
      {props.data.DutyID === "DO" && dayOff()}
    </>
  );
};

export default CardDetail;
