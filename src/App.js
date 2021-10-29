import "./App.css";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Home from "./components/Home/Home";
import NoTaskFound from "./components/NoTaskFound/NoTaskFound";
import NavBar from "./components/Layout/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventList from "./components/EventList/EventsList";
import { formatDateAsKey } from "./lib/utility";
import { getRosterBusterData } from "./lib/api";
function App() {

  // + State Declaration.
  const [dummyData, setDummyData] = useState({});
  const [todayTask, setTodayTask] = useState({});

  // + Side-effects.
  useEffect(() => {
    getRosterBusterData().then((response) => setDummyData(response));
  }, []);

  useEffect(() => {
    setTodayTaskHandler();
  }, [dummyData]);

  // Set today task - filter RosterBusterData by current date and change the state.
  function setTodayTaskHandler() {
    const todayDate = new Date();
    let key = formatDateAsKey(todayDate);
    // Temp Work.
    key = "07/07/2020";
    if (dummyData.hasOwnProperty(key)) {
      setTodayTask({ [key]: dummyData[key] });
    } else {
      setTodayTask({});
    }
  }
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home todayTask={todayTask} />
        </Route>
        <Route path="/events">
          {Object.keys(dummyData).length > 0 && <EventList data={dummyData} />}
          {Object.keys(dummyData).length <= 0 && <NoTaskFound />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
