import React, { useState } from "react";
import { Badge } from "antd";
import { GoBell } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const calendarData = {
  days: [1, 2, 3, 4, 5, 6, 7],
  dateInfo: {
    1: "Machine repair Task Assigned to Aris Nurman",
    2: "Machine repair Task Completed by Aris Nurman",
    3: "Cleaning rooms Task Assigned to Sarah serah",
    4: "Cleaning rooms Task Completed by Sarah serah",
    5: "Cooking for guests is completed by Korun Aas",
    6: "A/C repair Task Assigned & Completed to Aris Nurman",
  },
};

const Rightbar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleClickDay = (day) => {
    setSelectedDate(day);
  };

  const renderDay = (day) => (
    <td
      key={day}
      onClick={() => handleClickDay(day)}
      className={day === selectedDate ? "selected" : ""}
    >
      {day}
    </td>
  );
  return (
    <div>
      <div className="top-right">
        <Badge dot>
          <GoBell className="icon bell-circle" />
        </Badge>
        <div className="user">
          <div className="profile">
            <h3>Anjayani abraham</h3>
            <h5>Owner</h5>
          </div>
          <FaCircleUser className="user-icon" />
          <RiArrowDropDownLine className="drop icon" />
        </div>
      </div>
      <div className="staff">
        <p>Staff schedule</p>
        <div className="staff-schedule">
          <p>{selectedDate} October 2021</p>
          <br />
          <table>
            <thead>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thr</th>
              <th>Fri</th>
              <th>Sat</th>
            </thead>
            <tbody>
              <tr>{calendarData.days.slice(0, 7).map(renderDay)}</tr>
            </tbody>
          </table>
          {selectedDate && (
            <div>
              <h3>Tasks for {selectedDate} October 2021 :</h3>
              <br />
              <p>
                {calendarData.dateInfo[selectedDate] ||
                  "No data available for selected date."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
