// import React, { Component, setState } from "react";
// import VehicleInfo from "./VehicleInfo";
// import Topbar from "./Topbar";
// import Sidebar from "./SideBar";
// import classNames from "classnames";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddVehicle from "./AddVehicleForm";
// import Diagnostics from "./DiagnosticsForm";
// import WarrantyForm from "./WarrantyForm";
// import RecallForm from "./RecallForm";
// import DashboardItems from "./Home";
// import { Container } from "reactstrap";
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { addComment, addVehicle } from "../redux/ActionCreators";

// const mapStateToProps = (state) => {
//   return {
//     vehicles: state.vehicles,
//     comments: state.comments,
//   };
// };
// const mapDispatchToProps = {
//   addComment: (vehicleId, text, nextServiceDay) =>
//     addComment(vehicleId, text, nextServiceDay),
//   addVehicle: (make, model, year, owner) =>
//     addVehicle(make, model, year, owner),
// };

// class Main extends Component {
//   render() {
//     const VehicleWithId = ({ match }) => {
//       return (
//         <VehicleInfo
//           vehicle={
//             this.props.vehicles.filter(
//               (vehicle) => vehicle.id === +match.params.vehicleId
//             )[0]
//           }
//           comments={this.props.comments.filter(
//             (comment) => comment.vehicleId === +match.params.vehicleId
//           )}
//           addComment={this.props.addComment}
//         />
//       );
//     };

//     return (
//       <>
//         <Sidebar
//           onMenuToggle={this.props.toggleMenu}
//           isMenuOpen={this.props.isMenuOpen}
//         />
//         <Container fluid className={classNames("content")}>
//           <Topbar onMenuToggle={this.props.onMenuToggle} />
//           <Switch>
//             <Route
//               exact
//               path="/add-car"
//               render={() => <AddVehicle addVehicle={addVehicle} />}
//             ></Route>
//             <Route
//               exact
//               path="/home"
//               render={() => <DashboardItems vehicles={this.props.vehicles} />}
//             />
//             <Route
//               exact
//               path="/directory/:vehicleId"
//               component={VehicleWithId}
//             />
//             <Route exact path="/diagnostics" render={() => <Diagnostics />} />
//             <Route exact path="/warranty" component={() => <WarrantyForm />} />
//             <Route exact path="/recall" component={() => <RecallForm />} />
//             <Route exact path="/about" component={() => "About"} />
//             <Redirect to="/home" />
//           </Switch>
//         </Container>
//       </>
//     );
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

import React, { Component, setState } from "react";
import VehicleInfo from "./VehicleInfo";
import Topbar from "./Topbar";
import Sidebar from "./SideBar";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import AddVehicle from "./AddVehicleForm";
import Diagnostics from "./DiagnosticsForm";
import WarrantyForm from "./WarrantyForm";
import RecallForm from "./RecallForm";
import DashboardItems from "./Home";
import { Container } from "reactstrap";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  postComment,
  deleteComment,
  editComment,
  postNewVehicle,
  fetchComments,
  fetchVehicles,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import TestVehicleForm from "./TestVehicleForm";

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles,
    comments: state.comments,
  };
};
const mapDispatchToProps = {
  postComment: (vehicleId, date, text, nextServiceDay) =>
    postComment(vehicleId, date, text, nextServiceDay),
  postNewVehicle: (make, model, year, owner) =>
    postNewVehicle(make, model, year, owner),
  fetchVehicles: () => fetchVehicles(),
  fetchComments: () => fetchComments(),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
  deleteComment: (vehicleId) => deleteComment(vehicleId),
  editComment: (comment) => editComment(comment),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchVehicles();
    this.props.fetchComments();
  }
  render() {
    const VehicleWithId = ({ match }) => {
      return (
        <VehicleInfo
          vehicle={
            this.props.vehicles.vehicles.filter(
              (vehicle) => vehicle.id === +match.params.vehicleId
            )[0]
          }
          isLoading={this.props.vehicles.isLoading}
          errMess={this.props.vehicles.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.vehicleId === +match.params.vehicleId
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          deleteComment={this.props.deleteComment}
          editComment={this.props.editComment}
        />
      );
    };

    return (
      <>
        <Sidebar
          onMenuToggle={this.props.toggleMenu}
          isMenuOpen={this.props.isMenuOpen}
        />
        <Container fluid className={classNames("content")}>
          <Topbar onMenuToggle={this.props.onMenuToggle} />
          <Switch>
            {/* <Route
              exact
              path="/add-car"
              render={() => <AddVehicle resetFeedbackForm={this.props.resetFeedbackForm} />}
            ></Route> */}
            <Route
              exact
              path="/home"
              render={() => (
                <DashboardItems
                  vehicles={this.props.vehicles}
                  vehiclesLoading={this.props.vehicles.isLoading}
                  vehiclesErrMess={this.props.vehicles.errMess}
                />
              )}
            />
            <Route
              exact
              path="/directory/:vehicleId"
              component={VehicleWithId}
            />
            <Route exact path="/diagnostics" render={() => <Diagnostics />} />
            <Route exact path="/warranty" component={() => <WarrantyForm />} />
            <Route exact path="/recall" component={() => <RecallForm />} />
            <Route
              exact
              path="/about"
              component={() => (
                <TestVehicleForm
                  resetFeedbackForm={this.props.resetFeedbackForm}
                  postNewVehicle={this.props.postNewVehicle}
                />
              )}
            />
            <Redirect to="/home" />
          </Switch>
        </Container>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
