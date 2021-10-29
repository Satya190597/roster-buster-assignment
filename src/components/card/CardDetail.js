import React from "react";
import TaskDetail from "../TaskDetail/TaskDetail";
import { generateKeyFromDateAndIndex,addTimes } from "../../lib/utility";
//fa fa-plane fa-lg
//{props.data.Time_Depart} - {props.data.Time_Arrive}
const CardDetail = (props) => {
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
            <b className="text-danger">
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
          {/* <i class="fa fa-info-circle"></i> */}
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
        <div className="d-flex pt-3">
          <div className="me-auto p-2">
            <i className="fa fa-suitcase fa-lg"></i>
            <b>Layover - SBY({props.data.Destination})</b>
            <small>Match Crew</small>
          </div>
          <div>
            <b>
              {props.data.Time_Depart} - {props.data.Time_Arrive}
            </b>
          </div>
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
      {props.data.DutyID === "FLT" && (
        <FlightDetail
          iconClass={"fa fa-plane fa-lg"}
          shortText={`${props.data.Departure} - ${props.data.Destination}`}
          timeStamp={`${props.data.Time_Depart} - ${props.data.Time_Arrive}`}
          data={props.data}
          cartIndex={props.cartIndex}
        />
      )}
      {props.data.DutyID === "SBY" && <FlightDetail
          iconClass={"fa fa-suitcase fa-lg"}
          shortText={`Standby - SBY (${props.data.Departure})`}
          timeStamp={`${props.data.Time_Depart} - ${props.data.Time_Arrive}`}
          data={props.data}
          cartIndex={props.cartIndex}
        />}
      {props.data.DutyID === "OFD" && <FlightDetail
          iconClass={"fa fa-suitcase fa-lg"}
          shortText={`Layover - (${props.data.Departure})`}
          timeStamp={addTimes(props.data.Time_Depart,props.data.Time_Arrive)}
          data={props.data}
          cartIndex={props.cartIndex}
        />}
      {props.data.DutyID === "DO" && dayOff()}
      {
        
      }
    </>
  );
};

export default CardDetail;
