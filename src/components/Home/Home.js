import React from "react";
import TodayTask from "../TodayTask.js/TodayTask";

const Home = (props) => {
  return (
    <>
      <TodayTask todayTask={props.todayTask} />
      <div className="col-sm-6 center-container">
        <p className="text-secondary">
          Note: As there were no task for current date on json response so I
          added a default date for development purpose.
        </p>
      </div>
    </>
  );
};

export default Home;
