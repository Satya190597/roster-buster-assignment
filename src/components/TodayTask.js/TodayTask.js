import React from "react";
import Card from "../Layout/Card/Card";
import CardDetail from "../Layout/Card/CardDetail";
import { formatDateInWords } from "../../lib/utility";
import NoTaskFound from "../NoTaskFound/NoTaskFound";

const TodayTask = (props) => {
  return (
    <>
      {Object.keys(props.todayTask).length === 0 && (
        <NoTaskFound>No Task Found For Today...</NoTaskFound>
      )}
      {Object.keys(props.todayTask).length > 0 &&
        Object.keys(props.todayTask).map((key) => {
          const title = `Today's Task ${formatDateInWords(key)}`;
          return (
            <Card key={key} title={title}>
              {props.todayTask[key].map((element, index) => {
                return (
                  <div key={index}>
                    <CardDetail data={element} cartIndex={index} />
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
