import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  Nav,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topBarIsOpen: false,
    };
    this.toggleTopBar = this.toggleTopBar.bind(this);
  }

  toggleTopBar = () => {
    this.setState({
      topBarIsOpen: !this.state.topBarIsOpen,
    });
  };
  render() {
    return (
      <Navbar
        color="light"
        light
        className="navbar shadow-sm p-3 mb-5 bg-light "
        expand="xs"
      >
        <Button color="info" onClick={this.props.onMenuToggle}>
          <FontAwesomeIcon icon={faAlignJustify} />
        </Button>

        <Nav className="ml-auto" navbar>
          {/* ---- NOTIFICAITON ICON------
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle nav className="notifications new p-2">
              <FontAwesomeIcon icon={faBell} size="lg" />
              <sup>
                <span className="counter">2</span>
              </sup>
            </DropdownToggle>
             ----NOTIFICATION TOGGLE----- 
            <DropdownMenu className="notifications-dropdown-menu">
              <DropdownItem>
                <div className="body-col">
                  <p>
                    <span className="accent">Recall: </span>
                    Electrical problems in the interior of vehicle.
                  </p>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="body-col">
                  <p>
                    <span className="accent">Reminder: </span>
                    Oil change in 2 days.
                  </p>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>  */}

          {/*---- PROFILE ICON -----*/}
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle nav>
              <img
                className="avatar-img"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
              <span class="name">JR</span>
            </DropdownToggle>

            {/* PROFILE ICON TOGGLE */}
            <DropdownMenu className="profile-dropdown-menu" right>
              <DropdownItem className="profile-dropdown-item">
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                Profile
              </DropdownItem>
              <DropdownItem className="profile-dropdown-item">
                <FontAwesomeIcon icon={faBell} className="mr-1" />
                Notifications
              </DropdownItem>
              <DropdownItem className="profile-dropdown-item">
                <FontAwesomeIcon icon={faCog} className="mr-1" />
                Settings
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="profile-dropdown-item">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Topbar;
