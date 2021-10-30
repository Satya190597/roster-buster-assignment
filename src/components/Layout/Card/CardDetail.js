import React from "react";
import FlightDetail from "./FlightDetail";
import DayOff from "./DayOffCard";
import { addTimes } from "../../../lib/utility";
import {DUTY_CODE_FLT,DUTY_CODE_SBY,DUTY_CODE_DO,DUTY_CODE_OFD} from "../../../lib/constant";

const CardDetail = (props) => {
  return (
    <>
      {props.data.DutyID === DUTY_CODE_FLT && (
        <FlightDetail
          iconClass={"fa fa-plane fa-lg"}
          shortText={`${props.data.Departure} - ${props.data.Destination}`}
          timeStamp={`${props.data.Time_Depart} - ${props.data.Time_Arrive}`}
          data={props.data}
          cartIndex={props.cartIndex}
        />
      )}
      {props.data.DutyID === DUTY_CODE_SBY && (
        <FlightDetail
          iconClass={"fa fa-suitcase fa-lg"}
          shortText={`Standby - SBY (${props.data.Departure})`}
          timeStamp={`${props.data.Time_Depart} - ${props.data.Time_Arrive}`}
          data={props.data}
          cartIndex={props.cartIndex}
        />
      )}
      {props.data.DutyID === DUTY_CODE_OFD && (
        <FlightDetail
          iconClass={"fa fa-suitcase fa-lg"}
          shortText={`Layover - (${props.data.Departure})`}
          timeStamp={addTimes(props.data.Time_Depart, props.data.Time_Arrive)}
          data={props.data}
          cartIndex={props.cartIndex}
        />
      )}
      {props.data.DutyID === DUTY_CODE_DO && DayOff()}
    </>
  );
};

export default CardDetail;
