// import React, { useState } from "react";
import classNames from "classnames";
import { Container, Modal } from "reactstrap";
// import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import CarImage from "../vehicleInfo/carImage";
import ModalForm from "../sidebar/ModalForm";


// const Content = ({ sidebarIsOpen, toggleSidebar }) => (
//   <Container
//     fluid
//     className={classNames("content", { "is-open": sidebarIsOpen })}
//   >
//     <Topbar toggleSidebar={toggleSidebar} />
//     <Switch>
//       <Route exact path="/" component={() => "Hello"} />
//       <Route exact path="/about"> <ModalForm/></Route>
//       <Route exact path="/Pages" component={() => "Pages"} />
//       <Route exact path="/faq" component={() => "FAQ"} />
//       <Route exact path="/contact" component={() => "Contact"} />
//       <Route exact path="/Car-1"> <CarImage/></Route>
//       <Route exact path="/Home-2" component={() => "Testing home 2"} />
//       <Route exact path="/Home-3" component={() => "Home-3"} />
//       <Route exact path="/Page-1" component={() => "Page-1"} />
//       <Route exact path="/Page-2" component={() => "Page-2"} />
//       <Route exact path="/page-1" component={() => "page-1"} />
//       <Route exact path="/page-2" component={() => "page-2"} />
//       <Route exact path="/page-3" component={() => "page-3"} />
//       <Route exact path="/page-4" component={() => "page-4"} />
//     </Switch>
//   </Container>
// );

// export default Content;

import React, { Component, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { VEHICLES } from "../../shared/vehicles"
import Directory from "./Directory";
import VehicleInfo from "./VehicleInfo";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Home.js";
// import {COMMENTS} from '../../shared/comments'
import SideBar from "../sidebar/SideBar.js";

// const [sidebarIsOpen, setSidebarOpen] = useState(true);
//   const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

class Content extends Component {
  constructor(props) {
    super(props);
    this.state ={
      vehicles: VEHICLES
      // comments: COMMENTS,
      // sidebarIsOpen: true,
    //   selectedVehicle: null
    };
  }
//   onVehicleSelect(vehicleId){
//       this.setState({selectedVehicle: vehicleId})
//   }

// toggleSidebar() {
//   this.setState(prevState => ({
//     sidebarIsOpen: !prevState.sidebarIsOpen
//   }));
// }
// [sidebarIsOpen, setSidebarOpen] = useState(true);
  // toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  render(){
    const HomePage = () => {
        return (
            <Home />
        );
    };
    const VehicleWithId = ({match}) => {
        return (
            <VehicleInfo 
                vehicle={this.state.vehicles.filter(vehicle => vehicle.id === +match.params.vehicleId)[0]}
                // comments={this.state.comments.filter(comment => comment.vehicleId === +match.params.vehicleId)}
            />
        );
    };  
    // toggleSidebar=() => {
    //   this.setState(prevState => ({
    //     sidebarIsOpen: !prevState.sidebarIsOpen
    //   }));
    // }  

    return (
        <div>
      <Container fluid >     
    {/* <Container fluid className={classNames("content", { "is-open": sidebarIsOpen })}> */}
    {/* <Topbar toggleSidebar={toggleSidebar} /> */}
    <Topbar/>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about"> <ModalForm/></Route>
        <Route exact path="/directory" render={() => <Directory vehicles={this.state.vehicles} />} />
        <Route exact path='/directory/:vehicleId' component={VehicleWithId}/>
        <Route exact path="/contact" component={() => "Contact"} />
        <Route exact path="/Car-1"> <CarImage/></Route>
        <Route exact path="/Home-2" component={() => "Testing home 2"} />
        <Route exact path="/Home-3" component={() => "Home-3"} />
        <Route exact path="/Page-1" component={() => "Page-1"} />
        <Route exact path="/Page-2" component={() => "Page-2"} />
        <Route exact path="/page-1" component={() => "page-1"} />
        <Route exact path="/page-2" component={() => "page-2"} />
        <Route exact path="/page-3" component={() => "page-3"} />
        <Route exact path="/page-4" component={() => "page-4"} />
        <Redirect to='/home' />
      </Switch>
  </Container>
  
       </div>
    )
  }
}

export default Content;