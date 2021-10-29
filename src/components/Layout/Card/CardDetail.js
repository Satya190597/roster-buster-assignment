import React from "react";
import FlightDetail from "./FlightDetail";
import DayOff from "./DayOffCard";
import { addTimes } from "../../../lib/utility";

const CardDetail = (props) => {
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
      {props.data.DutyID === "SBY" && (
        <FlightDetail
          iconClass={"fa fa-suitcase fa-lg"}
          shortText={`Standby - SBY (${props.data.Departure})`}
          timeStamp={`${props.data.Time_Depart} - ${props.data.Time_Arrive}`}
          data={props.data}
          cartIndex={props.cartIndex}
        />
      )}
      {props.data.DutyID === "OFD" && (
        <FlightDetail
          iconClass={"fa fa-suitcase fa-lg"}
          shortText={`Layover - (${props.data.Departure})`}
          timeStamp={addTimes(props.data.Time_Depart, props.data.Time_Arrive)}
          data={props.data}
          cartIndex={props.cartIndex}
        />
      )}
      {props.data.DutyID === "DO" && DayOff()}
      {}
    </>
  );
};

export default CardDetail;
