import React, { useState, useEffect } from "react";
import Card from "../Layout/Card/Card";
import CardDetail from "../Layout/Card/CardDetail";
import { formatDateInWords, formatDateAsKey } from "../../lib/utility";
import NoTaskFound from "../NoTaskFound/NoTaskFound";

const EventList = function (props) {
  // + State declaration.
  const [selectedDate, setSelectedDate] = useState("");
  const [rosterBusterData, setRosterBusterData] = useState(props.data);
  const [startIndex, setStartIndex] = useState(0);

  let totalLength = Object.keys(rosterBusterData).length;

  // + Side-effect.
  useEffect(() => {
    filterRosterBusterData();
  }, [selectedDate]);

  // + Render paginated data -  and use Card component to display the info.
  function setPaginatedData() {
    const paginatedDataKey = Object.keys(rosterBusterData).slice(
      startIndex,
      startIndex + 3
    );
    const paginatedData = {};
    for (let i = 0; i < paginatedDataKey.length; i++) {
      paginatedData[paginatedDataKey[i]] = props.data[paginatedDataKey[i]];
    }
    return Object.keys(paginatedData).map((key) => {
      const title = `Task For ${formatDateInWords(key)}`;
      return (
        <Card key={key} title={title}>
          {paginatedData[key].map((element, index) => {
            return (
              <div key={index}>
                <CardDetail data={element} cartIndex={index} />
              </div>
            );
          })}
        </Card>
      );
    });
  }

  // Filter RosterBusterData on the basis of user input date.
  const filterRosterBusterData = () => {
    const key = formatDateAsKey(selectedDate);
    if (!key) return;
    if (key in props.data) {
      setRosterBusterData({ [key]: props.data[key] });
      setStartIndex(0);
    } else {
      setRosterBusterData({});
      setStartIndex(0);
    }
  };

  // Clear selected date & re-initialize the RosterBusterData with props.
  const clearSelectedDate = () => {
    setSelectedDate("");
    setRosterBusterData(props.data);
  };

  // Render pagination list.
  const pagination = () => {
    const pagination = [];
    for (let i = 0; i < totalLength / 3; i++) {
      pagination.push(
        <li key={i} className="page-item" onClick={() => setStartIndex(i * 3)}>
          <a className="page-link">{i + 1}</a>
        </li>
      );
    }
    return pagination;
  };

  return (
    <>
      <div className="col-sm-6 pt-3" style={{ margin: "auto" }}>
        <div className="input-group">
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(event) => {
              return setSelectedDate(event.target.value);
            }}
          />
          <button className="btn btn-danger" onClick={clearSelectedDate}>
            <i className="fa fa-times fa-lg"></i>
          </button>
        </div>
      </div>

      {Object.keys(rosterBusterData).length <= 0 && (
        <NoTaskFound textClass="text-danger">
          No Events Found On Current Date.
        </NoTaskFound>
      )}
      {setPaginatedData()}
      {Object.keys(rosterBusterData).length > 0 && (
        <div className="card col-sm-6 mt-3 mb-3" style={{ margin: "auto" }}>
          <ul className="pagination pt-2 pb-2" style={{ margin: "auto" }}>
            {pagination()}
          </ul>
        </div>
      )}
    </>
  );
};

export default EventList;
