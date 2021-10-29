import React from "react";
import Card from "../card/Card";
import CardDetail from "../card/CardDetail";
import {formatDateInWords} from '../../lib/utility';

const TodayTask = (props) => {

  

  return (
    <>
      {Object.keys(props.todayTask).length === 0 && (
        <p>No Task Found For Today</p>
      )}
      {Object.keys(props.todayTask).length > 0 &&
        Object.keys(props.todayTask).map((key) => {
          const title = `Today's Task ${formatDateInWords(key)}`
          return (
            <Card key={key} title={title}>
              {props.todayTask[key].map((element, index) => {
                return (
                  <div key={index}>
                    <CardDetail data={element} />
                  </div>
                );
              })}
            </Card>
          );
        })}
    </>
  );
};

export default TodayTask;
