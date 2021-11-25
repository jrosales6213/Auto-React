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


  // const [sidebarIsOpen, setSidebarOpen] = useState(true);
  // const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
 

export default App;







// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {/* Awesome State Not Yet Used */}
//   }
  
//   render() {
//     return (
//       <div className="header">
//         <ul className="menu simple float-right">
//           <li>Home</li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><button type="button" className="button small" onClick={this.props.onMenuToggle}>Toggle Menu</button></li>
//         </ul>
//       </div>
//     )
//   }
// }


// class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {/* Awesome State Not Yet Used */}
//   }
  
//   render() {
//     return (
//       <div className={`sidebar-menu${this.props.isMenuOpen === true ? ' open' : ''}`}>
//         <button type="button" className="button small float-right" onClick={this.props.onMenuToggle}>Toggle Menu</button>
//         <ul className="vertical menu">
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//         </ul>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMenuOpen: false
//     }
//     this.toggleMenu = this.toggleMenu.bind(this)
//   }
  
//   toggleMenu() {
//     this.setState({isMenuOpen: !this.state.isMenuOpen})
//   }
  
//   render() {
//     return (
//       <div className="app-container">
//         <Header
//           onMenuToggle={this.toggleMenu}
//         />
//         <Menu
//           isMenuOpen={this.state.isMenuOpen}
//           onMenuToggle={this.toggleMenu}
//         />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {/* Awesome State Not Yet Used */}
//   }
  
//   render() {
//     return (
//       <div className="header">
//         <ul className="menu simple float-right">
//           <li>Home</li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><button type="button" className="button small" onClick={this.props.onMenuToggle}>Toggle Menu</button></li>
//         </ul>
//       </div>
//     )
//   }
// }


// class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {/* Awesome State Not Yet Used */}
//   }
  
//   render() {
//     return (
//       <div className={`sidebar-menu${this.props.isMenuOpen === true ? ' open' : ''}`}>
//         <button type="button" className="button small float-right" onClick={this.props.onMenuToggle}>Toggle Menu</button>
//         <ul className="vertical menu">
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//         </ul>
//       </div>
//     )
//   }
// }

