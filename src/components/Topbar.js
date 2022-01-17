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
          {/*---- PROFILE ICON -----*/}
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle nav>
              <img
                className="avatar-img"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
              <span className="name">JR</span>
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
