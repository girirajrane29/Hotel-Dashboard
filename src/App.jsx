import { useState } from "react";
import "./App.css";
import "./Fonts/ArchitypeRenner-Bold.otf";
import "./Fonts/ArchitypeRenner-Medium.otf";
import "./Fonts/ArchitypeRenner-Demi.otf";
import "./Fonts/ArchitypeRenner-Regular.otf";
import Sidebar from "./component/Sidebar";
import Home from "./component/Home";
import Rightbar from "./component/Rightbar";

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <Sidebar />
        <Home />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
