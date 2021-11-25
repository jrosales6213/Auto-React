import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/sidebar/SideBar.js";
import Content from "./components/content/Content";
import CarImage from "./components/vehicleInfo/carImage.js";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  
  toggleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }
  render() {
    return (
      <Router>
        <div className="App wrapper">
          <SideBar onMenuToggle={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} />
          <Content onMenuToggle={this.toggleMenu} />
        </div>
      </Router>
    );
  }
}

export default App;




