import React ,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  


// // <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
//    <Navbar className="col-md-3 col-lg-2 d-md-block sidebar collapse">
//         <div class="position-sticky pt-3">
//           <Nav className="nav flex-column ">
//             <NavItem class="nav-item ">
//               <a class="nav-link navbar-brand active" aria-current="page" href="#">
//                 <i class="fas fa-home"></i>
//                 Dashboard
//               </a>
//             </NavItem>
//             <NavItem class="nav-item">
//               <a  type="button" class="nav-link" data-toggle="modal" data-target="#newCarModal">
//                 <i class="fas fa-plus-circle"></i>
//                 Add Car
//               </a>
//             </NavItem>
//             <NavItem class="nav-item">
//               <a class="nav-link" href="/service.html">
//                 <i class="fas fa-wrench"></i>
//                 Service
//               </a>
//             </NavItem>
//             <NavItem class="nav-item">
//               <a class="nav-link" href="/history.html">
//                 <i class="fas fa-history"></i>
//                 History
//               </a>
//             </NavItem>
//             <NavItem class="nav-item">
//               <a class="nav-link" href="#">
//                 <i class="far fa-chart-bar"></i>
//                 Stats (coming soon)
//               </a>
//             </NavItem>
//             <NavItem class="nav-item">
//               <a class="nav-link" href="#">
//                 <i class="fas fa-cog"></i>
//                 Diagnostic Codes (coming soon)
//               </a>
//             </NavItem>
//           </Nav>

//         </div>
//         <hr> */}
//         {/* <div class="navbar-nav">
//           <div class="nav-item text-nowrap">
//             <a class="nav-link px-3" href="#">
//               <i class="fas fa-sign-out-alt"></i>
//               Sign out</a>
//           </div>
//         </div>
//       </Navbar>
const links = [
    { href: '#home', text: 'Dashboard' },
    { href: '#addcar', text: 'Add Car' },
    { href: '#service', text: 'Service' },
    { href: '#history', text: 'History' },
    { href: '#stats', text: 'Stats' },
    { href: '#codes', text: 'Diagnotics' },
    { href: '/signout', text: 'Sign Out' },
  ];
const createNavItem = ({ href, text }) => (
    <NavItem>
      <NavLink href={href}>{text}</NavLink>
    </NavItem>
  );
  
  export default class SideBar extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isOpen: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    
    render() {
      return (
        <div>
      
          <Navbar className="sidebarMenu col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
          <NavbarBrand href="/" className ="col-md-3 col-lg-2 me-0  px-3">Auto React</NavbarBrand>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Navbar>
        </div>
      );
    
  }
}
  