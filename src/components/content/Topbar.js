import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faCog,
  faSignOutAlt,
  faBellO,
  faConciergeBell,
  faBellSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Dropdown,
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

function AlertIcon() {
  return (
    <li className="notifications new">
      <a href="" data-toggle="dropdown">
        <i className="fa fa-bell-o"></i>
        <sup>
          <span className="counter">2</span>
        </sup>
      </a>

      <DropdownMenu className="notifications-dropdown-menu">
        <ul className="notifications-container">
          <li>
            <a href="" className="notification-item">
              <div class="body-col">
                <p>
                  <span className="accent">Toyota</span> New Recall:
                  <span className="accent">
                    Problem with Air Conditioner System
                  </span>
                  .
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="notification-item">
              <div class="body-col">
                <p>
                  <span className="accent">Toyota</span> Upcoming maintenance:
                  <span className="accent">12/21/22</span>.
                </p>
              </div>
            </a>
          </li>
        </ul>
        <footer>
          <ul>
            <li>
              <a href="">View All</a>
            </li>
          </ul>
        </footer>
      </DropdownMenu>
    </li>
  );
}

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
        expand="md"
      >
        <Button color="info" onClick={this.props.onMenuToggle}>
          <FontAwesomeIcon icon={faAlignJustify} />
        </Button>
        {/* <NavbarToggler onClick={this.toggleTopBar} /> */}
        {/* <DropdownMenu className="notifications-dropdown-menu"></DropdownMenu> */}

        {/* <Collapse isOpen={this.state.topBarIsOpen} navbar> */}
        <Nav className="ml-auto" navbar>
          {/* <NavItem>
            <NavLink tag={Link} to={"/page-1"}>
              page 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-2"}>
              page 2 {AlertIcon}
            </NavLink>
          </NavItem> */}
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              <a href="" data-toggle="dropdown">
                <FontAwesomeIcon icon={faBell} size="lg" />
                <sup>
                  <span className="counter">2</span>
                </sup>
              </a>
            </DropdownToggle>
            <DropdownMenu right className="notifications-dropdown-menu">
              <DropdownItem>
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                Profile
              </DropdownItem>
              <DropdownItem>
                <FontAwesomeIcon icon={faBell} className="mr-1" />
                Notifications
              </DropdownItem>
              <DropdownItem>
                <FontAwesomeIcon icon={faCog} className="mr-1" />
                Settings
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          {/* <NavItem>
            <li className="notifications new">
              <a
                href=""
                data-toggle="dropdown"
                className="align-content-center"
              >
                <FontAwesomeIcon icon={faBell} size="lg" />
                <sup>
                  <span className="counter">2</span>
                </sup>
              </a>
              <DropdownMenu className="notifications-dropdown-menu">
                <ul className="notifications-container">
                  <li>
                    <a href="" className="notification-item">
                      <div className="body-col">
                        <p>
                          <span className="accent">Toyota</span> New Recall:
                          <span className="accent">
                            Problem with Air Conditioner System
                          </span>
                          .
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="" className="notification-item">
                      <div class="body-col">
                        <p>
                          <span className="accent">Toyota</span> Upcoming
                          maintenance:
                          <span className="accent">12/21/22</span>.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
                <footer>
                  <ul>
                    <li>
                      <a href="">View All</a>
                    </li>
                  </ul>
                </footer>
              </DropdownMenu>
            </li>
          </NavItem> */}

          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              <img
                className="avatar-img"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
              <span class="name">Jesus Rosales </span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                Profile
              </DropdownItem>
              <DropdownItem>
                <FontAwesomeIcon icon={faBell} className="mr-1" />
                Notifications
              </DropdownItem>
              <DropdownItem>
                <FontAwesomeIcon icon={faCog} className="mr-1" />
                Settings
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* </Collapse> */}
      </Navbar>
    );
  }
}

export default Topbar;
