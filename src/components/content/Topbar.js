import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

class Topbar extends Component {
  // const [topbarIsOpen, setTopbarOpen] = useState(true);
  // const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  constructor(props) {
    super(props);
    this.state = {/* Awesome State Not Yet Used */}
  }
  render () {
    return (
      <Navbar
        color="light"
        light
        className="navbar shadow-sm p-3 mb-5 bg-light "
        expand="md"
      >
        <Button color="info" onClick={this.props.onMenuToggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <NavbarToggler onClick={this.props.onMenuToggle} />
        <Collapse isOpen={this.props.isMenuOpen}  navbar>
      
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to={"/page-1"}>
                page 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/page-2"}>
                page 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/page-3"}>
                page 3
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/page-4"}>
                page 4
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );

  }
};

export default Topbar;
