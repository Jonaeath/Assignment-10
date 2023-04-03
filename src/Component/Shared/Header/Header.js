import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import image from '../../../Asset/Image/image-01.jpg'
import { Image } from "react-bootstrap";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";



const Header = () => {

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Image className="me-2" roundedCircle src = {image} style = {{height:'40px'}}></Image>  
          <Navbar.Brand className="me-5" href="">ICT-Hospital</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" me-auto">
              <Nav.Link className="me-3" href="">Home</Nav.Link>
              <Nav.Link className="me-3" href="">Courses</Nav.Link>
              <Nav.Link className="me-3" href="">FAQ</Nav.Link>
              <Nav.Link className="me-3" href="">Blog</Nav.Link>
            </Nav>
            <Nav>
            <FaUser className="mt-3" style={{color: 'blue'}}></FaUser>
              <NavDropdown  title="User" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                <Link to = '/login'>Sign IN</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to = '/signup' >Sign UP</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Log Out
                </NavDropdown.Item>
              </NavDropdown> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </div>
  );
};

export default Header;
