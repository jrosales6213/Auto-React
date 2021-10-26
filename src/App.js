import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/sidebar/SideBar.js";
import Content from "./components/content/Content";
import CarImage from "./components/vehicleInfo/carImage.js";
import "./App.css";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <div className="App wrapper">
        <SideBar className=".text-white" toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};

export default App;
