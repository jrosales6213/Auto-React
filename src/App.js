import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import SideBar from "./components/sidebar/SideBar.js";
import Content from "./components/content/Content";

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  
  toggleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }
 

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App wrapper">
            <SideBar onMenuToggle={this.toggleMenu} isMenuOpen={this.state.isMenuOpen} />
            <Content onMenuToggle={this.toggleMenu} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
. . .

const store = ConfigureStore();

. . .
      <Provider store={store}>
          <BrowserRouter>
              <div className="App">
                  <Main />
              </div>
          </BrowserRouter>
      </Provider>



