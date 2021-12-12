import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faWrench,
  faDollarSign,
  faExclamationTriangle,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class SideBar extends Component {
  render() {
    return (
      <div
        className={classNames("sidebar", { "is-open": this.props.isMenuOpen })}
      >
        <div className="sidebar-header">
          <span
            color="info"
            onClick={this.props.isMenuOpen}
            style={{ color: "#fff" }}
          >
            &times;
          </span>
          <h3>Auto React</h3>
        </div>

        <div className="side-menu pt-2">
          <Nav vertical className="list-unstyled pb-3 ">
            <NavItem>
              <NavLink tag={Link} to={"/home"}>
                <FontAwesomeIcon className="mr-2" icon={faHome} />
                DashBoard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/add-car"}>
                <FontAwesomeIcon className="mr-2" icon={faPlusCircle} />
                Add Car
              </NavLink>
            </NavItem>

            {/* <SubMenu title="Cars" icon={faCopy} items={VEHICLES} /> */}
            <NavItem>
              <NavLink tag={Link} to={"/diagnostics"}>
                <FontAwesomeIcon icon={faWrench} className="mr-2" />
                Diagnostics
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/warranty"}>
                <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                Warranty
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/recall"}>
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="mr-2"
                />
                Recall
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/about"}>
                <FontAwesomeIcon icon={faInfo} className="mr-2" />
                About
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

// const submenus = [
//   [
//     {
//       title: "Honda Civic",
//       target: "Car-1",
//     },
//     {
//       title: "Toyota Corolla",
//       target: "Home-2",
//     },
//     {
//       title: "Home 3",
//       target: "Home-3",
//     },
//   ],
//   [
//     {
//       title: "Page 1",
//       target: "Page-1",
//     },
//     {
//       title: "Page 2",
//       target: "Page-2",
//     },
//   ],
// ];

export default SideBar;
