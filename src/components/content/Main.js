import React, { Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { VEHICLES } from "../../shared/vehicles.js";
import Directory from "./Directory.js";
import VehicleInfo from "./VehicleInfo";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Home.js";
// import {COMMENTS} from '../../shared/comments'
import SideBar from "../sidebar/SideBar.js";
import SubMenu from "../sidebar/SubMenu.js";

// const [sidebarIsOpen, setSidebarOpen] = useState(true);
//   const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state ={
      vehicles: VEHICLES,
      comments: COMMENTS
    //   selectedVehicle: null
    };
  }
//   onVehicleSelect(vehicleId){
//       this.setState({selectedVehicle: vehicleId})
//   }
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
                comments={this.state.comments.filter(comment => comment.vehicleId === +match.params.vehicleId)}
            />
        );
    };    

    return (
        <div>
            <SideBar/> 
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory vehicles={this.state.vehicles} />} />
                <Route path='/directory/:vehicleId' component={VehicleWithId} />
                <Route path='/directory/:vehicleId' component={SubMenu} />
                <Redirect to='/home' />
            </Switch>
  
       </div>
    )
  }
}

export default Main;