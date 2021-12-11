import React, { Component, setState } from "react";
import Directory from "./Directory";
import VehicleInfo from "./VehicleInfo";
import Topbar from "./Topbar";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.js";
import AddVehicle from "../Navbar/AddVehicleForm";
import { Container } from "reactstrap";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment, deleteComment } from "../../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles,
    comments: state.comments,
  };
};
const mapDispatchToProps = {
  addComment: (vehicleId, text, nextServiceDay) =>
    addComment(vehicleId, text, nextServiceDay),
  deleteComment: (id) => deleteComment(id),
};

class Content extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };
    const VehicleWithId = ({ match }) => {
      return (
        <VehicleInfo
          vehicle={
            this.props.vehicles.filter(
              (vehicle) => vehicle.id === +match.params.vehicleId
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.vehicleId === +match.params.vehicleId
          )}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
        />
      );
    };

    return (
      <>
        <Container fluid className={classNames("content")}>
          <Topbar onMenuToggle={this.props.onMenuToggle} />
          <Switch>
            <Route exact path="/add-car" render={() => <AddVehicle />}></Route>
            <Route
              exact
              path="/home"
              render={() => <Directory vehicles={this.props.vehicles} />}
            />
            <Route
              exact
              path="/directory/:vehicleId"
              component={VehicleWithId}
            />
            <Route exact path="/diagnostics" component={() => "Diagnostics"} />
            <Route exact path="/costs" component={() => "Costs"} />
            <Route exact path="/recall" component={() => "Recall"} />
            <Route exact path="/Page-2" component={() => "Page-2"} />
            <Redirect to="/home" />
          </Switch>
        </Container>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Content)
);

//11-7-21 - added vehicle cards. Things need to do : link submenu to vehicle. Create a updated card. Submit button for new comments.
