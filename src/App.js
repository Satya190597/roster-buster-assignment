import "./App.css";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./components/card/Card";
import CardDetail from "./components/card/CardDetail";
import Home from "./components/Home/Home";

import NavBar from "./components/Layout/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import EventList from "./components/EventList/EventsList";

function App() {
  const [dummyData, setDummyData] = useState({});
  const [todayTask, setTodayTask] = useState({});

  const HomeContainer = () => <Home todayTask={todayTask} />;
  

  async function getData() {
    const response = await fetch("http://localhost:3040/dummy-records");
    const data = await response.json();
    console.log(data);

    const reducer = (totalValue, currentValue) => {
      let key = currentValue["Date"].toString();
      if (!totalValue[key]) {
        totalValue[key] = [];
      }
      totalValue[key].push(currentValue);
      return totalValue;
    };

    const formattedData = data.reduce(reducer, {});
    console.log(formattedData);
    console.log(typeof data);

    setDummyData(formattedData);
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setTodayTaskHandler();
  }, [dummyData]);

  function setTodayTaskHandler() {
    const todayDate = new Date();
    let key = `${("0" + todayDate.getDate()).slice(-2)}/${(
      "0" +
      (todayDate.getMonth() + 1)
    ).slice(-2)}/${todayDate.getFullYear()}`;

    // Temp Work.
    key = "07/07/2020";

    if (dummyData.hasOwnProperty(key)) {
      setTodayTask({ [key]: dummyData[key] });
    } else {
      setTodayTask({});
    }
  }

  // const filterMyData = () => {
  //   const inputDate = new Date(selectedDate);
  //   const key = `${("0" + inputDate.getDate()).slice(-2)}/${(
  //     "0" +
  //     (inputDate.getMonth() + 1)
  //   ).slice(-2)}/${inputDate.getFullYear()}`;
  //   console.log(key);
  //   if (Object.keys(dummyData).length > 0) {
  //     let filteredData = { [key]: dummyData[key] };
  //     setDummyData(filteredData);
  //   }
  // };

  // useEffect(() => {
  //   filterMyData();
  // }, [selectedDate]);

  // const datePickerHandler = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/events">
          {Object.keys(dummyData).length > 0 && <EventList data={dummyData}/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
