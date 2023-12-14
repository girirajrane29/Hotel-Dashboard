import React from "react";
import totalArrived from "../Images/TotalArrived.jpg";
import totalBooked from "../Images/TotalBooked.jpg";
import checkIn from "../Images/CheckIn.jpg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const data = [
    {
      name: "Jan",
      Visited: 100,
      Booked: 49,
    },
    {
      name: "Feb",
      Visited: 110,
      Booked: 75,
    },
    {
      name: "Mar",
      Visited: 170,
      Booked: 78,
    },
    {
      name: "Apr",
      Visited: 140,
      Booked: 100,
    },
    {
      name: "May",
      Visited: 125,
      Booked: 49,
    },
    {
      name: "Jun",
      Visited: 145,
      Booked: 75,
    },
    {
      name: "Jul",
      Visited: 130,
      Booked: 120,
    },
    {
      name: "Aug",
      Visited: 110,
      Booked: 105,
    },
    {
      name: "Sep",
      Visited: 55,
      Booked: 80,
    },
    {
      name: "Oct",
      Visited: 65,
      Booked: 125,
    },
    {
      name: "Nov",
      Visited: 75,
      Booked: 95,
    },
    {
      name: "Dec",
      Visited: 75,
      Booked: 150,
    },
  ];
  return (
    <main>
      <div>
        <div className="main">
          <h2>
            Welcome, <b>Ariana !</b>
          </h2>
          <p>Don't forget to check your activity</p>
        </div>
        <div className="main-container">
          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <img
                  src={totalArrived}
                  alt="This is image"
                  width="60"
                  height="60"
                />
                <div>
                  <p>
                    Total Arrived
                    <br />
                  </p>
                  <h3>
                    <b>235</b>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <img
                  src={totalBooked}
                  alt="This is image"
                  width="60"
                  height="60"
                />
                <div>
                  <p>
                    Total Booked
                    <br />
                  </p>
                  <h3>
                    <b>891</b>
                  </h3>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <img src={checkIn} alt="This is image" width="60" height="60" />
                <div>
                  <p>
                    Total Checkin
                    <br />
                  </p>
                  <h3>
                    <b>129</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chart">
          <p>Campaign Overview</p>
          <ResponsiveContainer>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Visited"
                stroke="#00bfff"
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Booked"
                stroke="#ff8400"
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="book-list">
          <p>Booking List</p>
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jordy Astaws</td>
                <td>082378740</td>
                <td>Double</td>
                <td>01/10/21</td>
                <td>02/10/21</td>
                <td>
                  <div className="Paid">Paid</div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Alisaoon</td>
                <td>082479009</td>
                <td>Double</td>
                <td>28/09/21</td>
                <td>01/10/21</td>
                <td>
                  <div className="Pending">Pending</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Home;
