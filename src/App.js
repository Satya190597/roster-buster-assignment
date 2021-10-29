import "./App.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./components/card/Card";
import CardDetail from "./components/card/CardDetail";
import TodayTask from "./components/TodayTask.js/TodayTask";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [dummyData, setDummyData] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todayTask, setTodayTask] = useState({});

  const HomeContainer = () => <Home todayTask={todayTask} />
  const Events = function() {
    return (
      <div className="App">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => datePickerHandler(date)}
        />
        <button onClick={filterMyData} className="btn btn-primary">
          Click
        </button>
        <TodayTask todayTask={todayTask} />
        {Object.keys(dummyData).map((key) => {
          return (
            <Card key={key} title={key}>
              {dummyData[key].map((element, index) => {
                return (
                  <div key={index}>
                    <p>{element.DutyCode}</p>
                    <CardDetail data={element} />
                  </div>
                );
              })}
            </Card>
          );
        })}
      </div>
    )
  }

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
    key = "07/07/2020"

    if (dummyData.hasOwnProperty(key)) {
      setTodayTask({[key]:dummyData[key]});
    } else {
      setTodayTask({});
    }
  }

  const filterMyData = () => {
    const inputDate = new Date(selectedDate);
    const key = `${("0" + inputDate.getDate()).slice(-2)}/${(
      "0" +
      (inputDate.getMonth() + 1)
    ).slice(-2)}/${inputDate.getFullYear()}`;
    console.log(key);
    if (Object.keys(dummyData).length > 0) {
      let filteredData = { [key]: dummyData[key] };
      setDummyData(filteredData);
    }
  };

  useEffect(() => {
    filterMyData();
  }, [selectedDate]);

  const datePickerHandler = (date) => {
    setSelectedDate(date);
  };

  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Roster Buster</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/home">Home</Link>
              </li>
              <li class="nav-item">              
                <Link class="nav-link" to="/events">Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
          <Route path="/home">
            <HomeContainer />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
