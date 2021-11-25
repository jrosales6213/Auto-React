import React, { Component, setState} from "react";
import Directory from "./Directory";
import VehicleInfo from "./VehicleInfo";
import Topbar from "./Topbar";
import CarImage from "../vehicleInfo/carImage";
import ModalForm from "../sidebar/ModalForm";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home.js";
import { Container, Modal } from "reactstrap";
import { VEHICLES } from "../../shared/vehicles"
import { Switch, Route, Redirect } from 'react-router-dom';
import {COMMENTS} from '../../shared/comments'


class Content extends Component {
  constructor(props) {
    super(props);
    this.state ={
      vehicles: VEHICLES,
      comments: COMMENTS
    };
  }

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
    <>
    <Container fluid className={classNames("content")}>
    <Topbar onMenuToggle={this.props.onMenuToggle}/>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/add-car"> <ModalForm/></Route>
        <Route exact path="/directory" render={() => <Directory vehicles={this.state.vehicles} />} />
        <Route exact path='/directory/:vehicleId' component={VehicleWithId}/>
        <Route exact path="/service" component={() => "Service"} />
        <Route exact path="/Car-1"> <CarImage/></Route>
        {/* <Route exact path="/directory/:vehicleId" component={SubMenu} /> */}
        <Route exact path="/history" component={() => "History"} />
        <Route exact path="/stats" component={() => "Stats"} />
        <Route exact path="/Page-2" component={() => "Page-2"} />
        <Route exact path="/page-1" component={() => "page-1"} />
        <Route exact path="/page-2" component={() => "page-2"} />
        <Route exact path="/page-3" component={() => "page-3"} />
        <Route exact path="/page-4" component={() => "page-4"} />
        <Redirect to='/home' />
      </Switch>
  </Container>
  
       </>
    )
  }
}

export default Content;

//11-7-21 - added vehicle cards. Things need to do : link submenu to vehicle. Create a updated card. Submit button for new comments. 