// import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { ConfigureStore } from "./redux/configureStore";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// // import SideBar from "./components/Navbar/SideBar";
// import Main from "./components/Main";

// const store = ConfigureStore();

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMenuOpen: true,
//     };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }

//   toggleMenu() {
//     this.setState({ isMenuOpen: !this.state.isMenuOpen });
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <div className="App wrapper">
//             {/* <SideBar
//               onMenuToggle={this.toggleMenu}
//               isMenuOpen={this.state.isMenuOpen}
//             /> */}
//             <Main
//               onMenuToggle={this.toggleMenu}
//               isMenuOpen={this.state.isMenuOpen}
//             />
//           </div>
//         </Router>
//       </Provider>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import SideBar from "./components/Navbar/SideBar";
import Main from "./components/Main";

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
            {/* <SideBar
              onMenuToggle={this.toggleMenu}
              isMenuOpen={this.state.isMenuOpen}
            /> */}
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
