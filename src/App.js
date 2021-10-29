import "./App.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./components/card/Card";
import CardDetail from "./components/card/CardDetail";
import Home from "./components/Home/Home";
import {formatDateInWords} from "./lib/utility";
import NavBar from "./components/Layout/NavBar/NavBar";
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
        {Object.keys(dummyData).map((key) => {
          const title = `Task For ${formatDateInWords(key)}`
          return (          
            <Card key={key} title={title}>
              {dummyData[key].map((element, index) => {
                return (
                  <div key={index}>
                    <CardDetail data={element} cartIndex={index}  />
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
      <NavBar />
      <Switch>
          <Route exact path="/">
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
