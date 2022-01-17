import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({ forceRefresh: true });

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App wrapper">
            <Main
              onMenuToggle={this.toggleMenu}
              isMenuOpen={this.state.isMenuOpen}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
