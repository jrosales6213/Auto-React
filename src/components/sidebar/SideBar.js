import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faWrench,
  faHistory,
  faChartBar,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";




import SubMenu from "./SubMenu";
import ModalForm from "./ModalForm";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Auto React</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className= "list-unstyled pb-3">
        <p>Main Page</p>
        <SubMenu  title="Home" icon={faHome} items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/about"} toggle={ModalForm}>
            <FontAwesomeIcon className="mr-2" icon={faPlusCircle} />
             Add Car
          </NavLink>
        </NavItem>
        <SubMenu title=" Pages" icon={faCopy} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <FontAwesomeIcon icon={faWrench} className="mr-2" />
          Service
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faHistory} className="mr-2" />
            History
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            Stats
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Honda Civic",
      target: "Car-1",
    },
    {
      title: "Toyota Corolla",
      target: "Home-2",
    },
    {
      title: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;