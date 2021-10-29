import React, { useState, useEffect } from "react";

import Card from "../card/Card";
import CardDetail from "../card/CardDetail";
import { formatDateInWords, formatDateAsKey } from "../../lib/utility";
const EventList = function (props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [rosterBusterData, setRosterBusterData] = useState(props.data);
  const [startIndex, setStartIndex] = useState(0);

  let totalLength = Object.keys(rosterBusterData).length;

  useEffect(() => {
    filterRosterBusterData();
  }, [selectedDate]);

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

  const filterRosterBusterData = () => {
    const key = formatDateAsKey(selectedDate);
    if (!key) return;
    if (key in props.data) {
      setRosterBusterData({ [key]: props.data[key] });
    } else {
      setRosterBusterData({});
    }
  };

  const clearSelectedDate = () => {
    setSelectedDate("");
    setRosterBusterData(props.data);
  };

  const pagination = () => {
    const pagination = [];
    for (let i = 0; i < totalLength / 3; i++) {
      pagination.push(
        <li className="page-item" onClick={() => setStartIndex(i * 3)}>
          <a className="page-link">{i}</a>
        </li>
      );
    }
    return pagination;
  };

  return (
    <>
      <div className="col-sm-6 pt-3" style={{ margin: "auto" }}>
        <div className="d-flex">
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(event) => {
              return setSelectedDate(event.target.value);
            }}
          />
          <button className="btn btn-danger" onClick={clearSelectedDate}>
            <i class="fa fa-times fa-lg"></i>
          </button>
        </div>
      </div>

      {Object.keys(rosterBusterData).length <= 0 && <p>No Data Found</p>}
      {/* {
      Object.keys(rosterBusterData).map((key) => {
        const title = `Task For ${formatDateInWords(key)}`;
        return (
          <Card key={key} title={title}>
            {rosterBusterData[key].map((element, index) => {
              return (
                <div key={index}>
                  <CardDetail data={element} cartIndex={index} />
                </div>
              );
            })}
          </Card>
        );
      })
      } */}
      {setPaginatedData()}
      {
        <div className="card col-sm-6 mt-3 mb-3" style={{ margin: "auto" }}>
          <ul className="pagination pt-2 pb-2" style={{ margin: "auto" }}>
            {pagination()}
          </ul>
        </div>
      }
    </>
  );
};

export default EventList;
